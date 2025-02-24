import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function StatsCounter() {
  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  const stats = [
    { number: 50, label: "Research Projects" },
    { number: 1000, label: "Talented Students" },
    { number: 200, label: "Industry Collaborations" },
    { number: 10, label: "Patents Filed" },
  ];

  // Function to detect when the section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (startCounting) {
        let start = 0;
        const end = value;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // ~60 frames/sec

        const timer = setInterval(() => {
          start += increment;
          setCount(Math.ceil(start));
          if (start >= end) clearInterval(timer);
        }, 16);
      }
    }, [startCounting, value]);

    return <span>{count}</span>;
  };

  return (
    <div ref={ref} className="w-full bg-gray-100 py-16">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              <Counter value={item.number} />+
            </h2>
            <p className="text-gray-700 font-medium">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
