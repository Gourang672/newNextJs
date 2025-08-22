"use client";

import React from "react";
import { Download, Share2 } from "lucide-react";

const Greetings = () => {

  const events = [
  {
    title: "Ganesh Chaturthi",
    date: "2025-08-27",
    image:
      "https://img.freepik.com/free-vector/flat-design-welcome-card-template_23-2149604670.jpg?w=2000",
    location: "Chandikhol",
    company: "Rout Automobiles",
    message:
      "May Lord Ganesha bless your life with success, wealth, and health. Happy Ganesh Chaturthi",
  },
  {
    title: "Happy Teacher's Day",
    date: "2025-09-05",
    image:
      "https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148971306.jpg?w=2000",
    location: "Chandikhol",
    company: "Rout Automobiles",
    message: "Celebrating teachers who shape the future. Happy Teacher's Day!",
  },
];

  return (
   <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {events.map((event, idx) => (
          <section
            key={idx}
            className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl shadow-md p-5 md:p-8"
          >
            {/* Left Column */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
                {event.title}
              </h2>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white text-[#004274] px-3 py-1 rounded-full shadow text-xs font-semibold">
                  {event.company}
                </div>
                {/* Location */}
                <div className="absolute bottom-3 left-3 bg-white text-gray-800 px-3 py-1 rounded-full shadow text-xs font-semibold">
                  {event.location}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <p className="text-gray-700 text-base md:text-lg">
                {event.message}
              </p>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 bg-white border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition shadow-sm">
                  <Download size={16} />
                  Download
                </button>
                <button className="inline-flex items-center gap-2 bg-white border border-[#004274] text-[#004274] px-4 py-2 rounded-lg hover:bg-blue-50 transition shadow-sm">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
              <span className="text-sm text-gray-400 mt-auto">
                {event.date}
              </span>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

export default Greetings
