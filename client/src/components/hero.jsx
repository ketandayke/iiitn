// components/Hero.jsx
import React from 'react';

const Hero = ({ data = [] }) => {
    // Find the first image with isVisible: true
    const visibleImage = data.find(item => item.isVisible && item.type === 'image-text')?.value;

    return (
        <div 
            className="w-full background bg-fixed mt-[6rem]" 
            style={{
                height: "calc(100vh - 6rem)", 
                backgroundImage: visibleImage ? `url(${visibleImage})` : "none", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundColor: !visibleImage ? "#e5e7eb" : "transparent" // Fallback color if no image
            }}
        >
            {!visibleImage && (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Hero Image Available
                </div>
            )}
        </div>
    );
};

export default Hero;
