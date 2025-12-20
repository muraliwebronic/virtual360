"use client";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "./Icons/360 Tour Website/Group 2565.png",
      title: "Upload Your 360° Images",
      description:
        "Upload your 360° panorama images or regular photos to get started.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2566.png",
      title: "Add Scenes & Hotspots",
      description:
        "Organize your images into scenes and connect them with navigation hotspots.",
    },
    // --- STRATEGIC UPDATE: Modified to include Spatial/VR Context ---
    {
      icon: "./Icons/360 Tour Website/Group 2567.png",
      title: "Publish Everywhere", // Changed from "Embed & Share"
      description:
        "Embed on WordPress with a simple shortcode, or launch immersive mode for Vision Pro & VR users.", // Added Spatial Context
    },
    // ----------------------------------------------------------------
  ];

  return (
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 my-20 font-['Poppins']">
      {/* 1. Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
          How It <span className="text-grad-primary">Works</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
          Create stunning virtual tours in just 3 simple steps. No technical
          skills required.
        </p>
      </div>

      {/* 2. Steps Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center mb-20">
        {/* --- Thread Connector (Desktop Only) --- */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-24 -z-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            {/* The Thread Path: Curves gently between the points */}
            <path
              d="M0,10 Q25,20 50,10 T100,10"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          </svg>
        </div>

        {/* Map Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center group relative"
          >
            {/* Icon Container with white bg to hide the thread behind it */}
            <div className="w-24 h-24 mb-8 bg-white z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-base border lg:w-fit border-[#D1FADF] rounded-2xl md:rounded-full py-6 px-8 md:py-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8 shadow-sm max-w-sm md:max-w-none mx-auto">
        {/* Item 1 */}
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          <span className="text-lg hidden md:block leading-none">✨</span>
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          User-friendly interface
        </span>

        {/* Divider (Desktop Only) */}
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>

        {/* Item 2 */}
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          {/* Mobile bullet point for consistency */}
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          Works on all devices
        </span>

        {/* Divider (Desktop Only) */}
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>

        {/* Item 3 */}
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          {/* Mobile bullet point for consistency */}
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          Fast, smooth & interactive
        </span>
      </div>
    </section>
  );
};

export default HowItWorks;