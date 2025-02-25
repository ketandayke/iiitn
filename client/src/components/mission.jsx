import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsCounter from './statsCounter';

const Mission = ({ data = [], counterData = [] }) => {
    const navigate = useNavigate();
    const visibleData = data.filter(item => item.isVisible);

    return (
        <div className="w-full min-h-min bg-gray-100 py-12 overflow-hidden">
            <div className="w-[90%] mx-auto space-y-10">
                {visibleData.map((item, index) => (
                    <div key={item._id || index} className="text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">{item.heading}</h2>
                        <p className="text-xl sm:text-3xl md:px-12 my-6 tracking-wide">{item.description}</p>
                        <div className="w-full flex justify-center items-center">
                            <button 
                                className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
                                onClick={() => navigate('/about')}
                            >
                                {item.buttonText || 'Know More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <StatsCounter counters={counterData || []} />
        </div>
    );
};

export default Mission;
