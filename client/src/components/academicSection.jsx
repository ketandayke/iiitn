import React from 'react';
import { Box, StatsCounter } from './index';
import { Link } from 'react-router-dom';

export default function AcademicSection() {
  const boxes = [
    {
      imageSrc: "../images/ug_academic.jpg",
      heading: 'Undergraduate Education',
      description: 'Build a strong foundation in technology.',
    },
    {
      imageSrc:"../images/stu_exch_academic.jpg",
      heading: 'Student Exchange Programs',
      description: 'Explore global learning opportunities.',
    },
    {
      imageSrc: '../images/phd_academic.jpg',
      heading: 'Postgraduate & PhD',
      description: 'Advance your research and career.',
    }
  ];

  return (
    <>
    <div className="w-full my-8">
      <div className="min-h-screen w-[90%] mx-auto md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Academics</h2>
          <p className="text-2xl">At IIIT Nagpur, explore a range of programs from undergraduate to doctoral studies.</p>
        </div>
        <div className="flex justify-between gap-6">
          {boxes.map((box, index) => (
            <Box
              key={index}
              imageSrc={box.imageSrc}
              heading={box.heading}
              description={box.description}
              className="w-[25rem] h-[30rem]"
            />
          ))}
        </div>
      </div>
      {/* <StatsCounter counters={counterData || []} /> */}
      <div className="text-center mt-6">
        <Link to="/Academics" className="px-6 py-2 bg-blue-500 text-white rounded">Learn More</Link>
      </div>
    </div>
    </>
  );
}
