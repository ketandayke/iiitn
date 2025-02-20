import React from "react";

export default function Facilities() {
  const facilities = [
    { name: "Academic Block", image: "../../../images/3.png" },
    { name: "Library", image: "../../../images/7.jpg" },
    { name: "Gym", image: "../../../images/gym.jpg" },
    { name: "Microprocessor Lab", image: "../../../images/9.jpg" },
    { name: "Control System Lab", image: "../../../images/10.jpg" },
    { name: "Computer Programming Lab", image: "../../../images/12.jpg" },
    { name: "Database Lab", image: "../../../images/13.jpg" },
    { name: "Data Structure & Algorithm Lab", image: "../../../images/14.jpg" },
    { name: "Nano SciTech Lab", image: "../../../images/15.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-poetsen text-gray-900 mb-10">
        FACILITIES
      </h1>

      {/* First Image */}
      <div className="flex justify-center mb-16">
        <img
          src="../../../images/top2.png"
          alt="Campus View"
          className="w-full max-w-7xl h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border border-gray-300 hover:shadow-2xl transition duration-300 flex flex-col items-center"
            style={{
              background: "linear-gradient(to bottom, white, #d9d9d9, #a3c3e6)", // Softer WGB Gradient
            }}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-poetsen text-gray-800 text-center">
              {facility.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
