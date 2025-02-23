import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css"; // Make sure your styles are properly linked

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Facilities", path: "/facilities" },
    { title: "Administration", path: "/administration" },
    { title: "Admissions", path: "/admissions" },
    {
      title: "Placement",
      subItems: [
        { title: "About Us", path: "/placement/about" },
        { title: "Why Recruit?", path: "/placement/why-recruit" },
        { title: "Statistics", path: "/placement/statistics" },
        { title: "For Companies", path: "/placement/for-companies" },
        { title: "For Students", path: "/placement/for-students" },
        { title: "Contact T&P", path: "/placement/contact-tp" },
        { title: "Internship", path: "/placement/internship" },
      ],
    },
    {
      title: "Students",
      subItems: [
        { title: "Activities", path: "/students/activities" },
        { title: "Achievements", path: "/students/achievements" },
        { title: "Scholarships", path: "/students/scholarships" },
        {
          title: "Clinical Counselling",
          path: "/students/clinical-counselling",
        },
        { title: "Hostel", path: "/students/hostel" },
        { title: "Mess", path: "/students/mess" },
        { title: "Download", path: "/students/download" },
        { title: "Convocation", path: "/students/convocation" },
        { title: "Fees", path: "/students/fees" },
      ],
    },
    { title: "NIRF", path: "/nirf" },
    {
      title: "Others",
      subItems: [
        { title: "Consultancy", path: "/others/consultancy" },
        { title: "IIC", path: "/others/iic" },
        { title: "Official Documents", path: "/others/official-doc" },
        {
          title: "Electoral Literacy Club",
          path: "/others/electoral-literacy-club",
        },
        { title: "Guest House", path: "/others/guest-house" },
        { title: "Press Release", path: "/others/press-release" },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
        ☰
      </button>
      {isOpen && (
        <nav className="menu">
          <button onClick={() => setIsOpen(false)} className="close-button">
            ✖
          </button>
          <ul>
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.subItems ? (
                  <>
                    <span>{item.title}</span>
                    <ul>
                      {item.subItems.map((sub) => (
                        <li key={sub.title}>
                          <Link to={sub.path} onClick={() => setIsOpen(false)}>
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
