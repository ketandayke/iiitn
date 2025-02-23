// components/Latest.jsx
import React from 'react';
const Latest = ({ data }) => (
    <div className="w-full py-12">
        <div className="w-[90%] mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">📢 Latest in IIITN</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map(item => (
                    <div key={item._id} className="border rounded-xl p-4 shadow-lg">
                        <h3 className="text-lg font-semibold">{item.heading}</h3>
                        <p className="text-gray-500 text-sm">{item.date}</p>
                        <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Latest;