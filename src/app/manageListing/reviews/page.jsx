"use client";
import { useState } from "react";
import { Star, Store, ChevronDown } from "lucide-react";

const Reviews = () => {

    const [sortOption, setSortOption] = useState("Newest");

  return (
     <section className="min-h-screen bg-[#E6F3F8] py-10 px-4 md:px-8">
      <div className="mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-b-gray-300 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
            <p className="text-gray-600 text-sm">
              Manage your office space listing in one single dashboard.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
            <Store size={18} /> Rout Automobiles
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 hover:shadow-md transition">
            <div>
              <p className="text-gray-500 text-sm">Reviews</p>
              <p className="text-xl font-semibold text-gray-800">1</p>
            </div>
            <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Star size={20} />
            </span>
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 hover:shadow-md transition">
            <div>
              <p className="text-gray-500 text-sm">Average Rating</p>
              <p className="flex items-center gap-1 text-xl font-semibold text-gray-800">
                5{" "}
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-green-500 fill-green-500" />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
          </div>

          {/* Review Card */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-800">Rashmi Ranjan Rout</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500" />
                ))}
              </div>
              <span className="bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                5
              </span>
            </div>
            <p className="text-gray-600 mt-3">qwer</p>

            <div className="mt-4">
              <button className="px-4 py-2 bg-[#E6F0FB] rounded-lg hover:bg-blue-100 transition">
                Respond
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
