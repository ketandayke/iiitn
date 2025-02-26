

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import menuItems from "./menu"; // Import menu items from menu.js

// const HamburgerMenu = () => {
//   const [open, setOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   return (
//     <div>
//       {/* Hamburger Icon */}
//       <div
//         className="hamburger flex flex-col justify-between items-center cursor-pointer p-2 z-50"
//         onClick={() => setOpen(!open)}
//       >
//         <span className="bar w-6 h-1 bg-black mb-1 transition-all"></span>
//         <span className="bar w-6 h-1 bg-black mb-1 transition-all"></span>
//         <span className="bar w-6 h-1 bg-black transition-all"></span>
//       </div>

//       {/* Fullscreen Sidebar */}
//       {open && (
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.3 }}
//           className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex"
//         >
//           {/* Main Sidebar */}
//           <div className="w-1/4 h-full bg-gray-100 p-6 overflow-y-auto">
//             <ul className="space-y-4 text-lg font-semibold">
//               {menuItems.map((item, index) => (
//                 <li key={index}>
//                   {item.link ? (
//                     <Link
//                       to={item.link}
//                       className={`block p-2 rounded transition-all ${
//                         activeMenu === item.title
//                           ? "bg-blue-500 text-white"
//                           : "hover:bg-gray-200"
//                       }`}
//                       onClick={() => setOpen(false)}
//                     >
//                       {item.title}
//                     </Link>
//                   ) : (
//                     <div
//                       className={`cursor-pointer p-2 rounded transition-all ${
//                         activeMenu === item.title
//                           ? "bg-blue-500 text-white"
//                           : "hover:bg-gray-200"
//                       }`}
//                       onClick={() =>
//                         setActiveMenu(
//                           activeMenu === item.title ? null : item.title
//                         )
//                       }
//                     >
//                       {item.title}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Submenu Section */}
//           <div className="w-3/4 h-full bg-gray-50 p-6 overflow-y-auto">
//             {activeMenu && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">{activeMenu}</h2>
//                 {menuItems.find((item) => item.title === activeMenu)?.submenu ? (
//                   <ul className="space-y-3">
//                     {menuItems
//                       .find((item) => item.title === activeMenu)
//                       ?.submenu.map((subItem, subIndex) => (
//                         <li key={subIndex} className="text-lg">
//                           <Link
//                             to={subItem.link}
//                             className="text-blue-500 hover:underline"
//                             onClick={() => setOpen(false)}
//                           >
//                             {subItem.name}
//                           </Link>
//                         </li>
//                       ))}
//                   </ul>
//                 ) : (
//                   <p className="text-lg text-gray-600">No submenu available</p>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Close Button */}
//           <button
//             className="absolute top-4 right-4 text-black text-xl"
//             onClick={() => setOpen(false)}
//           >
//             ✖
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import menuItems from "./menu"; // Import menu structure

const HamburgerMenu = ({ setMenuOpen }) => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    setMenuOpen(open); // Notify Navbar about menu state
    document.body.style.overflow = open ? "hidden" : "auto"; // Prevent background scrolling

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, setMenuOpen]);

  const handleMenuClick = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveMenu(null); // Close submenu when menu is closed
  };

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

      {/* Fullscreen Overlay Menu */}
      {open && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 w-screen h-screen bg-gray-900 shadow-lg z-50 flex flex-col p-8"
        >
          <div className="flex flex-col items-start justify-center w-full h-full space-y-6">
            {menuItems.map((item, index) => (
              <div key={index} className="w-full relative">
                {item.submenu ? (
                  <>
                    <div
                      className="cursor-pointer text-2xl font-semibold p-2 text-white hover:text-blue-500 transition-all flex items-center"
                      onClick={() => handleMenuClick(item.title)}
                    >
                      {item.title}
                      {activeMenu === item.title && <span className="ml-2">▶</span>}
                    </div>

                    {/* Submenu Items */}
                    {activeMenu === item.title && (
                      <motion.ul
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: -150 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-0 left-[30%] bg-gray-800 p-4 rounded-lg shadow-lg min-w-[200px] max-w-[250px]`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link}
                              className="block text-lg text-gray-300 hover:text-blue-500 transition-all"
                              onClick={handleClose} // Close menu and submenu on navigation
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="block text-2xl font-semibold p-2 text-white hover:text-blue-500 transition-all"
                    onClick={handleClose}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={handleClose}
          >
            ✖
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
