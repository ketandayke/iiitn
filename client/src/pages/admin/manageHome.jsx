// Updated ManageHome.jsx with Dynamic Content Types
import React from "react";
import { Section } from "../../components";

const ManageHome = () => {
    const alias = "home";

    return (
        <div className="w-full bg-gray-100">
            <div className="w-[90%] mx-auto">
                <div className="mt-[6rem] w-[90%] min-h-screen mx-auto">
                    <h1 className="md:text-3xl text-2xl font-bold mb-6">Manage Home Page</h1>

                    {/* Hero Section - Upload Multiple Images */}
                    <Section alias={alias} sectionName="hero" allowedContentTypes={["image"]} multiple={true} />

                    {/* Mission Section - Upload Multiple Headings and Descriptions */}
                    <Section alias={alias} sectionName="mission" allowedContentTypes={["text"]} multiple={true} />

                    {/* Counters Section - Upload Number and Description */}
                    <Section alias={alias} sectionName="counters" allowedContentTypes={["number", "text"]} multiple={true} />

                    {/* Testimonials Section - Upload Image, Text, and Approve/Reject */}
                    <Section alias={alias} sectionName="testimonials" allowedContentTypes={["image", "text"]} multiple={true} showApprovalOptions={true} />
                </div>
            </div>
        </div>
    );
};

export default ManageHome;




// // pages/ManageHome.jsx
// import React from "react";
// import { Section } from "../../components";

// const ManageHome = () => {
//     const alias = "home";

//     return (
//         <div className="w-full bg-gray-100">
//             <div className="w-[90%] mx-auto">
//             <div className="mt-[6rem] w-[90%] min-h-screen mx-auto">
//                 <h1 className="md:text-3xl text-2xl font-bold mb-6">Manage Home Page</h1>

//                 {/* Hero Section */}
//                 <Section alias={alias} sectionName="hero" type="image" />

//                 {/* Mission Section */}
//                 <Section alias={alias} sectionName="mission" type="text" />

//                 {/* Counters Section */}
//                 <Section alias={alias} sectionName="counters" type="number" />

//                 {/* Testimonials Section */}
//                 <Section alias={alias} sectionName="testimonials" type="image" />
//             </div>
//         </div>
//         </div>
//     );
// };

// export default ManageHome