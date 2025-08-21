"use client";
import { useState } from "react";

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
    <div className="min-h-screen bg-[#E6F3F8] p-4 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-white shadow rounded-xl p-6 md:p-10"
      >
        <h1 className="text-2xl font-bold mb-6">Edit Catalogue</h1>

        {/* Catalogue Input */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={catalogue}
            onChange={(e) => setCatalogue(e.target.value)}
            placeholder="Enter new catalogue"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
          />
          <button
            type="submit"
            className="bg-white border-2 border-[#004273] text-[#004273] px-6 py-2 rounded-full hover:bg-[#004273] hover:text-white transition"
          >
            Submit
          </button>
        </div>

        {/* Requested Catalogues */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Requested Catalogues</h2>
          <p className="text-sm text-gray-500">
            No requested catalogues found.
          </p>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {Object.entries(subcategories).map(([key, items]) => (
            <div
              key={key}
              className="border-l-3 border-l-[#0C6DFD] border border-gray-200 rounded-lg shadow-sm p-4"
            >
              <h3 className="font-semibold text-lg mb-3">
                {key === "engine" && "Engine Repair and Maintenance"}
                {key === "brake" && "Brake System Services"}
                {key === "suspension" && "Suspension and Steering"}
                {key === "ac" && "AC and Heating Services"}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-2 border border-gray-200 rounded-md p-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!checkedItems[item]}
                      onChange={() => handleCheck(item)}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="cursor-pointer bg-[#E6F3F8] hover:bg-[#dbf3fd] hover:scale-102 transition-all mt-10 px-4 py-2 border-1 rounded-xl font-bold">Update Catalogues</button>
      </form>
    </div>
  )
}

export default Services
