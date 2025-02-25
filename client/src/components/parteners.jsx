import React, { useEffect, useState } from "react";

const partners = [
  { id: 1, name: "Shiksha Mantralay", image: "/images/Shikshamantralay.png" },
  { id: 2, name: "Maharashtra Shasan", image: "/images/MaharashtraShasan.png" },
  { id: 3, name: "TCS", image: "/images/TCS.png" },
  { id: 4, name: "Google", image: "/images/Google.png" },
  { id: 5, name: "Microsoft", image: "Microsoft.jpg" },
  { id: 6, name: "Amazon", image: "Amazon.jpg" },
  { id: 7, name: "Infosys", image: "Infosys.jpg" },
  { id: 8, name: "IBM", image: "IBM.jpg" },
];

const visibleSlides = 4; // Adjust to show 4-5 items at a time

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= partners.length ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[80%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        🤝 OUR PARTNERS
      </h2>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`, // Sliding effect
            width: `${(partners.length / visibleSlides) * 100}%`, // Adjust width for infinite loop
          }}
        >
          {partners.concat(partners.slice(0, visibleSlides)).map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-4"> {/* Adjusted for 4-5 items */}
              <div className="group relative w-full h-48 overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl bg-white">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg">
                    {partner.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {partners.slice(0, partners.length - (visibleSlides - 1)).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
