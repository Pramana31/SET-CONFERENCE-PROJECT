import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                
                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                CropCare
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-8">
                    Predict crop health, detect diseases, and improve yield using AI-powered insights.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    

                    <Link to="/about">
                        <button className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg backdrop-blur-md transition duration-300">
                            Learn More
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}