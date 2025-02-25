import React from "react";
import { HamburgerMenu, SearchBar, Hero, Mission, Latest, News, Glance, Events, Partners, Testimonials, Footer, CampusImages } from "../components/index.js";

export default function Homepage() {
  return (
    <>
      <HamburgerMenu />
      <SearchBar />
      <Hero />
      <Mission />
      <Latest />
      <News />
      <Glance />
      <Events />
      <CampusImages />
      <Partners />
      <Testimonials />
      <Footer />
    </>
  );
}
