// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Events = ({ data }) => {
//     const navigate = useNavigate();

//     return (
//         <div className="w-[90%] mx-auto py-16">
//             <h2 className="text-4xl font-bold text-center mb-8">📅 Upcoming Events</h2>

//             {data?.length > 0 ? (
//                 <>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {data.slice(0, 3).map(item => (
//                             <div 
//                                 key={item._id} 
//                                 className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
//                                 onClick={() => navigate('/latest')}
//                             >
//                                 <img 
//                                     src={item.value || '/placeholder.jpg'} 
//                                     alt={item.title || 'No Title'} 
//                                     className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
//                                 />
//                                 <div className="absolute bottom-0 left-0 w-full bg-green-500 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                                     <span className="block text-center font-bold">{item.heading || 'No Title'}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="w-full flex justify-center mt-8">
//                         <button
//                             onClick={() => navigate('/latest')}
//                             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg"
//                         >
//                             View All
//                         </button>
//                     </div>
//                 </>
//             ) : (
//                 <div className="text-center text-gray-500">No upcoming events available</div>
//             )}
//         </div>
//     );
// };

// export default Events;
export default function Events() {
    const events = [
      {
        date: "FEB 24",
        type: "EXHIBITION",
        title: "Branner Library Monthly Book & Map Exhibit - Naturally Hazardous: Sea Level Rise",
        image: "/images/7.jpg",
      },
      {
        date: "FEB 24",
        type: "LECTURE/PRESENTATION/TALK",
        title: "Orator Event",
        image: "/images/orator.png",
        time: "12:00 PM PT",
      },
      {
        date: "FEB 24",
        type: "LECTURE/PRESENTATION/TALK",
        title: "Explore global learning opportunities with our Student Exchange Program!",
        image: "/images/stu_exch_academic.jpg",
        time: "04:30 PM PT",
      },
      {
        date: "FEB 25",
        type: "LECTURE/PRESENTATION/TALK",
        title: "Showcase innovation and intelligence at the IOTICS Robotics Competition!",
        image: "/images/tech.png",
        time: "12:00 PM PT",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-6">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-bold text-center mb-8">📅 Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="bg-gray-900 text-white text-xs font-bold px-3 py-1 inline-block">
                    {event.date}
                  </div>
                  <p className="text-red-600 font-semibold mt-2 text-sm">{event.type}</p>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  {event.time && <p className="text-gray-600 text-sm mt-1">{event.time}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700">
              View More
            </button>
          </div>
        </div>
      </div>
    );
  }
  