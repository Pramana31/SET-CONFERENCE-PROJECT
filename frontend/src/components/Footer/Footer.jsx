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
        <h1 className="text-3xl sm:text-4xl text-white-800 font-extrabold tracking-tight">
          Contact
        </h1>
                            

        <div className="flex items-center mt-8 text-white-600">
            <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
              </div>
              </div>

                <div className="flex items-center mt-4 text-white-600">
                  <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          +44 1234567890
                      </div>
                </div>

                    <div className="flex items-center mt-2 text-white-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
              </svg>
              <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  info@cropcare.org
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