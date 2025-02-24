import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react"; // Using Lucide icons

export default function SearchBar({ className = "" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Home", "About", "Courses", "Faculty", "Contact", "Events"];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative  ${className}`} ref={dropdownRef}>
      {/* Search Icon */}
      {!isOpen && (
        <button
          className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Search size={24} />
        </button>
      )}

      {/* Search Input */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 z-50 flex items-center p-4 bg-white border-b border-gray-300 shadow-lg 
                      w-full h-24 transition-all`}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button
              className="absolute right-2 top-2 p-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setSearchTerm("");
                setIsOpen(false);
              }}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Dropdown Results */}
      {isOpen && searchTerm && (
        <div className="absolute left-0 mt-1 w-full md:w-64 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => {
                  setSearchTerm(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
