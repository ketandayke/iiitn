// import React, { useState, useRef, useEffect } from "react";

// export default function SearchBar({ className = "" }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Example options (modify as needed)
//   const options = ["Home", "About", "Courses", "Faculty", "Contact", "Events"];

//   // Filter options based on user input
//   const filteredOptions = options.filter((option) =>
//     option.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className={`relative ${className}} ref={dropdownRef`}>
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className=" border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onFocus={() => setIsOpen(true)}
//       />

//       {/* Dropdown Results */}
//       {isOpen && (
//         <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
//           {filteredOptions.length > 0 ? (
//             filteredOptions.map((option, index) => (
//               <div
//                 key={index}
//                 className="cursor-pointer hover:bg-gray-200"
//                 onClick={() => {
//                   setSearchTerm(option);
//                   setIsOpen(false);
//                 }}
//               >
//                 {option}
//               </div>
//             ))
//           ) : (
//             <div className=" text-gray-500">No results found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
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
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Responsive Search Icon / Input */}
      <div className="flex items-center md:w-auto w-full">
        {!isOpen && (
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none md:block hidden"
            onClick={() => setIsOpen(true)}
          >
            <Search size={20} />
          </button>
        )}

        {(isOpen || window.innerWidth < 768) && (
          <div className="flex items-center w-full md:w-64 border border-gray-400 rounded-md focus-within:ring-2 focus-within:ring-blue-400">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setSearchTerm("");
                setIsOpen(false);
              }}
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>

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
