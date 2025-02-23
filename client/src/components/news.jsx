// components/News.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const News = ({ data }) => (
    <div className="w-full bg-gray-100">
        <div className="w-[90%] mx-auto py-16 relative">
            <h2 className="text-4xl font-bold text-center mb-8">🗞️ IIITN in News</h2>
            <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} loop={true} pagination={{ clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Pagination, Navigation, Autoplay]} className="news-slider">
                {data?.map(item => (
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
        </div>
    </div>
);

export default News;