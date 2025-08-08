import React from "react";

const BusinessForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4 sm:p-8">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl space-y-8">
        {/* General Information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            General Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Business Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Search for a category, subcategory, or..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <textarea
            placeholder="Description"
            maxLength={500}
            className="border border-gray-300 rounded-lg px-4 py-2 mt-4 w-full focus:ring-2 focus:ring-blue-500 outline-none"
            rows={4}
          ></textarea>
          <p className="text-xs text-gray-500 text-right mt-1">0/500</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Location
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>State</option>
              <option>Odisha</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
            </select>
            <input
              type="text"
              placeholder="Pincode"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Other Details */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Other Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="E-Mail"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="url"
              placeholder="Website"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Upload Image */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-12">
            Upload Image
          </h2>
          <label className="border-2 border-dashed border-green-500 rounded-lg px-4 py-10 text-center cursor-pointer hover:bg-green-50 transition">
            Click to upload image
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;
