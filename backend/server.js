require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const { spawn } = require("child_process");
const path = require("path");

const app = express();  

// Connect DB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));


app.post("/predict", (req, res) => {
  console.log("Input received:", req.body);

  const inputData = JSON.stringify(req.body);

  const python = spawn("python", [
    path.join(__dirname, "predict.py"),
    inputData
  ]);

  let result = "";
  let errorData = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    errorData += data.toString();
  });

  python.on("close", () => {
    if (errorData && !errorData.includes("InconsistentVersionWarning")) {
    console.error("Python Error:", errorData);
    return res.status(500).json({ error: errorData });
    }   

    try {
      res.json(JSON.parse(result));
    } catch (e) {
      console.error("Parse Error:", e);
      res.status(500).json({ error: "Invalid response from Python" });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});