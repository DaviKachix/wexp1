"use client";

import {
  Calendar,
  MapPin,
  Users,
  Smartphone,
  Megaphone,
  Car,
} from "lucide-react";

export default function CoreServices() {
  return (
    <section className="bg-white text-[#0b1b3a] py-20 md:py-28">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 md:mb-24">

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          OUR CORE <span className="text-blue-700">SERVICES</span>
        </h2>

        <div className="w-24 h-[4px] bg-orange-400 mx-auto my-6 rounded-full" />

        <p className="text-[#0b1b3a]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          End-to-end premium event solutions built on precision, coordination,
          and luxury execution across Tanzania and beyond.
        </p>
      </div>

      {/* ================= SERVICE 1 ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">

        <img
          src="/images/hero.jpg"
          className="rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Calendar size={18} />
            <h3 className="text-xl md:text-3xl font-bold">Event Management</h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70 leading-relaxed">
            Weddings, conferences, birthdays, engagements, festivals,
            government events, exhibitions, marathons, gala dinners, trainings,
            safari events, and private luxury experiences — fully managed from
            concept to execution.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Enquire Event
          </a>
        </div>
      </div>

      {/* ================= SERVICE 2 ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">

        <div className="order-2 md:order-1 space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <MapPin size={18} />
            <h3 className="text-xl md:text-3xl font-bold">Venue Selection</h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70">
            We source premium venues aligned with your theme, guest size, and
            budget — ensuring the perfect environment for your event experience.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Find Venue
          </a>
        </div>

        <img
          src="/images/hall.jpg"
          className="order-1 md:order-2 rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />
      </div>

      {/* ================= SERVICE 3 ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">

        <img
          src="/images/arrangement.jpg"
          className="rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Users size={18} />
            <h3 className="text-xl md:text-3xl font-bold">
              Vendor Coordination
            </h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70">
            Full coordination of catering, drinks, music, décor, printing,
            photography, lighting, and equipment vendors into one seamless
            execution system.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Manage Vendors
          </a>
        </div>
      </div>

      {/* ================= SERVICE 4 ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">

        <div className="order-2 md:order-1 space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Smartphone size={18} />
            <h3 className="text-xl md:text-3xl font-bold">
              Digital Guest Services
            </h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70">
            WhatsApp invitations, SMS alerts, email campaigns, RSVP tracking,
            and real-time guest confirmation systems.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Setup Invitations
          </a>
        </div>

        <img
          src="/images/young.jpg"
          className="order-1 md:order-2 rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />
      </div>

      {/* ================= SERVICE 5 (CAR HIRE ADDED) ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">

        <img
          src="/images/business-executive.jpg"
          className="rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Car size={18} />
            <h3 className="text-xl md:text-3xl font-bold">
              Car Hire & Transport Logistics
            </h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70">
            Luxury SUVs, shuttle buses, and safari vehicles with professional
            drivers ensuring smooth guest transportation and event mobility.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Book Transport
          </a>
        </div>
      </div>

      {/* ================= SERVICE 6 ================= */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        <div className="order-2 md:order-1 space-y-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Megaphone size={18} />
            <h3 className="text-xl md:text-3xl font-bold">
              Marketing & Promotion
            </h3>
          </div>

          <p className="text-sm md:text-base text-[#0b1b3a]/70">
            Event branding, social media campaigns, digital promotions, and
            audience engagement strategies to maximize reach and impact.
          </p>

          <a
            href="https://wa.me/255620451936"
            className="inline-block mt-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-orange-400 hover:text-[#061833] transition"
          >
            Promote Event
          </a>
        </div>

        <img
          src="/images/business-executive.jpg"
          className="order-1 md:order-2 rounded-2xl shadow-lg h-64 md:h-[450px] w-full object-cover"
        />
      </div>

    </section>
  );
}