// components/Hero.jsx
import React from 'react';

const Hero = ({ data ={} }) => {
    // Find the first image with isVisible: true
    console.log("this is data",data);
    
    const activeImageUrl=data["image-1"]?data["image-1"]:"";
    return (
        <div 
            className="w-full h-screen background bg-fixed" 
            style={{
                backgroundImage: activeImageUrl ? `url(${activeImageUrl})` : "none", 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundColor: !activeImageUrl ? "#e5e7eb" : "transparent" 
            }}
        >
            {!activeImageUrl && (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Hero Image Available
                </div>
            )}
        </div>
    );
};

export default Hero;
