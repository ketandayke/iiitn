import React from 'react'
import {StatsCounter} from "./index.js"

export default function Mission() {
  return (
    <div className="w-full min-h-min  bg-gray-100 py-12 overflow-hidden">
        <div className="w-[90%] mx-auto">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">
            Shaping the Future of Technology
        </h2>
        <p className="text-center text-xl sm:text-3xl md:px-12 my-12 tracking-wide">
        At IIIT Nagpur, our vision is to lead advancements in Information Technology and allied fields through transformative education and pioneering research. Guided by a spirit of innovation and excellence, we empower future leaders with the skills, knowledge, and entrepreneurial mindset to drive progress on both national and global scales.
  
        </p>
        <div className="w-full flex justify-center items-center">
        <button className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer">Know More</button>
        </div>

        </div>
        <StatsCounter />
        


    </div>
  )
}
