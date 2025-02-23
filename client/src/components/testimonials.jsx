import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    year: "2023",
    image: "../images/1066.jpg",
    review:
      "IIIT Nagpur provided me with great opportunities and industry exposure.",
  },
  {
    id: 2,
    name: "Ishita Patel",
    branch: "ECE",
    year: "2022",
    image: "../images/1070.jpg",
    review:
      "The campus environment and supportive faculty made my journey memorable.",
  },
  {
    id: 3,
    name: "Raj Mehta",
    branch: "IT",
    year: "2024",
    image: "../images/1067.jpg",
    review:
      "The hands-on projects and practical knowledge gained here were invaluable.",
  },
];

export default function Testimonials() {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        💬 STUDENT TESTIMONIALS
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="group relative border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all h-full cursor-pointer bg-white overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-lg font-semibold text-center mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm text-center mb-2">
                {testimonial.branch} • Class of {testimonial.year}
              </p>
              <p className="text-gray-700 text-center italic mb-3">
                “{testimonial.review}”
              </p>
              <div className="absolute inset-0 bg-blue-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-center">
                  Read More
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/add-review")}
          className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer"
        >
          Add Your Review
        </button>
      </div>
    </div>
  );
}
