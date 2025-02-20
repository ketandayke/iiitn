import React, { useState } from "react";
import "./index.css";
import Director from "./pages/Director";
import Registrar from "./pages/Registrar";
import Chairman from "./pages/Chairman";
import Staff from "./pages/Staff";



const App = () => {
  const [selectedPage, setSelectedPage] = useState("director");

  return (
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
  );
};

export default App;
