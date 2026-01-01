"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const HowItWorks = () => {
  const steps = [
    {
      icon: "./Icons/360 Tour Website/Group 2565.png",
      title: "Upload Your 360° Images",
      description: "Upload your 360° panorama images or regular photos to get started.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2566.png",
      title: "Add Scenes & Hotspots",
      description: "Organize your images into scenes and connect them with navigation hotspots.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2567.png",
      title: "Publish Everywhere", 
      description: "Embed on WordPress with a simple shortcode, or launch immersive mode for Vision Pro & VR users.",
    },
  ];

  return (
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 my-20 font-['Poppins']">
      {/* 1. Section Header (Replaced with Component) */}
      <SectionHeading 
        title="How It"
        highlight="Works"
        description="Create stunning virtual tours in just 3 simple steps. No technical skills required."
        size="normal"
        gradient={true}
        className="mb-16 md:mb-24"
      />

      {/* 2. Steps Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center mb-16">
        
        {/* Thread Connector (Desktop Only) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-24 -z-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="#D1D5DB" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Map Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center group relative">
            {/* Icon Container */}
            <div className="w-24 h-24 mb-8 bg-white z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img src={step.icon} alt={step.title} className="w-full h-full object-contain drop-shadow-md" loading="lazy" />
            </div>
            {/* Content */}
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
          </div>
        ))}
      </div>

      {/* 3. Internal Linking / SEO Button */}
      <div className="flex justify-center mb-16">
         <Link href="/how-it-works" className="group inline-flex items-center gap-2 text-[#2A74ED] font-semibold text-lg hover:text-[#1a5fc7] transition-colors">
            <span>Watch Full Workflow Demo</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
         </Link>
      </div>

      {/* 4. Trust Badges */}
      <div className="bg-base border lg:w-fit border-[#D1FADF] rounded-2xl md:rounded-full py-6 px-8 md:py-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8 shadow-sm max-w-sm md:max-w-none mx-auto">
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          <span className="text-lg hidden md:block leading-none">✨</span>
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          User-friendly interface
        </span>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          Works on all devices
        </span>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
        <span className="flex items-center gap-3 text-[#1F2937] font-medium text-sm ">
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
          Fast, smooth & interactive
        </span>
      </div>
    </section>
  );
};

export default HowItWorks;