import React from "react";
import {
  HamburgerMenu,
  Hero,
  Mission,
  Latest,
  News,
  Glance,
  Events,
  Partners,
  Testimonials,
  Footer,
} from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <Hero />

      <Mission />
      <Latest />
      <News />
      <Glance />
      <Events />
      <Partners />
      <Testimonials />
      <Footer />
    </>
  );
}
