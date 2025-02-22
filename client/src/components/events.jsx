import React from 'react';
import { useNavigate } from 'react-router-dom';

const eventItems = [
  { id: 1, title: 'TechFest 2025', date: 'March 10, 2025', image: 'techfest.jpg', link: '/events/techfest' },
  { id: 2, title: 'Hackathon 2025', date: 'April 5, 2025', image: 'hackathon.jpg', link: '/events/hackathon' },
  { id: 3, title: 'Cultural Night', date: 'April 20, 2025', image: 'cultural.jpg', link: '/events/cultural' }
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">📅 UPCOMING EVENTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventItems.map((item) => (
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
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center">{item.title}</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-green-500 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="block text-center font-bold">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/latest">
          <button className="mt-4 px-6 py-3 text-xl bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer">
            View All Events
          </button>
        </a>
      </div>
    </div>
  );
}
