import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const campusImages = [
  "/images/camp5.jpg",
  "/images/camp4.jpg",
  "/images/camp2.jpg",
  "/images/camp3.jpg",
  "/images/2.jpg",
];

export default function CampusImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % campusImages.length);
    }, 4000); // 4-second auto slide
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-6xl rounded-lg overflow-hidden shadow-2xl border-2 border-gray-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={campusImages[currentIndex]}
            className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={campusImages[currentIndex]}
              alt={`Campus ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg brightness-90 hover:brightness-75 transition duration-500 shadow-xl"
            />
            <div className="absolute bottom-10 bg-white bg-opacity-75 px-8 py-3 rounded-md shadow-lg text-gray-900 text-lg font-semibold">
              Explore Our Beautiful Campus
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-10"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-10"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
