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
        <span className="bar w-6 h-1 bg-black mb-1 transition-all ease-in-out duration-300 transform"></span>
        <span className="bar w-6 h-1 bg-black mb-1 transition-all ease-in-out duration-300 transform"></span>
        <span className="bar w-6 h-1 bg-black transition-all ease-in-out duration-300 transform"></span>
      </div>

      {/* Fullscreen Sidebar */}
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-700 shadow-lg z-50 flex"
        >
          {/* Main Sidebar */}
          <div className="w-1/4 h-full bg-white p-6 overflow-y-auto shadow-xl rounded-l-xl">
            <ul className="space-y-4 text-lg font-semibold text-black">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <Link
                      to={item.link}
                      className={`block p-3 rounded-lg text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 ${
                        activeMenu === item.title
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-300"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div
                      className={`cursor-pointer p-3 rounded-lg text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-400 ${
                        activeMenu === item.title
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-300"
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
          <div className="w-3/4 h-full bg-white p-6 overflow-y-auto shadow-xl rounded-r-xl">
            {activeMenu && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">{activeMenu}</h2>
                {menuItems.find((item) => item.title === activeMenu)?.submenu ? (
                  <ul className="space-y-4 text-lg text-black">
                    {menuItems
                      .find((item) => item.title === activeMenu)
                      ?.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100 rounded-lg p-2">
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
                  <p className="text-lg text-black">No submenu available</p>
                )}
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-3xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110"
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
