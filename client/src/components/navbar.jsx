import React from 'react';
import { HamburgerMenu } from './index';
import { SearchBar } from './index';

export default function Navbar() {
  return (
    <>
      <div className="w-full h-24 bg-blue-400 fixed top-0 z-50"> 
        <div className="w-[90%] h-24 flex justify-between items-center mx-auto">
          <HamburgerMenu className="w-12 h-10 cursor-pointer" /> 

          <div className="flex items-center gap-2 backdrop-blur-md px-2">
            <img
              src="../../images/iiitn_logo.svg"
              alt="IIIT Nagpur Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="hidden lg:block">
              <h2 className="text-black text-base">
                भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
              </h2>
              <h2 className="text-blue-600 font-bold text-xl">
                Indian Institute of Information Technology, Nagpur
              </h2>
              <h3 className="text-orange-300 text-sm">
                An Institution of National Importance By An Act of Parliament
              </h3>
            </div>
          </div>

          <SearchBar className="lg:w-72" />
        </div>
      </div>

    </>
  );
}
