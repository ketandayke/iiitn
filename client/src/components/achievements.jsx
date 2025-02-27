import React from "react";

const Achievements = () => {
  return (
    <div
      className="relative py-8 flex flex-col items-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/5.jpeg')",
      }}
    >
      {/* Dark Blurred Overlay for Readability */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-20 relative z-10 text-black">
        Achievements
      </h2>

      {/* Container for Images & Content Box */}
      <div className="relative w-full max-w-6xl flex flex-col items-center z-10">
        {/* Image Container */}
        <div className="relative flex justify-center w-full">
          {/* Left Image */}
          <div className="absolute -top-10 left-[5%] w-[420px] h-[280px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/rew1.jpg"
              alt="Achievement 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="absolute -top-10 right-[5%] w-[420px] h-[280px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/rew2.jpeg"
              alt="Achievement 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="relative mt-56 p-8 bg-white text-black rounded-lg shadow-lg w-3/5 text-center z-10">
          <h3 className="text-2xl font-bold">Our Achievements</h3>
          <p className="mt-2 text-lg">
            We strive for excellence in academics and community engagement,
            impacting lives through innovation.
          </p>

          {/* More Information Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            More Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
