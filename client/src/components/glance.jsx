import React from "react";
import { useNavigate } from "react-router-dom";

const glanceItems = [
  {
    id: 1,
    title: "International Research Collaboration",
    image: "../images/01.jpg",
    link: "/collaboration",
  },
  {
    id: 2,
    title: "Conferences, Workshops, Certifications",
    image: "../images/02.jpg",
    link: "/conferences",
  },
  { id: 3, title: "Research", image: "../images/03.jpg", link: "/research" },
  {
    id: 4,
    title: "Innovation",
    image: "../images/04.jpg",
    link: "/innovation",
  },
  {
    id: 5,
    title: "Photo Gallery",
    image: "../images/05.jpg",
    link: "/gallery",
  },
  { id: 6, title: "Student Club", image: "../images/06.jpg", link: "/club" },
];

export default function Glance() {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        🎯 IIITN AT A GLANCE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {glanceItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              {/* <h3 className="text-black text-lg font-semibold text-center">
                {item.title}
              </h3> */}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="block text-center font-bold">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
