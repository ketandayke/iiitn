import React from "react";
import {HamburgerMenu, SearchBar} from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <div className="w-screen h-screen background px-2 md:px-12 bg-fixed">
        {/* Hamburger Menu */}
        <div className="w-[90%] h-24 flex justify-between items-center  fixed top-0">
            <HamburgerMenu className="absolute top-8 w-12 h-10" />
            <div className="flex items-center justify-center gap-2 backdrop-blur-md px-2">
              <img src="../../images/iiitn_logo.svg"
                   alt="iiitn logo"
                   className=" w-12 h-12 md:w-16 md:h-16"
              ></img>
              <div className="hidden md:block">
              <h2>भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</h2>
              <h2 className="text-blue-600 font-bold text-xl">Indian Institute of Information Technology ,Nagpur</h2>
              <h3 className="text-orange-300">An Institution of National Importance By An Act of Parliament</h3>

              </div>
              <div className="md:flex w-28 hidden ">
                <img src="../../images/bharat_sarkar_logo.png"
                     alt="bharat sarkar"
                     className="w-12 h-12 "
                 ></img>
                <img src="../../images/swach_bharat.png"
                     alt="bharat sarkar"
                     className="w-16 h-16 "
                 ></img>
              </div>
            
            </div>

            <SearchBar className=""/>


        </div>


        
      </div>
      <div className="w-full h-screen bg-blue-400">

      </div>
    </>
  );
}
