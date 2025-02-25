import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const newsItems = [
  { id: 1, title: "IIITN Collaborates with Leading Tech Firms", date: "Feb 20, 2025", image: "news1.jpg" },
  { id: 2, title: "IIITN Hosts International AI Summit", date: "Feb 18, 2025", image: "news2.jpg" },
  { id: 3, title: "Students Win Hackathon at National Level", date: "Feb 15, 2025", image: "news3.jpg" },
  { id: 4, title: "New Research Centre for Quantum Computing", date: "Feb 14, 2025", image: "news4.jpg" }
];

export default function News() {
  return (
    <div className="w-full bg-gray-50 py-16 px-2">
      <div className="w-[80%] mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">🗞️ IIITN in News</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="news-slider"
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 h-full bg-white p-2">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                  <p className="text-blue-600 text-sm cursor-pointer hover:underline">Read More →</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a href="/latest">
            <button className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-all shadow-lg hover:shadow-xl">
              View All
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
