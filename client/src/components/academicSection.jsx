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
}
