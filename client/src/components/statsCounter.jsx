// Updated StatsCounter Component with Visibility Filter
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StatsCounter = ({ counters=[] }) => {
    console.log("this is data on counter seciton",counters)
    const [startCounting, setStartCounting] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();
    // console.log("data is this",data);
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
                const end = parseInt(value, 10);
                const duration = 2000;
                const increment = end / (duration / 16);

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
                {counters?.filter(item => item.isVisible).map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <h2 className="text-4xl font-bold text-blue-600 mb-2">
                            <Counter value={item.heading} />+
                        </h2>
                        <p className="text-gray-700 font-medium">{item.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default StatsCounter;


// // Updated StatsCounter to Accept Props
// import React, { useEffect, useState, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";

// const StatsCounter = ({ data }) => {
//     const [startCounting, setStartCounting] = useState(false);
//     const ref = useRef(null);
//     const controls = useAnimation();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setStartCounting(true);
//                     controls.start({ opacity: 1, y: 0 });
//                 }
//             },
//             { threshold: 0.5 }
//         );
//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, [controls]);

//     const Counter = ({ value }) => {
//         const [count, setCount] = useState(0);

//         useEffect(() => {
//             if (startCounting) {
//                 let start = 0;
//                 const end = value;
//                 const duration = 2000;
//                 const increment = end / (duration / 16);

//                 const timer = setInterval(() => {
//                     start += increment;
//                     setCount(Math.ceil(start));
//                     if (start >= end) clearInterval(timer);
//                 }, 16);
//             }
//         }, [startCounting, value]);

//         return <span>{count}</span>;
//     };

//     return (
//         <div ref={ref} className="w-full bg-gray-100 py-16">
//             <motion.div
//                 className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] mx-auto text-center"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={controls}
//                 transition={{ duration: 1 }}
//             >
//                 {data?.map((item, index) => (
//                     <div
//                         key={index}
//                         className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
//                     >
//                         <h2 className="text-4xl font-bold text-blue-600 mb-2">
//                             <Counter value={item.number} />+
//                         </h2>
//                         <p className="text-gray-700 font-medium">{item.label}</p>
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default StatsCounter;
