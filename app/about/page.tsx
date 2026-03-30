"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white text-[#0b1b3a] overflow-hidden">

      {/* ================= SECTION 1: HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-tr from-blue-100 via-transparent to-orange-100 blur-2xl opacity-60 rounded-3xl" />

          <img
            src="/images/hero.jpg"
            className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >

          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              WeXP
            </h1>

            <p className="text-lg md:text-xl text-gray-500 tracking-wide mt-2">
              Beyond Perfection
            </p>
          </div>

          <div className="w-20 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" />

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            WeXP Limited is a premium multi-disciplinary company delivering
            world-class experiences in events, safaris, travel, accommodation,
            and logistics across Africa.
          </p>

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            We operate with precision, creativity, and structured excellence —
            ensuring every project is executed beyond expectation.
          </p>

        </motion.div>
      </div>

      {/* ================= SECTION 2: VISION & MISSION ================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-28 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-16"
        >

          {/* VISION */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Vision
            </h2>

            <div className="w-14 h-[3px] bg-blue-600 rounded-full" />

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
              Bringing events and safari dreams into real-life experiences that
              inspire connection, exploration, and lasting memories across Africa.
            </p>
          </div>

          {/* MISSION */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Mission
            </h2>

            <div className="w-14 h-[3px] bg-orange-500 rounded-full" />

            <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
              Becoming a one-stop centre for events, safaris, accommodation,
              and logistics services, delivering seamless coordination and premium execution.
            </p>
          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-tr from-orange-100 via-transparent to-blue-100 blur-2xl opacity-60 rounded-3xl" />

          <img
            src="/images/hall.jpg"
            className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>

    </section>
  );
}