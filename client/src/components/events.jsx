// components/Events.jsx
import React from 'react';
const Events = ({ data }) => (
    <div className="w-[90%] mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-8">📅 UPCOMING EVENTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl">
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h3 className="text-white text-lg font-semibold text-center">{item.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Events;