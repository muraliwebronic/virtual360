"use client";
import React from "react";

const FeaturesHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 text-center max-w-5xl mx-auto font-['Poppins']">
      {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 animate-fade-in-up">
        <span>✨ Powerful Features</span>
      </div> */}
      
      <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
        Powerful Features for  
        <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-[#2A74ED] to-[#60a5fa]">
           Professional Virtual Tours
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Everything you need to create, customize, and deploy immersive 360 degree experiences without touching a single line of code.
      </p>
    </section>
  );
};

export default FeaturesHero;