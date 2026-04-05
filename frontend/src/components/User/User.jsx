import { useState } from "react";
import axios from "axios";

export default function PredictPage() {
  const [form, setForm] = useState({
    soil_type: "",
    soil_pH: "",
    temperature_avg_C: "",
    humidity_pct: "",
    rainfall_mm: "",
    soil_moisture_pct: "",
    pest_severity_score: "",
    disease_severity_score: "",
    pest_incidence_pct: "",
    disease_incidence_pct: "",
    lesion_area_pct: "",
    alert_level: "",
    urgency_score: "",
    actual_yield_ton_ha: "",    
    expected_yield_ton_ha: "" 
  });

  const [result, setResult] = useState(null);

  const labels = {
    soil_type: "Soil Type",
    soil_pH: "Soil pH",
    temperature_avg_C: "Temperature (°C)",
    humidity_pct: "Humidity (%)",
    rainfall_mm: "Rainfall (mm)",
    soil_moisture_pct: "Soil Moisture (%)",
    pest_severity_score: "Pest Severity Score",
    disease_severity_score: "Disease Severity Score",
    pest_incidence_pct: "Pest Incidence (%)",
    disease_incidence_pct: "Disease Incidence (%)",
    lesion_area_pct: "Lesion Area (%)",
    alert_level: "Alert Level",
    urgency_score: "Urgency Score",
    actual_yield_ton_ha: "Actual Yield (ton/ha)",
    expected_yield_ton_ha: "Expected Yield (ton/ha)"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", form);
      console.log("FULL RESPONSE:", res.data);
      setResult(res.data);
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
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white/90 p-8 rounded-2xl shadow-2xl w-[600px]">

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          CropCare
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-3">

          {/* Soil Type Dropdown */}
          <div>
            <label className="text-sm font-semibold">Soil Type</label>
            <select
              name="soil_type"
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            >
              <option value="">Select</option>
              <option value="sandy">Sandy</option>
              <option value="loamy">Loamy</option>
              <option value="clay">Clay</option>
            </select>
          </div>

          {/* Alert Level Dropdown */}
          <div>
            <label className="text-sm font-semibold">Alert Level</label>
            <select
              name="alert_level"
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Numeric Inputs */}
          {Object.keys(form)
            .filter((key) => key !== "soil_type" && key !== "alert_level")
            .map((key) => (
              <div key={key}>
                <label className="text-sm font-semibold">
                  {labels[key]}
                </label>
                <input
                  type="number"
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  className="border p-2 rounded-lg w-full"
                />
              </div>
            ))}
        </div>

        {/* Button */}
        <button
          onClick={()=>{
            console.log("BUTTON CLICKED");
            handleSubmit();
          }}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
        >
          Predict
        </button>

        {/* Result */}
        {result && (
      <div className="mt-6 text-center space-y-2">

        <h3
          className={`text-xl font-bold ${
            result.result === "Non healthy crop"
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
      {result.result}
        </h3>


        <p className="text-blue-700 font-semibold">
          Yield: {result.yield_percentage}% 
        </p>

        <p className="text-red-500 font-semibold">
          Yield Loss: {result.yield_loss_percentage}%
        </p>

        <p className="text-purple-700 font-bold">
          Treatment: {result.treatment}
        </p>

      </div>
    )}
      </div>
    </div>
  );
}