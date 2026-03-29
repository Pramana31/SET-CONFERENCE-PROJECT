import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white text-center">

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          About CropCare
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          CropCare is an AI-powered smart farming solution designed to help
          farmers make better decisions for crop health, disease management,
          and yield improvement. By leveraging machine learning techniques,
          our system analyzes environmental and crop-related data to provide
          real-time insights and recommendations.
        </p>

        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          The platform allows users to input crop conditions such as soil
          quality, weather parameters, and pest severity. Based on this data,
          our trained model predicts whether intervention is required, helping
          reduce crop loss and increase productivity.
        </p>

        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          With a user-friendly interface and powerful backend integration,
          CropCare bridges the gap between agriculture and technology,
          empowering farmers with data-driven solutions for sustainable farming.
        </p>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Smart Prediction</h3>
            <p className="text-sm text-gray-300">
              AI model predicts crop health and intervention needs.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Data Driven</h3>
            <p className="text-sm text-gray-300">
              Uses real-time environmental and soil data for analysis.
            </p>
          </div>

          <div className="bg-white/10 p-5 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2"> Easy to Use</h3>
            <p className="text-sm text-gray-300">
              Simple interface for farmers and agricultural experts.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}