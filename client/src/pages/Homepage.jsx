import React, { useEffect, useState } from "react";
import api from "../utils/axiosInstance";
import {
  Hero,
  AcademicSection,
  Mission,
  Latest,
  News,
  Glance,
  Events,
  Testimonials,
  Footer,
  CampusImages,
  AchievementsSection,
  Partners,
} from "../components";
import Research from "../components/research";
// import AcademicSection from "../components/academicSection";

export default function Homepage() {
  const [heroData, setHeroData] = useState([]);
  const [missionData, setMissionData] = useState([]);
  const [counterData, setCounterData] = useState([]);
  const [latestSections, setLatestSections] = useState([]);
  const [glanceData, setGlanceData] = useState([]);
  // const [testimonialsData, setTestimonialsData] = useState([]);

  // 🌱 **Initial Fetch for All Data**
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [
          heroResponse,
          missionResponse,
          counterResponse,
          glanceResponse,
          latestResponse,
        ] = await Promise.all([
          api.get("/admin/page/home/hero"),
          api.get("/admin/page/home/mission"),
          api.get("/admin/page/home/counters"),
          api.get("/admin/page/home/iiitn-at-a-glance"),
          api.get("/page/home/latest"), // Single call for all latest sections
        ]);

        setHeroData(heroResponse.data.data.content || []);
        setMissionData(missionResponse.data.data.content || []);
        setCounterData(counterResponse.data.data.content || []);
        setGlanceData(glanceResponse.data.data.content || []);
        setLatestSections(latestResponse.data.data || []); // Store all latest sections
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, []);

  // ✅ **Helper to Extract Section Data**
  const getSectionData = (sectionType) => {
    const section = latestSections.find(
      (section) => section.sectionType === sectionType
    );
    return section ? section.content.slice(0, 3) : []; // Show only 3 items
  };

  // ✅ **Render Components**
  return (
    <>
      <Hero data={heroData} />
      <AcademicSection />
      <Mission data={missionData} counterData={counterData} />
      <Research />
      <AchievementsSection />

      <News data={getSectionData("news")} />
      <Glance data={glanceData} />

      {/* <Latest data={getSectionData("notices")} sectionType="notices" /> */}
      {/* <Latest
        data={getSectionData("achievements")}
        sectionType="achievements"
      /> */}

      <Events data={getSectionData("events")} />
      {/* <Testimonials data={testimonialsData} /> */}
      <CampusImages />
      <Partners />
      <Testimonials />

      <Footer />
    </>
  );
}
