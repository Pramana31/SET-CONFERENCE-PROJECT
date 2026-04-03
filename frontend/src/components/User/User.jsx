import { useState } from "react";
import axios from "axios";

export default function PredictPage() {
  const [form, setForm] = useState({
    soil_type: "",
    soil_pH: "",
    alert_level:"",
    field_area_ha:"",
    temperature_avg_C: "",
    humidity_pct: "",
    rainfall_mm: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", form);
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 bg-white/90 p-8 rounded-2xl shadow-2xl w-[450px]">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          CropCare
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.replaceAll("_", " ")}
              onChange={handleChange}
              className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Predict
        </button>

        {/* Result */}
        {result !== null && (
          <div className="mt-6 text-center">
            <h3
              className={`text-xl font-bold ${
                result === 1 ? "text-red-600" : "text-green-600"
              }`}
            >
              {result === 1
                ? " Intervention Needed"
                : " Crop is Healthy"}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}