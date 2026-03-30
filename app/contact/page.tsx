"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    eventType: "",
    date: "",
    location: "",
    details: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    return `
WeXP Inquiry

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Event Type: ${form.eventType}
Date: ${form.date}
Location: ${form.location}
Details: ${form.details}
    `;
  };

  const handleWhatsApp = () => {
    const message = buildMessage();
    const url = `https://wa.me/255620451936?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    const subject = "WeXP Inquiry";
    const body = buildMessage();
    const mailto = `mailto:wexptanzania@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="bg-white text-[#0b1b3a] py-24 px-6">

      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Contact Us
          </h1>

          <div className="w-20 h-[3px] bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-4 rounded-full" />

          <p className="text-gray-500 mt-4">
            Tell us what you need. We will handle the experience.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block text-sm mb-1 font-medium">Full Name</label>
            <input
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg"
              placeholder="Your name"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm mb-1 font-medium">Phone Number</label>
            <input
              name="phone"
              required
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg"
              placeholder="+255..."
            />
          </div>

          {/* SERVICE */}
          <div>
            <label className="block text-sm mb-1 font-medium">Service</label>
            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg bg-white"
            >
              <option value="">Select service</option>
              <option>Event Planning & Management</option>
              <option>Travel & Safari</option>
              <option>Logistics & Coordination</option>
              <option>Car Hire</option>
              <option>Accommodation</option>
              <option>Marketing & Promotion</option>
            </select>
          </div>

          {/* EVENT TYPE */}
          <div>
            <label className="block text-sm mb-1 font-medium">Event Type</label>
            <select
              name="eventType"
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg bg-white"
            >
              <option value="">Select type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Conference</option>
              <option>Birthday</option>
              <option>Exhibition</option>
              <option>Other</option>
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm mb-1 font-medium">Event Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-sm mb-1 font-medium">Location</label>
            <input
              name="location"
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg"
              placeholder="City / Venue"
            />
          </div>

          {/* DETAILS */}
          <div>
            <label className="block text-sm mb-1 font-medium">Additional Details</label>
            <textarea
              name="details"
              onChange={handleChange}
              className="w-full border border-gray-200 focus:border-blue-600 outline-none p-3 rounded-lg h-28"
              placeholder="Describe your request..."
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* WHATSAPP */}
            <button
              onClick={handleWhatsApp}
              className="
                flex-1
                bg-green-600
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-green-500
                transition-all
              "
            >
              Send via WhatsApp
            </button>

            {/* EMAIL */}
            <button
              onClick={handleEmail}
              className="
                flex-1
                bg-blue-600
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-orange-500
                hover:text-black
                transition-all
              "
            >
              Send via Email
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}