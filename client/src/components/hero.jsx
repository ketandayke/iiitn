// components/Hero.jsx
import React from 'react';
 const Hero = ({ data }) => (
    <div className="w-full background bg-fixed mt-[6rem]" style={{ height: "calc(100vh - 6rem)", backgroundImage: `url(${data?.image || ''})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
);

export default Hero;