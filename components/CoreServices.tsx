"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      
      {/* BACKGROUND */}
      <img
        src="/images/hero.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-5xl w-full text-center">

        {/* TAGLINE */}
        <div className="flex justify-center items-center gap-3 mb-5 text-sm font-semibold text-blue-900">
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          <span>EVENTS</span>
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          <span>TRAVEL</span>
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          <span>LOGISTICS</span>
        </div>

        {/* TITLE */}
        <h1
          className={`text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Creating <span className="text-orange-500">Unforgettable</span> Experiences
          <br /> With Precision & Care
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`mt-6 text-gray-700 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-150 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          WeXP designs meaningful events, curated travel experiences, and seamless
          logistics — blending creativity, culture, and professionalism across Africa.
        </p>

        {/* CTA */}
        <div
          className={`mt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-400 hover:text-black transition"
          >
            Plan Your Event
          </a>

          <a
            href="/services"
            className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition"
          >
            Explore Services
          </a>
        </div>

        {/* IMAGE GRID (VISIBLE ON ALL DEVICES) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {/* IMAGE 1 */}
          <img
            src="/images/hall.jpg"
            alt="Events"
            className={`w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-1000 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105"
            `}
          />

          {/* IMAGE 2 */}
          <img
            src="/images/arrangement.jpg"
            alt="Decor"
            className={`w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-1000 delay-500 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105`}
          />

          {/* IMAGE 3 */}
          <img
            src="/images/business-executive.jpg"
            alt="Business"
            className={`w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-1000 delay-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105`}
          />
        </div>

        {/* HUMAN TOUCH LINE */}
        <p className="mt-10 text-sm text-gray-500 italic">
          “We don’t just plan events — we create memories that feel alive.”
        </p>
      </div>
    </section>
  );
}