// pages/ManageHome.jsx

import React from "react";
import {Section} from "../../components/index";

const ManageHome = () => {
    const alias = "home";

    return (
        <div className="w-full bg-gray-100">
            <div className="mt-[6rem] w-[90%] min-h-screen p-8 mx-auto">
                <h1 className="text-3xl font-bold mb-6">Manage Home Page</h1>

                {/* Hero Section */}
                <Section alias={alias} sectionName="hero" type="image" />

                {/* Notices Section */}
                <Section alias={alias} sectionName="notices" type="pdf" />

                {/* About Text Section */}
                <Section alias={alias} sectionName="about-text" type="text" />
            </div>
        </div>
    );
};

export default ManageHome;
