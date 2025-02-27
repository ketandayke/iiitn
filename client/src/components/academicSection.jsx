import React from "react";
import { Box } from "./index";

export default function AcademicSection({ data = [], programs = {} }) {
    const sectionContent = data.find(item => item.isVisible) || {};

    // ✅ Fetch only one program per degree type
    const uniqueDegreePrograms = {};
    Object.keys(programs).forEach((degreeType) => {
        if (programs[degreeType].length > 0) {
            uniqueDegreePrograms[degreeType] = programs[degreeType][0]; // Pick the first program from each degree type
        }
    });

    return (
        <div 
            className="w-full min-h-min bg-cover bg-center bg-no-repeat py-12 overflow-hidden"
            style={{ backgroundImage: `url(${sectionContent.image || "../images/default_academic.jpg"})` }}
        >
            <div className="w-[90%] mx-auto space-y-10 text-center md:px-12">
                
                {/* ✅ Hero Section */}
                <div className="md:px-12">
                    <h2 className="text-4xl font-bold">{sectionContent.heading || "Academics"}</h2>
                    <p className="text-2xl my-6 tracking-wide">{sectionContent.description || "Explore diverse academic programs at IIIT Nagpur."}</p>
                </div>

                {/* ✅ Display Only One Box per Degree Type */}
                <div className="w-full flex justify-center lg:justify-between flex-wrap gap-4">
                    {Object.keys(uniqueDegreePrograms).map((degreeType, index) => (
                        <Box
                            key={index}
                            imageSrc={uniqueDegreePrograms[degreeType].image || "../images/default_academic.jpg"}
                            heading={degreeType} // Display Degree Type (UG, PhD, etc.)
                            description={uniqueDegreePrograms[degreeType].heading|| "Explore this program."}
                            link="/admissions"
                            className="w-[25rem] h-[30rem]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
