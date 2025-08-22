'use client';
import React, { useState } from "react";
import { Eye, Download } from "lucide-react";

const cards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  img: "https://img.freepik.com/free-vector/flat-design-welcome-card-template_23-2149604670.jpg?t=st=1755778400~exp=1755782000~hmac=c269324b261f7e69b353f0fa3043202c4cfde4a5e103d6e0bc9a72b2ef23ec0b&w=2000",
}));

const ECard = () => {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Back Button */}
      <div className="my-6">
        <button className="cursor-pointer bg-[#004274] hover:bg-[#00508e] border border-[#004274] text-white py-2 px-5 rounded-lg shadow-md transition-all duration-300">
          Back to Profile
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="mx-auto max-w-sm bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Card Image */}
            <img
              className="w-full h-72 object-cover"
              src={card.img}
              alt="E-Card"
            />

            {/* Buttons Section */}
            <div className="p-6 flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => setPreviewImg(card.img)}
                className="flex items-center gap-2 bg-white border border-[#004274] text-[#004274] hover:bg-[#004274] hover:text-white rounded-lg px-3 py-2 shadow-sm transition-all duration-300"
              >
                <Eye className="w-5 h-5" /> View
              </button>
              <button
                className="flex items-center gap-2 bg-white border border-[#004274] text-[#004274] hover:bg-[#004274] hover:text-white rounded-lg px-3 py-2 shadow-sm transition-all duration-300"
              >
                <Download className="w-5 h-5" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewImg && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute top-3 right-3 bg-white py-2 px-4 rounded-full shadow hover:scale-110"
            >
              ✕
            </button>
            <img
              src={previewImg}
              alt="Preview"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-4 right-4">
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:scale-110">
                <Download className="w-5 h-5 text-gray-700" /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECard;
