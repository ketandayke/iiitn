import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  { id: 1, name: "Aarav Sharma", branch: "CSE", year: "2023", image: "aarav.jpg", review: "IIIT Nagpur provided me with great opportunities and industry exposure." },
  { id: 2, name: "Ishita Patel", branch: "ECE", year: "2022", image: "ishita.jpg", review: "The campus environment and supportive faculty made my journey memorable." },
  { id: 3, name: "Raj Mehta", branch: "IT", year: "2024", image: "raj.jpg", review: "The hands-on projects and practical knowledge gained here were invaluable." }
];

export default function Testimonials() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="w-full max-w-5xl mx-auto relative px-6">
        <h2 className="text-4xl font-bold text-center mb-10 font-serif">💬 Alumni Testimonials</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, Autoplay]}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white flex flex-col items-center justify-center text-center p-8">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 object-cover shadow-lg border-4 border-gray-300" />
                <h3 className="text-xl font-semibold mb-1 font-serif">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{testimonial.branch} • Class of {testimonial.year}</p>
                <p className="text-gray-800 italic max-w-xl">“{testimonial.review}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
