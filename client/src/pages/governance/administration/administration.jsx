import { React, useState } from "react";
import { Director } from "../../index";
import { Chairman } from "../../index";
import { Staff } from "../../index";
import { Registrar } from "../../index";
export default function Administration() {
  const [selectedPage, setSelectedPage] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="pl-70 text-5xl font-bold text-gray-800 mt-25 mb-10">
          Administration
        </h1>
        <div className="navbar pl-70">
          <button onClick={() => setSelectedPage("director")}>Director</button>
          <button onClick={() => setSelectedPage("registrar")}>
            Registrar
          </button>
          <button onClick={() => setSelectedPage("chairman")}>Chairman</button>
          <button onClick={() => setSelectedPage("staff")}>Staff</button>
        </div>

        {
          <div className="content pl-70">
            {selectedPage === "director" && <Director />}
            {selectedPage === "registrar" && <Registrar />}
            {selectedPage === "chairman" && <Chairman />}
            {selectedPage === "staff" && <Staff />}
          </div>
        }
      </div>
    </>
  );
}
