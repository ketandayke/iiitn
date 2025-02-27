<<<<<<< HEAD
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
=======
import React from "react";
import { Box } from "./index";

export default function AcademicSection({ data = [], programs = {} }) {
    const sectionContent = data.find(item => item.isVisible) || {};
    console.log("Academic Section Data:", data, programs);

    return (
        <div 
            className="w-full min-h-min bg-cover bg-center bg-no-repeat py-12 overflow-hidden"
            style={{ backgroundImage: `url(${sectionContent.image || "../images/default_academic.jpg"})` }}
        >
            <div className="w-[90%] mx-auto space-y-10 text-center">
                
                {/* ✅ Academic Hero Section */}
                <div className="md:px-12">
                    <h2 className="text-4xl font-bold">{sectionContent.heading || "Academics"}</h2>
                    <p className="text-2xl my-6 tracking-wide">{sectionContent.description || "Explore diverse academic programs at IIIT Nagpur."}</p>
                </div>

                {/* ✅ Display Academic Programs Grouped by Degree Type */}
                {Object.keys(programs).length > 0 ? (
                    Object.keys(programs).map((degreeType, index) => (
                        <div key={index} className="text-center space-y-6">
                            {/* <h3 className="text-2xl font-semibold text-blue-600">{degreeType}</h3> */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {programs[degreeType].map((program) => (
                                    <Box
                                        key={program._id}
                                        imageSrc={program.image || "../images/default_academic.jpg"}
                                        heading={program.name}
                                        description={`Seats: ${program.studentsSeat}`}
                                        link="/admissions"
                                        className="w-[20rem] h-[25rem]"
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-lg">No academic programs available</p>
                )}
            </div>
        </div>
    );
>>>>>>> 23b84f5efd616ad623b0f8a34398969703a6fb77
}
