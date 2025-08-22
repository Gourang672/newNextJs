'use client';
import React, { useState } from "react";
import { Eye, Download, Heart, Plus } from "lucide-react";

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
            className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group"
          >
            <img
              className="w-full h-52 object-cover"
              src={card.img}
              alt="E-Card"
            />

            {/* Hover Icons */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all">
              <button
                onClick={() => setPreviewImg(card.img)}
                className="bg-white p-2 rounded-full shadow-md hover:scale-110 flex gap-1"
              >
                <Eye className="w-5 h-5 text-gray-700" /> <p>View</p>
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 flex gap-1">
                <Download className="w-5 h-5 text-gray-700" /> <p>Download</p>
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
            <img src={previewImg} alt="Preview" className="w-full h-auto object-contain" />
            <div className="absolute bottom-4 right-4">
              <button className="bg-white p-3 rounded-full shadow-md hover:scale-110 flex gap-1">
                <Download className="w-5 h-5 text-gray-700"/><p>Download</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECard;
