"use client";
import { useState } from "react";
import { Upload } from "lucide-react";

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
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100"
      >
        <h1 className="text-3xl font-bold mb-8 text-[#004274] tracking-tight">
          Edit Business Information
        </h1>

        {/* Business Name & Category */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#004274]">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Enter Business Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#004274]">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
            >
              <option value="">Select Category</option>
              <option value="repair">Auto Repair and Maintenance</option>
              <option value="carwash">Car Wash</option>
              <option value="parts">Auto Parts</option>
            </select>
          </div>
        </div>

        {/* Subcategories */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-[#004274]">
            Subcategories
          </label>
          <div className="grid md:grid-cols-3 gap-4">
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
                className="flex items-center gap-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  checked={subcategories[item.key]}
                  onChange={() => toggleSubcategory(item.key)}
                  className="h-4 w-4 accent-[#004274]"
                />
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2 text-[#004274]">
            Description
          </label>
          <textarea
            rows="4"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Business Description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
          />
          <p className="text-xs text-gray-500 text-right mt-1">
            {form.description.length}/500
          </p>
        </div>

        {/* Business Logo */}
        <div className="mb-10">
          <label className="block text-sm font-semibold mb-3 text-[#004274]">
            Business Logo
          </label>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#004274] transition cursor-pointer">
              <Upload size={20} />
              <span className="text-xs mt-1 text-center">Upload Logo</span>
            </div>
            <img
              src="/sample-logo.jpg"
              alt="Business Logo"
              className="w-32 h-32 object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* Location */}
        <h2 className="text-xl font-semibold mb-4 text-[#004274]">
          Location
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {["address", "city", "state", "pincode"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold mb-2 capitalize text-[#004274]">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
              />
            </div>
          ))}
        </div>

        {/* Other details */}
        <h2 className="text-xl font-semibold mb-4 text-[#004274]">
          Other Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { name: "email", label: "E-Mail" },
            { name: "website", label: "Website" },
            { name: "whatsapp", label: "WhatsApp Number" },
            { name: "phone", label: "Phone Number" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold mb-2 text-[#004274]">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
              />
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#004274] hover:bg-[#00508e] text-white px-8 py-3 rounded-lg shadow-md transition font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
