import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formdata, setForm] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setForm({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const message = async () => {
    const { fname, lname, mobile, email, password } = formdata;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;

    if (!fname || !lname || !mobile || !email || !password) {
      alert("Please fill all the details");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters and contain only letters and numbers."
      );
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fname + " " + lname,
          mobile,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registered Successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Register Card */}
      <div className="relative z-10 bg-white/90 p-10 rounded-2xl shadow-2xl w-[400px]">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
           CropCare Register
        </h2>

        {/* First Name */}
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formdata.fname}
          onChange={handlechange}
          className="w-full border p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Last Name */}
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formdata.lname}
          onChange={handlechange}
          className="w-full border p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formdata.mobile}
          onChange={handlechange}
          className="w-full border p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={handlechange}
          className="w-full border p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formdata.password}
          onChange={handlechange}
          className="w-full border p-3 mb-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Button */}
        <button
          onClick={message}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;