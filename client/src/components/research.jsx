import React from "react";

const researchData = [
  { id: 1, img: "../images/r1.jpg", title: "Research Area 1" },
  { id: 2, img: "../images/r21.jpg", title: "Research Area 2" },
  { id: 3, img: "../images/r3.jpg", title: "Research Area 3" },
];

const Research = () => {
  return (
    <div className="text-center px-6 py-12 bg-white">
      {/* Title and Description */}
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Research at IIIT Nagpur
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        Explore our latest innovations and breakthroughs.
      </p>

      {/* Image Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {researchData.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            {/* <p className="mt-3 text-lg font-semibold text-gray-800">
              {item.title}
            </p> */}
          </div>
        ))}
      </div>

      {/* Research Stats */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="text-lg text-gray-900">
          <strong className="text-xl font-bold">50+</strong> Publications
        </div>
        <div className="text-lg text-gray-900">
          <strong className="text-xl font-bold">30+</strong> Patents
        </div>
        <div className="text-lg text-gray-900">
          <strong className="text-xl font-bold">20+</strong> Collaborations
        </div>
      </div>

      {/* Button */}
      <a
        href="/facilities"
        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg font-bold text-lg mt-6 transition-colors hover:bg-blue-700"
      >
        Explore Research
      </a>
    </div>
  );
};

export default Research;
