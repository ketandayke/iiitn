import React from "react";
import {HamburgerMenu, SearchBar,Hero, Mission } from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Mission />
      <div className="w-full h-screen bg-blue-400"
      ></div>
    </>
  );
}
