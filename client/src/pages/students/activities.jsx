import React from "react";

export default function Activities() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mb-10">
        Activities
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Activities at IIIT Nagpur"
          className="w-full max-w-4xl h-auto shadow-xl"
        />
      </div>

      {/* Activities Description */}
      <p className="text-lg text-gray-800 mb-6">
        For the growth of students in all areas of their interest, IIIT Nagpur
        encourages students from CSE and ECE to participate in various
        activities such as technical events, workshops, social outreach, sports,
        Swachh Bharat, entrepreneurship, internships, and more.
      </p>

      {/* Events Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        The various activities at IIIT Nagpur are:
      </h2>
      <ul className="list-disc pl-5 text-lg">
        <li className="mb-4">
          National Level Technical Event:{" "}
          <a
            href="https://tantrafiesta.iiitn.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            TantraFiesta
          </a>
        </li>
        <li className="mb-4">
          National Level Cultural Event:{" "}
          <a
            href="https://abhivyakti.iiitn.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Abhivyakti
          </a>
        </li>
        <li className="mb-4">
          Institute Annual Sports Gathering (IG):{" "}
          <a
            href="https://sports.iiitn.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Institute Gathering
          </a>
        </li>
      </ul>

      {/* Clubs Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
        Clubs at IIIT Nagpur
      </h2>
      <p className="text-lg text-gray-800 mb-6">
        IIIT Nagpur has multiple student-driven clubs catering to different
        interests:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Crescendo Music Club", image: "crescendo.jpg" },
          { name: "Dance Club D-Taraxia", image: "d-taraxia.jpg" },
          { name: "Drama Club Estoria", image: "estoria.jpg" },
          { name: "Iotics Club", image: "iotics.jpg" },
          { name: "Elevate Club", image: "elevate.jpg" },
          { name: "Dot Slash", image: "dot-slash.jpg" },
          { name: "GDSC", image: "gdsc.jpg" },
          { name: "Design Club Strokes", image: "strokes.jpg" },
        ].map((club, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-xl">
            <img
              src={`../../../images/${club.image}`}
              alt={club.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
