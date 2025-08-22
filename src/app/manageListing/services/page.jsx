"use client";
import { useState } from "react";
import { CheckSquare } from "lucide-react";

const Services = () => {
  const [catalogue, setCatalogue] = useState("");
  const [category, setCategory] = useState("");

  const subcategories = {
    engine: [
      "Cooling System Repair",
      "Fuel Injection Cleaning",
      "Throttle Body Cleaning",
      "Engine Diagnostics",
      "Head Gasket Repair",
      "Timing Belt Replacement",
      "Engine Oil Change",
      "Piston and Cylinder Work",
      "Turbocharger Repair",
      "Engine Rebuild and Overhaul",
      "Spark Plug Replacement",
      "Valve Adjustment",
    ],
    brake: [
      "ABS System Repair",
      "Brake Noise Diagnosis",
      "Master Cylinder Replacement",
      "Brake Caliper Service",
      "Brake Pad Replacement",
      "Parking Brake Adjustment",
      "Brake Fluid Change",
      "Brake Rotor Resurfacing",
      "Brake Line Replacement",
      "Disc and Drum Brake Repair",
    ],
    suspension: [
      "Ball Joint Replacement",
      "Steering Rack Repair",
      "Tie Rod End Replacement",
      "Control Arm Replacement",
      "Strut Replacement",
      "Wheel Alignment",
      "Power Steering Repair",
      "Suspension Bushing Replacement",
      "Shock Absorber Replacement",
      "Sway Bar Link Repair",
    ],
    ac: [
      "AC Compressor Repair",
      "Cabin Air Filter Replacement",
      "HVAC System Diagnosis",
      "AC Gas Recharge",
      "Climate Control System Repair",
      "Vent and Airflow Issue Fix",
      "AC Leak Detection and Repair",
      "Condenser and Evaporator Service",
      "Blower Motor Replacement",
      "Heater Core Repair",
    ],
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Catalogue:", catalogue);
    console.log("Category:", category);
    console.log(
      "Selected Services:",
      Object.keys(checkedItems).filter((key) => checkedItems[key])
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4 md:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100"
      >
        <h1 className="text-3xl font-bold mb-8 text-[#004274] flex items-center gap-2">
          <CheckSquare size={28} className="text-[#004274]" /> Edit Catalogue
        </h1>

        {/* Catalogue Input */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={catalogue}
            onChange={(e) => setCatalogue(e.target.value)}
            placeholder="Enter new catalogue"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
          />
          <button
            type="submit"
            className="bg-[#004274] text-white px-6 py-2 rounded-lg hover:bg-[#00508e] transition shadow"
          >
            Add
          </button>
        </div>

        {/* Requested Catalogues */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-[#004274] mb-1">
            Requested Catalogues
          </h2>
          <p className="text-sm text-gray-500 italic">
            No requested catalogues found.
          </p>
        </div>

        {/* Category */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2 text-[#004274]">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#004274] focus:ring focus:ring-[#004274] transition"
          />
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {Object.entries(subcategories).map(([key, items]) => (
            <div
              key={key}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-[#004274] font-semibold text-lg mb-4 capitalize">
                {key === "engine" && "Engine Repair and Maintenance"}
                {key === "brake" && "Brake System Services"}
                {key === "suspension" && "Suspension and Steering"}
                {key === "ac" && "AC and Heating Services"}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:border-[#004274] hover:shadow-sm transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheck(item)}
                      className="h-4 w-4 accent-[#004274]"
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="bg-[#004274] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#00508e] transition"
          >
            Update Catalogues
          </button>
        </div>
      </form>
    </div>
  );
};

export default Services;
