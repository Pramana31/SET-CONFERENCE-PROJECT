import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-2"> CropCare</h2>
          <p className="text-gray-300 text-sm">
            Smart farming solutions using AI to improve crop health and yield.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/" className="hover:text-green-300">Home</a></li>
            <li><a href="/login" className="hover:text-green-300">Login</a></li>
            <li><a href="/register" className="hover:text-green-300">Register</a></li>
            <li><a href="/about" className="hover:text-green-300">About</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-gray-300">

            <a
              href="https://github.com/Pramana31"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Twitter
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Instagram
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-sm text-gray-400">
        © 2026 Pramana Sarkar • All Rights Reserved 
      </div>
    </footer>
  );
}