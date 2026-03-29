import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext";
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formdata, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const validatechange = async () => {
    const { email, password } = formdata;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;

    if (!emailRegex.test(email)) {
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
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        login(data.user, data.token);

        alert("Login Successful!");
        navigate("/user"); // redirect to prediction page
      } else {
        alert(data.message || "Login failed");
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

      {/* Login Card */}
      <div className="relative z-10 bg-white/90 p-10 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
           CropCare Login
        </h2>

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Forgot Password */}
        <p className="text-right text-sm mb-4">
          <NavLink
            to="/forgot-password"
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </NavLink>
        </p>

        {/* Button */}
        <button
          onClick={validatechange}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Create New Account
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;