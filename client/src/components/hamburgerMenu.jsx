import React, { useState } from "react";

export default function HamburgerMenu({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Hamburger Icon */}
      <div
        className={`hamburger ${className} flex flex-col justify-between cursor-pointer p-1.25 z-50 ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="bar w-full h-1 bg-blue-600 transition-all"></span>
        <span className="bar w-full h-1 bg-blue-600 transition-all"></span>
        <span className="bar w-full h-1 bg-blue-600 transition-all"></span>
      </div>

      {/* Navigation Panel */}
      <nav
        className={`absolute top-12 right-0 w-48 bg-gray-800 text-white p-4 rounded-lg transition-all duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
        }`}
      >
        <ul className="space-y-2">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
