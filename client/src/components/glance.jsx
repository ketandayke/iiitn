import React from "react";
import { useNavigate } from "react-router-dom";

export default function Glance({ data }) {
  const navigate = useNavigate();
  console.log("data at glance is",data);
  return (
    <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        🎯 IIITN AT A GLANCE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.filter(item => item.isVisible).map((item) => (
          <div
            key={item._id}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={() => item.type === 'text' && navigate(item.description)}
          >
            {item.type.includes('image') && (
              <img
                src={item.value}
                alt={item.heading || 'Image'}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            )}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">
                {item.heading || 'No Title'}
              </h3>
            </div> */}
            <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="block text-center font-bold">{item.heading || 'No Title'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
