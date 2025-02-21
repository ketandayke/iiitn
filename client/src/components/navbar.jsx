// import React from 'react';
// import { HamburgerMenu } from './index';
// import { SearchBar } from './index';

// export default function Navbar() {
//   return (
//     <>
//       <div className="w-full h-24 md:px-12 grade1 fixed top-0 z-50"> 
//         <div className="max-w-[90%] h-24 flex justify-between items-center mx-auto">
//              <HamburgerMenu className="absolute top-7 w-[3rem] h-10 xl:w-[3.5rem] xl:h-12 cursor-pointer" /> 


//           <div className="flex items-center gap-2 px-2">
//             <img
//               src="../../images/iiitn_logo.svg"
//               alt="IIIT Nagpur Logo"
//               className="w-12 h-12 md:w-16 md:h-16"
//             />
//             <div className="hidden lg:block">
//               <h2 className="text-black text-base">
//                 भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
//               </h2>
//               <h2 className="text-blue-600 font-bold text-xl">
//                 Indian Institute of Information Technology, Nagpur
//               </h2>
//               <h3 className="text-orange-300 text-sm">
//                 An Institution of National Importance By An Act of Parliament
//               </h3>
//             </div>
//           </div>
//           <div className="flex items-center justify-cente">
//                <SearchBar className="lg:w-16 " />

//           </div>
//         </div>
//       </div>

//     </>
//   );
// }

import React from 'react';
import { HamburgerMenu } from './index';
import { SearchBar } from './index';

export default function Navbar() {
  return (
    <>
      <div className="w-full h-24 md:px-12 grade1 fixed top-0 z-50 overflow-hidden"> 
        <div className="max-w-[90%] h-24 flex justify-between items-center mx-auto overflow-hidden">
          {/* Hamburger Menu */}
          <HamburgerMenu className="absolute top-7  w-[2.5rem] h-10 xl:w-[3.5rem] xl:h-12 cursor-pointer" />

          {/* Logo & Text */}
          <div className="flex items-center gap-2 px-2 overflow-hidden">
            <img
              src="../../images/iiitn_logo.svg"
              alt="IIIT Nagpur Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="hidden lg:block">
              <h2 className="text-black text-base whitespace-nowrap">
                भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
              </h2>
              <h2 className="text-blue-600 font-bold text-xl">
                Indian Institute of Information Technology, Nagpur
              </h2>
              <h3 className="text-orange-300 text-sm whitespace-nowrap">
                An Institution of National Importance By An Act of Parliament
              </h3>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center justify-center overflow-hidden">
            <SearchBar className="lg:w-16 max-w-[200px]" />
          </div>
        </div>
      </div>
    </>
  );
}
