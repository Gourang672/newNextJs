"use client";

import { useState } from "react";
import { FiMenu, FiHome, FiFileText, FiPlusCircle } from "react-icons/fi";
import BusinessList from "@/Components/PartnerDashboard/BusinessList/BusinessList";
import BusinessForm from "@/Components/PartnerDashboard/BusinessForm/BusinessForm";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("list");

  const menuItems = [
    { id: "list", label: "Business List", icon: <FiFileText size={20} /> },
    { id: "form", label: "Add Business", icon: <FiPlusCircle size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`px-0 sm:px-4 bg-white border-r border-r-slate-100 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between p-4 border-b border-b-slate-200">
          {isOpen && <h1 className="text-lg font-bold">Beez Books</h1>}
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors ${
                active === item.id
                  ? "bg-sky-100 text-[#004274] font-semibold rounded-xl"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {active === "list" && <BusinessList />}
        {active === "form" && <BusinessForm />}
      </div>
    </div>
  );
}
