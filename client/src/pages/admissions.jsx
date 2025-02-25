import React, { useState } from "react";

export default function Admissions() {
  const [selectedTab, setSelectedTab] = useState(1);

  const content = {
    1: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800  mb-4">
          B. Tech. Admission (CSE/ECE) 2024-25:
        </h2>
        <p className="text-blue-600 font-bold">For Admission Page Click Here</p>
      </>
    ),
    2: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          PhD. Admissions Notification Winter 2024-2025 (Visvesvaraya Full-time
          PhD Scheme for Electronics and IT: Phase II)
        </h2>
        <p className="text-blue-600 font-bold">
          Schedule of Written Test and Interview Click Here
        </p>
        <p className="text-blue-600 font-bold">
          Provisionally Shortlisted Candidates for Written Test (CSE & ECE)
          Click Here
        </p>
        <p className="text-blue-600 font-bold">
          Revised Admission Schedule Click Here
        </p>
        <p className="text-blue-600 font-bold">Notification Click Here</p>
      </>
    ),
    3: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The academic rule book for B. Tech CSE and ECE are as follows;
        </h2>
        <p className="text-blue-600 font-bold">B. Tech Rule Book</p>
      </>
    ),
    4: (
      <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The academic rule book for PhD. programme in CSE and ECE are as
          follows;
        </h2>
        <p className="text-blue-600 font-bold">PhD. Rule Book</p>
      </>
    ),
  };

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-100 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-center text-5xl font-poetsen text-gray-800 mt-25 mb-10">
        ADMISSIONS
      </h1>

      {/* Thumbnail Image */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/admissions.JPG"
          alt="Admissions Thumbnail"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {[
          "Undergraduate B.Tech",
          "Postgraduate",
          "UG Academic Rule Book",
          "PG Academic Rule Book",
        ].map((label, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index + 1)}
            className={`px-6 py-3 rounded-lg font-poetsen transition-all ${
              selectedTab === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {content[selectedTab]}
      </div>
    </div>
  );
}
