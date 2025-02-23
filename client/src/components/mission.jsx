// components/Mission.jsx
import React from 'react';
import  StatsCounter from './statsCounter';
const Mission = ({ data }) => (
    <div className="w-full min-h-min bg-gray-100 py-12 overflow-hidden">
        <div className="w-[90%] mx-auto">
            <h2 className="text-center text-3xl font-bold sm:text-5xl">{data?.heading}</h2>
            <p className="text-center text-xl sm:text-3xl md:px-12 my-12 tracking-wide">{data?.description}</p>
            <div className="w-full flex justify-center items-center">
                <button className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer">{data?.buttonText || 'Know More'}</button>
            </div>
        </div>
        <StatsCounter counters={data?.counters} />
    </div>
);

export default Mission;