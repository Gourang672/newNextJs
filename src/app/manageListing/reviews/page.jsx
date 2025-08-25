"use client";
import { useState } from "react";
import { Star, Store, ChevronDown } from "lucide-react";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <section className="min-h-screen py-10 px-4 md:px-8 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="mx-auto max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-b-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#004274] tracking-tight">Reviews</h1>
            <p className="text-gray-600 text-sm mt-1">
              Manage and respond to customer reviews from one place.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-[#004274] hover:bg-gray-100 hover:shadow-sm transition">
            <Store size={18} /> Rout Automobiles
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div>
              <p className="text-gray-500 text-sm">Reviews</p>
              <p className="text-2xl font-semibold text-[#004274]">1</p>
            </div>
            <span className="bg-blue-100 text-blue-600 p-3 rounded-full">
              <Star size={22} />
            </span>
          </div>

          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div>
              <p className="text-gray-500 text-sm">Average Rating</p>
              <p className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                5
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-green-500 fill-green-500" />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-5">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004274] transition"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
          </div>

          {/* Review Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-[#004274] text-lg">Rashmi Ranjan Rout</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500" />
                ))}
              </div>
              <span className="bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                5
              </span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Great experience! Highly recommended for office space listings.
            </p>

            <div className="mt-5">
              <button className="px-5 py-2 bg-[#E6F0FB] text-[#004274] font-medium rounded-lg hover:bg-blue-100 transition">
                Respond
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;