"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Services", "Why Us", "Contact"];

  return (
    <>
      {/* FLOATING NAVBAR */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <nav className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
  <img
    src="/images/wexp.jpg"
    alt="WeXP Logo"
    className="
      w-14 h-14
      md:w-16 md:h-16
      object-cover
      rounded-2xl
      shadow-md
      hover:scale-105
      transition-all duration-300
    "
  />
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-blue-900 font-semibold">
            {links.map((item) => (
              <a
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                className="relative group px-2 py-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA */}
            <a
              href="/contact"
              className="ml-2 bg-red-700 text-white px-4 py-2 rounded-full shadow hover:bg-orange-400 hover:text-black transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-blue-900 text-2xl"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU (BOTTOM SHEET STYLE) */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-2xl z-50 transform transition-transform duration-500 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Handle Bar */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Menu Content */}
        <div className="px-6 pb-8 space-y-6 text-center">
          {links.map((item) => (
            <a
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
              className="block text-lg font-semibold text-blue-900 hover:text-red-700 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* CTA */}
          <a
            href="/contact"
            className="block bg-red-700 text-white px-6 py-3 rounded-full shadow hover:bg-orange-400 hover:text-black transition"
          >
            Get Started
          </a>

          {/* Image */}
          <img
            src="/images/young.jpg"
            alt="Experience"
            className="w-full h-32 object-cover rounded-xl mt-4"
          />

          {/* Footer */}
          <div className="text-sm text-gray-600 mt-4">
            <p className="font-semibold text-blue-900">WeXP Limited</p>
            <p>Arusha, Tanzania</p>
            <p>+255 620 451 936</p>
          </div>
        </div>
      </div>
    </>
  );
}