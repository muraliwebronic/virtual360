"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Layout, PlayCircle, Smartphone, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ActionButton from "@/components/ui/ActionButtons";

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
    {
      icon: "./Icons/360 Tour Website/Group 2567.png",
      title: "Publish Everywhere",
      description:
        "Embed on WordPress with a simple shortcode, or launch immersive mode for Vision Pro & VR users.",
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
          <svg
            className="w-full h-full"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
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
            {/* Icon Container */}
            <div className="w-24 h-24 mb-8 bg-white z-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
            {/* Content */}
            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Internal Linking / SEO Button */}
      <div className="flex justify-center mb-16">
        <ActionButton
          href="/how-it-works"
          label="Watch Full Workflow Demo"
          icon={PlayCircle}
        />
      </div>

      {/* 4. Trust Badges */}
      <div className="w-full max-w-4xl mx-auto mt-8 border-t border-b border-gray-100 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          {/* Item 1 */}
          <div className="flex items-center gap-2.5 text-gray-700">
            <Layout className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">User-friendly interface</span>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px h-4 bg-gray-200"></div>

          {/* Item 2 */}
          <div className="flex items-center gap-2.5 text-gray-700">
            <Smartphone className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">Works on all devices</span>
          </div>

          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block w-px h-4 bg-gray-200"></div>

          {/* Item 3 */}
          <div className="flex items-center gap-2.5 text-gray-700">
            <Zap className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">
              Fast, smooth & interactive
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
