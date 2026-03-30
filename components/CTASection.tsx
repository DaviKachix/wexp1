"use client";

import { useRouter } from "next/navigation";

const SERVICES = [
  {
    title: "EVENT PLANNING & MANAGEMENT",
    desc:
      "End-to-end planning and execution of corporate and private events with precision, structure, and elegance.",
    image: "/images/hall.jpg",
    slug: "event-planning",
  },
  {
    title: "TRAVEL & SAFARI EXPERIENCES",
    desc:
      "Curated travel and safari experiences across Africa with comfort, safety, and refined coordination.",
    image: "/images/arrangement.jpg",
    slug: "travel-safari",
  },
  {
    title: "LOGISTICS & COORDINATION",
    desc:
      "Professional logistics systems covering transport, scheduling, accommodation, and operations.",
    image: "/images/business-executive.jpg",
    slug: "logistics-coordination",
  },
];

export default function ServicesSection() {
  const router = useRouter();

  return (
    <section className="relative bg-white text-[#0b1b3a] py-28 px-6 overflow-hidden">

      {/* SOFT GOLD + BLUE PREMIUM GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-orange-100 blur-[140px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <div className="relative max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0b1b3a]">
          Our Services
        </h2>

        <div className="w-20 h-[3px] bg-gradient-to-r from-orange-500 to-orange-300 mx-auto my-6 rounded-full" />

        <p className="text-[#0b1b3a]/70 text-lg leading-relaxed">
          Premium solutions crafted with precision, structure, and world-class execution standards.
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {SERVICES.map((service, i) => (
          <div
            key={i}
            onClick={() => router.push(`/services`)}
            className="
              group cursor-pointer
              bg-white
              border border-[#0b1b3a]/10
              rounded-2xl
              overflow-hidden
              shadow-sm
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-orange-400/40
            "
          >

            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />

              {/* BLUE → GOLD LUXURY OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b3a]/70 via-transparent to-orange-200/10" />
            </div>

            {/* CONTENT */}
            <div className="p-7">

              {/* TITLE */}
              <h3 className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#0b1b3a]">
                {service.title}
              </h3>

              {/* GOLD LINE */}
              <div className="w-10 h-[2px] bg-orange-500 my-4 rounded-full"></div>

              {/* DESCRIPTION */}
              <p className="text-[#0b1b3a]/70 text-[15px] leading-relaxed">
                {service.desc}
              </p>

              {/* CTA */}
              <div className="mt-6 text-orange-600 text-xs font-semibold uppercase tracking-[0.3em] group-hover:tracking-[0.45em] transition-all">
                View Details →
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
