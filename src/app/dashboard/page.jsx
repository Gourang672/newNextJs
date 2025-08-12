"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiFileText, FiPlusCircle } from "react-icons/fi";
import BusinessList from "@/Components/PartnerDashboard/BusinessList/BusinessList";
import BusinessForm from "@/Components/PartnerDashboard/BusinessForm/BusinessForm";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false); // Sidebar visibility for small screens
  const [isMinimized, setIsMinimized] = useState(true); // Minimized by default on large screens
  const [active, setActive] = useState("list");

  const menuItems = [
    { id: "list", label: "Business List", icon: <FiFileText size={20} /> },
    { id: "form", label: "Add Business", icon: <FiPlusCircle size={20} /> },
  ];

  // Ensure sidebar is minimized only for large screens initially
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMinimized(false);
    }
  }, []);

  const handleShowForm = () => {
    setActive("form");
    if (window.innerWidth < 768) setIsVisible(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden completely on small screens */}
      <div
        className={`hidden md:flex flex-col bg-white border-r border-gray-200 transition-all duration-500 ease-in-out
          ${isMinimized ? "w-16" : "w-64"}`}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isMinimized && (
            <h1 className="text-lg font-bold text-[#004274]">BeezBooks</h1>
          )}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <FiMenu size={20} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex-1 p-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center ${
                isMinimized ? "justify-center" : ""
              } w-full p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                active === item.id
                  ? "bg-blue-100 text-[#004274] shadow-sm"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {!isMinimized && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* One and only hamburger icon */}
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="md:hidden hover:text-[#004274] transition-colors duration-300 ease-in-out"
            >
              <FiMenu size={22} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShowForm}
              className="bg-[#004274] text-white px-3 py-1 rounded-lg hover:bg-[#003259] transition-colors duration-300 ease-in-out"
            >
              Create New +
            </button>
            <img
              src="/eef"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </header>

        {/* Small screen sidebar overlay */}
        {isVisible && (
          <div
            className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40"
            onClick={() => setIsVisible(false)} // Close when clicking outside
          >
            <div
              className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4
                 transform transition-transform duration-300 ease-in-out
                 translate-x-0"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="mb-4 text-gray-500 hover:text-gray-800"
              >
                <FiMenu size={22} />
              </button>

              {/* Menu items */}
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    setIsVisible(false);
                  }}
                  className={`flex items-center w-full p-2 rounded-lg transition-all duration-300 ${
                    active === item.id
                      ? "bg-blue-100 text-[#004274] shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {active === "list" && <BusinessList />}
          {active === "form" && <BusinessForm />}
        </main>
      </div>
    </div>
  );
}
