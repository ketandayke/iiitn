import React from "react";
import { HamburgerMenu } from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <div className="w-screen h-screen background px-12">
        {/* Hamburger Menu */}
        <div className="h-24 pt-6 flex justify-between items-center backdrop-blur-md">
          <HamburgerMenu className=" top-8 left-8 w-12 h-10 " />
          <div className="flex items-center justify-center gap-2">
            <img
              src="../../images/iiitn_logo.svg"
              alt="iiitn logo"
              className="w-16 h-16"
            ></img>
            <div>
              <h2>भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर</h2>
              <h2 className="text-blue-600 font-bold text-xl">
                Indian Institute of Information Technology ,Nagpur
              </h2>
              <h3 className="text-orange-300">
                An Institution of National Importance By An Act of Parliament
              </h3>
            </div>
          </div>
          <div id="ji">hello</div>
          <div>
            <input
              type="text"
              placeholder="search"
              className="w-20 h-10 bg-slate-400"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
