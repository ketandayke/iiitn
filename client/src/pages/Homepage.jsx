
import React, { useEffect, useState } from "react";
import api from "../utils/axiosInstance";
import { Hero,AcademicSection, Mission, Latest, News, Glance, Events, Testimonials, Footer, CampusImages } from "../components";
import Research from "../components/research";
// import AcademicSection from "../components/academicSection";

export default function Homepage() {
    const [heroData, setHeroData] = useState([]);
    const [academicData,setAcademicData] =useState([]);
    const [programs,setPrograms] =useState([]);
    const [missionData, setMissionData] = useState([]);
    const [counterData, setCounterData] = useState([]);
    const [latestSections, setLatestSections] = useState([]);
    const [glanceData, setGlanceData] = useState([]);
    // const [testimonialsData, setTestimonialsData] = useState([]);

    // 🌱 **Initial Fetch for All Data**
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [heroResponse,academicResponse,programsResponse,missionResponse, counterResponse, glanceResponse, latestResponse] = await Promise.all([
                    api.get("/admin/page/home/hero"),
                    api.get("admin/page/home/academic"),
                    api.get("academic-program/home/academic"),
                    api.get("/admin/page/home/mission"),
                    api.get("/admin/page/home/counters"),
                    api.get("/admin/page/home/iiitn-at-a-glance"),
                    api.get("/page/home/latest") // Single call for all latest sections
                ]);

                setHeroData(heroResponse.data.data.content || []);
                setAcademicData(academicResponse.data.data.content);
                setPrograms(programsResponse.data.data);
                setMissionData(missionResponse.data.data.content || []);
                setCounterData(counterResponse.data.data.content || []);
                setGlanceData(glanceResponse.data.data.content || []);
                setLatestSections(latestResponse.data.data || []); // Store all latest sections
                console.log("programs data",programsResponse.data.data);
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };
        fetchInitialData();
    }, []);

    // ✅ **Helper to Extract Section Data**  
    const getSectionData = (sectionType) => {
        const section = latestSections.find(section => section.sectionType === sectionType);
        return section ? section.content.slice(0, 3) : []; // Show only 3 items
    };

    // ✅ **Render Components**
    return (
        <>
            <Hero data={heroData} />
            <AcademicSection data={academicData} programs={programs} />
            <Mission data={missionData} counterData={counterData} />
            <Research />
            <CampusImages />
            <Glance data={glanceData} />

            {/* <Latest data={getSectionData("notices")} sectionType="notices" /> */}
            {/* <Latest data={getSectionData("achievements")} sectionType="achievements" /> */}
            <News data={getSectionData("news")} />
            <Events data={getSectionData("events")} />
            {/* <Testimonials data={testimonialsData} /> */}
            <Testimonials />
            <Footer />
        </>
    );
};
