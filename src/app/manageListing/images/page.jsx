"use client";

import { useState } from "react";

const Images = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleClearImage = () => setSelectedImage(null);

  const handleUploadImage = () => {
    if (selectedImage) {
      setImages([...images, selectedImage]);
      setSelectedImage(null);
      setIsOpen(false);
    }
  };
  const handleDeleteImage = (index) => {
  setImages(images.filter((_, i) => i !== index));
};

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#004274] mb-1">Image Gallery</h1>
            <p className="text-gray-600 text-sm">Manage and preview your uploaded images</p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-[#004274] text-white text-sm font-medium rounded-xl shadow hover:bg-[#00508e] hover:scale-105 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mr-2" viewBox="0 0 16 16" > <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" /> </svg>
            Add Image
          </button>
        </header>

        {/* Image Gallery Card */}
        <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-5">
          <div className="flex justify-between items-center border-b border-b-gray-200 pb-3 mb-4">
            <h2 className="text-xl font-semibold text-[#004274]">Your Images</h2>
            <span className="text-sm text-gray-500">{images.length} Uploaded</span>
          </div>

          {images.length === 0 ? (
            <p className="text-gray-500 text-center py-6">No images uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((img, idx) => (
  <div
    key={idx}
    className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition"
  >
    <img
      src={img}
      alt={`Uploaded ${idx}`}
      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
    />
    {/* Delete Button */}
    <button
      onClick={() => handleDeleteImage(idx)}
      className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
    >
      Delete
    </button>
  </div>
))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="pt-20 fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-start justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-b-gray-200 px-4 py-3">
              <h2 className="text-lg font-semibold text-[#004274]">Upload Image</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-[#004274]"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-center">
              {!selectedImage ? (
                <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-[#004274] hover:bg-gray-50 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-plus w-10 h-10 text-[#004274]" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" /> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" /> </svg>
                  <p className="text-[#004274] font-medium">Click to select an image</p>
                  <p className="text-xs text-gray-500">JPEG, PNG, GIF (Max 500KB)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-lg mb-4"
                  />
                  <button
                    onClick={handleClearImage}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Clear Image
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-2 border-t border-t-gray-200 px-4 py-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadImage}
                disabled={!selectedImage}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  selectedImage
                    ? "bg-[#004274] hover:bg-[#00508e]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Images;
