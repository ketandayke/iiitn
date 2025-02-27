
import React from "react";
import { Section } from "../../components";

const ManageHome = () => {
    const alias = "home";

    return (
        <div className="w-full bg-gray-100">
            <div className="w-[90%] pt-[4rem] mx-auto">
                <div className="mt-[6rem] w-[90%] min-h-screen mx-auto">
                    <h1 className="md:text-3xl text-2xl font-bold mb-6">Manage Home Page</h1>

                    {/* Hero Section - Upload Multiple Images */}
                    <Section alias={alias} sectionName="hero" allowedContentTypes={["image"]} multiple={true} />

                    <Section alias={alias} sectionName="academic" allowedContentTypes={["text"]} multiple={true} />

                    {/* Mission Section - Upload Multiple Headings and Descriptions */}
                    <Section alias={alias} sectionName="mission" allowedContentTypes={["text"]} multiple={true} />

                    {/* Counters Section - Upload Number and Text (No File Upload) */}
                    <Section alias={alias} sectionName="counters" allowedContentTypes={["text"]} multiple={true} />

                    {/* IIITN at a Glance - Upload Image with Heading */}
                    <Section alias={alias} sectionName="iiitn-at-a-glance" allowedContentTypes={["image", "text"]} uploadTogether={true} />

                    {/* Testimonials Section - Upload Image, Text, and Approve/Reject */}
                    <Section alias={alias} sectionName="testimonials" allowedContentTypes={["image", "text"]} multiple={true} showApprovalOptions={true} />

                    {/* Add Review Button */}
                    <div className="w-full flex justify-center items-center mt-8">
                        <button className="px-6 py-3 text-xl bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer">
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageHome;
