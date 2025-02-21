import React from "react";
import {HamburgerMenu, SearchBar,Hero, Mission,Latest, News } from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Mission />
      <Latest />
      <News />
      <div className="w-full h-screen bg-blue-400"
      ></div>
    </>
  );
}
