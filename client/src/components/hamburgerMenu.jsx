import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import menuItems from "./menu"; // Import menu items from menu.js

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div>
      {/* Hamburger Icon */}
      <div
        className="hamburger flex flex-col justify-between items-center cursor-pointer p-2 z-50"
        onClick={() => setOpen(!open)}
      >
        <span className="bar w-6 h-1 bg-black mb-1 transition-all"></span>
        <span className="bar w-6 h-1 bg-black mb-1 transition-all"></span>
        <span className="bar w-6 h-1 bg-black transition-all"></span>
      </div>

      {/* Fullscreen Sidebar */}
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex"
        >
          {/* Main Sidebar */}
          <div className="w-1/4 h-full bg-gray-100 p-6 overflow-y-auto">
            <ul className="space-y-4 text-lg font-semibold">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link
                      to={item.link}
                      className={`block p-2 rounded transition-all ${
                        activeMenu === item.title
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div
                      className={`cursor-pointer p-2 rounded transition-all ${
                        activeMenu === item.title
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === item.title ? null : item.title
                        )
                      }
                    >
                      {item.title}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Submenu Section */}
          <div className="w-3/4 h-full bg-gray-50 p-6 overflow-y-auto">
            {activeMenu && (
              <div>
                <h2 className="text-2xl font-bold mb-4">{activeMenu}</h2>
                {menuItems.find((item) => item.title === activeMenu)?.submenu ? (
                  <ul className="space-y-3">
                    {menuItems
                      .find((item) => item.title === activeMenu)
                      ?.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-lg">
                          <Link
                            to={subItem.link}
                            className="text-blue-500 hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-600">No submenu available</p>
                )}
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-xl"
            onClick={() => setOpen(false)}
          >
            ✖
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
