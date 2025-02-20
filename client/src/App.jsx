import React, { useState } from "react";

import { AboutUs, Facilities, Homepage } from "./components/index.js";



function App() {
  return (
    <>
      <Homepage />
      <AboutUs />
      <Facilities />
      <div className="container">
      <h1>Administration</h1>
      <div className="navbar">
        <button onClick={() => setSelectedPage("director")}>Director</button>
        <button onClick={() => setSelectedPage("registrar")}>Registrar</button>
        <button onClick={() => setSelectedPage("chairman")}>Chairman</button>
        <button onClick={() => setSelectedPage("staff")}>Staff</button>
      </div>

      <div className="content">
        {selectedPage === "director" && <Director />}
        {selectedPage === "registrar" && <Registrar />}
        {selectedPage === "chairman" && <Chairman />}
        {selectedPage === "staff" && <Staff />}
      </div>
    </div>
    </>
  );
}

export default App;
