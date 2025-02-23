// components/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Testimonials = ({ data }) => (
    <div className="w-[90%] mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-8">💬 STUDENT TESTIMONIALS</h2>
        <Swiper slidesPerView={1} spaceBetween={20} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} loop={true} pagination={{ clickable: true }} navigation={true} autoplay={{ delay: 4000, disableOnInteraction: false }} modules={[Pagination, Navigation, Autoplay]}>
            {data?.map(testimonial => (
                <SwiperSlide key={testimonial.id}>
                    <div className="group relative border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all h-full cursor-pointer bg-white overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
                        <h3 className="text-lg font-semibold text-center mb-1">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm text-center mb-2">{testimonial.branch} • Class of {testimonial.year}</p>
                        <p className="text-gray-700 text-center italic mb-3">“{testimonial.review}”</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
export default Testimonials