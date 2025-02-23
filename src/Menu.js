import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    {
      title: "ABOUT US",
      subItems: ["Act (PPP)", "Statute", "Institute Profile", "Facilities", "Anual Report", "MoU"],
    },
    {
      title: "GOVERNANCE",
      subItems: [
        {
          title: "Committee",
          subItems: ["Board of Governors", "Finance Committee", "Senate", "Building Work Committee"],
        },
        {
          title: "Administration",
          subItems: ["Chairman", "Director", "Registrar", "Staff"],
        },
      ],
    },
    {
      title: "DEPARTMENT",
      subItems: [
        {
          title: "Basic Science",
          subItems: ["About Department", "BoS", "Achievements", "Research", "Faculty", "Staff", "Projects", "Laboratory", "Events"],
        },
        {
          title: "Computer Science & Eng.",
          subItems: ["About Department", "BoS", "Achievements", "Research", "Faculty", "Staff", "Projects", "Laboratory", "Events"],
        },
        {
          title: "Electronics & Communication",
          subItems: ["About Department", "BoS", "Achievements", "Research", "Faculty", "Staff", "Projects", "Laboratory", "Events"],
        },
        {
          title: "Doctoral Programme",
          subItems: ["Overview of PhD Program", "Doctoral Programme Features", "Research Areas", "Operational Details", "Important Proformas", "Checklists", "Contact Us"],
        },
        {
          title: "Programs",
          subItems: ["B.Tech", "PG Diploma", "PHD", "M.Tech", "Curriculum", "Reports"],
        },
      ],
    },
    {
      title: "ADMISSION",
      subItems: ["Undergraduate B.Tech", "Postgraduate", "UG Academics Rule Book", "PG Academics Rule Book"],
    },
    {
      title: "ALUMNI",
      subItems: ["Member Login", "Members", "About Us"],
    },
    {
      title: "PLACEMENTS",
      subItems: ["About Us", "Why Recruit from IIITN", "Placement Statistics", "For Companies", "For Student", "Contact T&P", "Internship"],
    },
    {
      title: "STUDENT",
      subItems: ["Activities", "Achievement", "Clinical Counselling", "Scholarships", "Hostel", "Student Mess", "Download", "Convocation 2023", "Fees"],
    },
    {
      title: "NIRF",
      subItems: ["NIRF 2025", "NIRF 2024", "NIRF 2023"],
    },
    {
      title: "OTHER",
      subItems: ["CONSULTANCY", "Institution Innovation Council", "Official Documents", "Electoral Literacy Club", "Guest House", "Press Release"],
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleHover = (item) => setHoveredItem(item);
  const handleSelectItem = (item) => setSelectedItem(item);

  // Recursive function to render nested items as links
  const renderSubItems = (items) => {
    return (
      <ul className="nested-menu">
        {items.map((subItem) =>
          typeof subItem === "string" ? (
            <li key={subItem} className="nested-item">
              <a href={`/${subItem.toLowerCase().replace(/\s+/g, "-")}`} className="nested-item-link">
                {subItem}
              </a>
            </li>
          ) : (
            <li key={subItem.title} className="nested-item">
              <span>{subItem.title}</span>
              {renderSubItems(subItem.subItems)}
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <div>
      {/* Menu Icon */}
      <button onClick={toggleMenu} className="menu-icon">
        ☰
      </button>

      {/* Full-Screen Menu */}
      {isOpen && (
        <div className="menu menu-open">
          <button onClick={toggleMenu} className="close-button">
            ✖
          </button>
          <div className="menu-container">
            <nav className="menu-content">
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.title}
                    onMouseEnter={() => handleHover(item)}
                    onClick={() => handleSelectItem(item)}
                    className={selectedItem?.title === item.title ? "active" : ""}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Show the selected menu details */}
            {selectedItem && (
              <div className="menu-details">
                <h2>{selectedItem.title}</h2>
                {selectedItem.subItems && renderSubItems(selectedItem.subItems)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
