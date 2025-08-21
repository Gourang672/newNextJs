"use client";
import { useState } from "react";

const Edit = () => {
  const [form, setForm] = useState({
    businessName: "",
    category: "",
    description: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    website: "",
    whatsapp: "",
    phone: "",
  });

  const [subcategories, setSubcategories] = useState({
    engine: false,
    transmission: false,
    brake: false,
    suspension: false,
    electrical: false,
    ac: false,
    exhaust: false,
    tire: false,
    fuel: false,
    preventive: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSubcategory = (key) => {
    setSubcategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, subcategories };
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen bg-[#E6F3F8] p-4 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-white shadow rounded-xl p-6 md:p-10"
      >
        <h1 className="text-2xl font-bold mb-6">Edit Business Information</h1>

        {/* Business Name & Category */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold mb-1">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Enter Business Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
            >
              <option value="">Select Category</option>
              <option value="repair">Auto Repair and Maintenance</option>
              <option value="carwash">Car Wash</option>
              <option value="parts">Auto Parts</option>
            </select>
          </div>
        </div>

        {/* Subcategories */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Subcategories</label>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { key: "engine", label: "Engine Repair and Maintenance" },
              { key: "transmission", label: "Transmission Services" },
              { key: "brake", label: "Brake System Services" },
              { key: "suspension", label: "Suspension and Steering" },
              { key: "electrical", label: "Electrical and Battery Services" },
              { key: "ac", label: "AC and Heating Services" },
              { key: "exhaust", label: "Exhaust and Emission Control" },
              { key: "tire", label: "Tire and Wheel Services" },
              { key: "fuel", label: "Fuel System Services" },
              { key: "preventive", label: "Preventive Maintenance" },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center space-x-2 border border-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={subcategories[item.key]}
                  onChange={() => toggleSubcategory(item.key)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Description</label>
          <textarea
            rows="3"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Business Description"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
          />
          <p className="text-xs text-gray-500 text-right mt-1">
            {form.description.length}/500
          </p>
        </div>

        {/* Business Logo */}
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Business Logo</label>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400">
              Upload Logo
            </div>
            <img
              src="/sample-logo.jpg"
              alt="Business Logo"
              className="w-32 h-32 object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* Location */}
        <h2 className="text-lg font-semibold mb-3">Location</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {["address", "city", "state", "pincode"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-bold mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>
          ))}
        </div>

        {/* Other details */}
        <h2 className="text-lg font-semibold mb-3">Other Details</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {[
            { name: "email", label: "E-Mail" },
            { name: "website", label: "Website" },
            { name: "whatsapp", label: "WhatsApp Number" },
            { name: "phone", label: "Phone Number" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-bold mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-[#1A8754] text-white px-6 py-2 rounded-lg shadow hover:bg-[#167347] transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
