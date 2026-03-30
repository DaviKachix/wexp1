"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="bg-white text-[#0b1b3a] overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-16 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black tracking-tight"
        >
          WHY CHOOSE US?
        </motion.h1>

        <div className="w-24 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-6 rounded-full" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-28 space-y-20">

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            All-in-One Solution
          </h2>

          <div className="w-12 h-[3px] bg-blue-600 rounded-full" />

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            Get all your event services in one place — event management,
            planning and budgeting, venue selection, vendor coordination,
            guest management, car hire, accommodation management, and event
            marketing. Everything is seamlessly bundled under one expert roof.
            You rest, we handle everything.
          </p>
        </motion.div>

        {/* 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            New Yet Experienced
          </h2>

          <div className="w-12 h-[3px] bg-orange-500 rounded-full" />

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            We combine dynamic startup energy with proven best practices drawn
            from established safari and event industry leaders, giving you both
            innovation and reliability.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            High Standards
          </h2>

          <div className="w-12 h-[3px] bg-blue-600 rounded-full" />

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            We deliver international service quality powered by strong local
            expertise, ensuring precision, reliability, and excellence in every
            detail.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Tailored Experiences
          </h2>

          <div className="w-12 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" />

          <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg">
            Every event or safari is fully customised to match your vision,
            expectations, and budget. We provide expert guidance to ensure your
            experience is uniquely yours.
          </p>
        </motion.div>

      </div>
    </section>
  );
}