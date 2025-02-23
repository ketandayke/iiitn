// pages/Homepage.jsx

import React, { useEffect, useState, useRef } from "react";
import api from "../utils/axiosInstance";
import { Hero, Mission, Latest, News, Glance, Events, Testimonials, Footer } from "../components";

export default function Homepage() {
    // State for Each Section
    const [heroData, setHeroData] = useState([]);
    const [missionData, setMissionData] = useState([]);
    const [latestData, setLatestData] = useState([]);
    const [newsData, setNewsData] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    const [testimonialsData, setTestimonialsData] = useState([]);

    // Refs for Lazy Loading
    const latestRef = useRef(null);
    const newsRef = useRef(null);
    const eventsRef = useRef(null);
    const testimonialsRef = useRef(null);

    // Fetch Hero and Mission at Initial Load
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [heroResponse, missionResponse] = await Promise.all([
                    api.get("/home/hero"),
                    api.get("/home/mission")
                ]);
                setHeroData(heroResponse.data.data);
                setMissionData(missionResponse.data.data);
            } catch (error) {
                console.error("Error fetching Hero or Mission:", error);
            }
        };
        fetchInitialData();
    }, []);

    // Intersection Observer Hook for Lazy Loading
    const useLazyLoad = (ref, fetchFunction) => {
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    fetchFunction();
                    observer.disconnect(); // Disconnect after loading once
                }
            }, { threshold: 0.5 }); // Load when 50% of the section is visible

            if (ref.current) observer.observe(ref.current);

            return () => {
                if (ref.current) observer.disconnect();
            };
        }, [ref, fetchFunction]);
    };

    // Lazy Load Latest Section
    useLazyLoad(latestRef, async () => {
        try {
            const response = await api.get("/home/latest");
            setLatestData(response.data.data);
        } catch (error) {
            console.error("Error fetching Latest:", error);
        }
    });

    // Lazy Load News Section
    useLazyLoad(newsRef, async () => {
        try {
            const response = await api.get("/home/news");
            setNewsData(response.data.data);
        } catch (error) {
            console.error("Error fetching News:", error);
        }
    });

    // Lazy Load Events Section
    useLazyLoad(eventsRef, async () => {
        try {
            const response = await api.get("/home/events");
            setEventsData(response.data.data);
        } catch (error) {
            console.error("Error fetching Events:", error);
        }
    });

    // Lazy Load Testimonials Section
    useLazyLoad(testimonialsRef, async () => {
        try {
            const response = await api.get("/home/testimonials");
            setTestimonialsData(response.data.data);
        } catch (error) {
            console.error("Error fetching Testimonials:", error);
        }
    });

    return (
        <>
            <Hero data={heroData} />
            <Mission data={missionData} />
            <div ref={latestRef}>
                <Latest data={latestData} />
            </div>
            <div ref={newsRef}>
                <News data={newsData} />
            </div>
            <Glance />
            <div ref={eventsRef}>
                <Events data={eventsData} />
            </div>
            <div ref={testimonialsRef}>
                <Testimonials data={testimonialsData} />
            </div>
            <Footer />
        </>
    );
}
