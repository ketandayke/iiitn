// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import menuItems from "./menu"; // Import menu structure

// const HamburgerMenu = ({ setMenuOpen }) => {
//   const [open, setOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     setMenuOpen(open); // Notify Navbar about menu state
//     document.body.style.overflow = open ? "hidden" : "auto"; // Prevent background scrolling

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [open, setMenuOpen]);

//   const handleMenuClick = (menuTitle) => {
//     setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setActiveMenu(null); // Close submenu when menu is closed
//   };

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

//       {/* Fullscreen Overlay Menu */}
//       {open && (
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 w-screen h-screen bg-gray-900 shadow-lg z-50 flex flex-col p-8"
//         >
//           <div className="flex flex-col items-start justify-center w-full h-full space-y-6">
//             {menuItems.map((item, index) => (
//               <div key={index} className="w-full relative">
//                 {item.submenu ? (
//                   <>
//                     <div
//                       className="cursor-pointer text-2xl font-semibold p-2 text-white hover:text-blue-500 transition-all flex items-center"
//                       onClick={() => handleMenuClick(item.title)}
//                     >
//                       {item.title}
//                       {activeMenu === item.title && <span className="ml-2">▶</span>}
//                     </div>

//                     {/* Submenu Items */}
//                     {activeMenu === item.title && (
//                       <motion.ul
//                         initial={{ opacity: 0, x: 10 }}
//                         animate={{ opacity: 1, x: -150 }}
//                         transition={{ duration: 0.3 }}
//                         className={`absolute -top-16 left-[40%] bg-gray-800 p-4 rounded-lg shadow-lg min-w-[200px] max-w-[250px]`}
//                       >
//                         {item.submenu.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to={subItem.link}
//                               className="block text-lg text-gray-300 hover:text-blue-500 transition-all"
//                               onClick={handleClose} // Close menu and submenu on navigation
//                             >
//                               {subItem.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={item.link}
//                     className="block text-2xl font-semibold p-2 text-white hover:text-blue-500 transition-all"
//                     onClick={handleClose}
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Close Button */}
//           <button
//             className="absolute top-12 left-38 text-white text-3xl cursor-pointer"
//             onClick={handleClose}
//           >
//             ✖
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import menuItems from "./menu"; // Import menu structure

// const HamburgerMenu = ({ setMenuOpen }) => {
//   const [open, setOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setMenuOpen(open);
//     document.body.style.overflow = open ? "hidden" : "auto";

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [open, setMenuOpen]);

//   const handleMenuClick = (menuTitle) => {
//     setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setActiveMenu(null);
//   };

//   const handleNavigation = (link) => {
//     navigate(link);
//     handleClose();
//   };

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

//       {/* Fullscreen Overlay Menu */}
//       {open && (
//         <motion.div
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           exit={{ y: "-100%" }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 w-screen h-screen bg-black shadow-lg z-50 flex"
//         >
//           {/* Close Button */}
//           <button
//             className="absolute top-12 left-36 text-white text-3xl cursor-pointer"
//             onClick={handleClose}
//           >
//             ✖
//           </button>

//           {/* Main Menu & Submenu Container */}
//           <div className="flex h-full w-full px-10 items-center">
//             {/* Main Menu Section */}
//             <div className="flex flex-col justify-center space-y-8 pl-28 pr-20">
//               {menuItems.map((item, index) => (
//                 <div key={index} className="relative">
//                   <div
//                     className="cursor-pointer text-4xl font-semibold text-white hover:text-gray-400 transition-all"
//                     onClick={() =>
//                       item.link ? handleNavigation(item.link) : handleMenuClick(item.title)
//                     }
//                   >
//                     {item.title}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Vertical Divider */}
//             <div className="w-[1px] h-[70%] bg-white"></div>

//             {/* Submenu Section */}
//             <div className="flex flex-col justify-center space-y-6 pl-30">
//               {activeMenu && (
//                 <motion.div
//                   initial={{ opacity: 0, x: 10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="flex flex-col space-y-3"
//                 >
//                   {menuItems
//                     .find((item) => item.title === activeMenu)
//                     ?.submenu?.map((subItem, subIndex) => (
//                       <div
//                         key={subIndex}
//                         className="block text-2xl text-gray-300 hover:text-white transition-all cursor-pointer"
//                         onClick={() => handleNavigation(subItem.link)}
//                       >
//                         {subItem.name}
//                       </div>
//                     ))}
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import menuItems from "./menu"; // Import menu structure

const HamburgerMenu = ({ setMenuOpen }) => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(open);
  
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling in background
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }
  
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setMenuOpen]);
  

  const handleMenuClick = (menuTitle) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveMenu(null);
  };

  const handleNavigation = (link) => {
    navigate(link);
    handleClose();
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
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 w-screen h-screen bg-black shadow-lg z-50 flex flex-col 
          ${isMobile ? "pt-[8rem]" : "pt-[3rem]"} px-10 overflow-y-auto`}
      >
      
          {/* Close Button */}
          <button
            className="absolute top-[5%] left-[7.5%] text-white text-3xl cursor-pointer"
            onClick={handleClose}
          >
            ✖
          </button>

          {/* Main Menu & Submenu Container */}
          <div className={`flex h-full w-full px-10 items-center ${isMobile ? "flex-col" : "flex-row"}`}>
            {/* Main Menu Section */}
            <div className={`flex flex-col justify-center space-y-8 ${isMobile ? "w-full" : "pl-[7rem] pr-[5rem]"}`}>
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className="cursor-pointer text-2xl md:text-4xl font-semibold text-white hover:text-gray-400 transition-all"
                    onClick={() =>
                      item.link ? handleNavigation(item.link) : handleMenuClick(item.title)
                    }
                  >
                    {item.title}
                  </div>

                  {/* Submenu (Dropdown for Mobile) */}
                  {isMobile && activeMenu === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-3 mt-2 bg-gray-800 p-4 rounded-lg"
                    >
                      {item.submenu?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="block text-lg md:text-2xl text-gray-300 hover:text-white transition-all cursor-pointer"
                          onClick={() => handleNavigation(subItem.link)}
                        >
                          {subItem.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical Divider (Hidden on Mobile) */}
            {!isMobile && <div className="w-[1px] h-[70%] bg-white"></div>}

            {/* Submenu Section (For Desktop Only) */}
            {!isMobile && activeMenu && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center space-y-6 pl-30"
              >
                {menuItems
                  .find((item) => item.title === activeMenu)
                  ?.submenu?.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="block text-2xl text-gray-300 hover:text-white transition-all cursor-pointer"
                      onClick={() => handleNavigation(subItem.link)}
                    >
                      {subItem.name}
                    </div>
                  ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
