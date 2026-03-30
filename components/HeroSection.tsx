"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* CINEMATIC OVERLAY LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-black/30 to-white/10"></div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-4xl text-center transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >

        {/* BRAND LINE */}
        <p className="text-xs tracking-[0.5em] text-white/70 uppercase mb-6">
          Events • Travel • Logistics
        </p>

        {/* MAIN TYPOGRAPHY (EDITORIAL STYLE) */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          Crafting <span className="text-orange-400">Moments</span><br />
          That Feel Alive
        </h1>

        {/* SUBTEXT (HUMAN + SOFT) */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          WeXP designs experiences that go beyond planning — blending emotion,
          precision, and creativity into events, travel, and logistics across Africa.
        </p>

        {/* CTA ROW */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/contact"
            className="bg-orange-400 text-blue-950 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            Start Your Experience
          </a>

          <a
            href="/services"
            className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            Explore Services
          </a>

        </div>

        {/* SMALL HUMAN TOUCH LINE */}
        <p className="mt-12 text-white/60 italic text-sm">
          “Not just events — but experiences people remember.”
        </p>
      </div>
    </section>
  );
}
