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
    <div className="w-full bg-gray-100">
        <div className="w-[90%] mx-auto py-16 relative ">
      <h2 className="text-4xl font-bold text-center mb-8">🗞️ IIITN in News</h2>

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
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="news-slider"
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                <p className="text-blue-600 text-sm cursor-pointer hover:underline">Read More →</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Buttons */}
      <div className="swiper-button-prev absolute top-1/2 -left-8 z-10 w-10 h-10 text-white rounded-full flex items-center justify-center cursor-pointer" />
      <div className="swiper-button-next absolute top-1/2 -right-8 z-10 w-10 h-10 text-white rounded-full flex items-center justify-center cursor-pointer" />

      {/* View All Button */}
      <div className="text-center mt-8">
        <a href="/latest">
          <button className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer">
            View All
          </button>
        </a>
      </div>
    </div>

    </div>
    
  );
}


