import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react"; // Lucide icons
import { useNavigate } from "react-router-dom";

export default function SearchBar({ className = "" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Administration", path: "/administration" },
    { name: "Admissions", path: "/admissions" },
    { name: "Placement About Us", path: "/placement/about" },
    { name: "Why Recruit IIITN?", path: "/placement/why-recruit-iiitn" },
    { name: "Placement Statistics", path: "/placement/statistics" },
    { name: "For Companies", path: "/placement/for-companies" },
    { name: "For Students", path: "/placement/for-students" },
    { name: "Contact TnP", path: "/placement/contact-tp" },
    { name: "Internship", path: "/placement/internship" },
    { name: "Student Activities", path: "/students/activities" },
    { name: "Student Achievements", path: "/students/achievements" },
    { name: "Scholarships", path: "/students/scholarships" },
    { name: "Clinical Counselling", path: "/students/clinical-counselling" },
    { name: "Hostel", path: "/students/hostel" },
    { name: "Student Mess", path: "/students/mess" },
    { name: "Downloads", path: "/students/download" },
    { name: "Convocation", path: "/students/convocation" },
    { name: "Fees", path: "/students/fees" },
    { name: "NIRF", path: "/nirf" },
    { name: "Consultancy", path: "/others/consultancy" },
    { name: "Institution Innovation Council", path: "/others/iic" },
    { name: "Official Documents", path: "/others/official-doc" },
    { name: "Electoral Literacy Club", path: "/others/electoral-doc" },
    { name: "Guest House", path: "/others/guest-house" },
    { name: "Press Release", path: "/others/press-release" },
  ];

  const filteredPages = searchTerm
    ? pages.filter((page) =>
        page.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // ✅ Close search modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Icon */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "8px",
        }}
      >
        <Search size={28} color="#333" />
      </button>

      {/* Full-Screen Search Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            ref={modalRef} // ✅ Now the whole box is covered
            style={{
              width: "90%",
              maxWidth: "500px",
              background: "linear-gradient(to right, #6a85b6, #bac8e0)",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            {/* Search Input Box */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search for pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "5px",
                  outline: "none",
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  paddingRight: "40px", // Space for close button
                }}
                autoFocus
              />

              {/* Close Button (Centered Inside Box) */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setIsOpen(false);
                }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Results */}
            <div
              style={{
                marginTop: "10px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {filteredPages.length > 0 ? (
                filteredPages.map((page, index) => (
                  <div
                    key={index}
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "5px",
                      marginBottom: "5px",
                      color: "white",
                      textAlign: "center",
                      fontSize: "16px",
                      transition: "background 0.2s",
                    }}
                    onClick={() => handleNavigation(page.path)}
                  >
                    {page.name}
                  </div>
                ))
              ) : (
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "16px",
                    padding: "10px",
                  }}
                >
                  No results found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
