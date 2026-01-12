"use client";
import React, { useState } from "react";
import { Play, ArrowRight, Layout, Box, Sparkles } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/ui/VideoModal"; // Ensure this path matches your file structure

const HeroSection = () => {
  // State to control the video modal
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative w-full bg-white overflow-hidden font-['Poppins'] pt-28 pb-10 lg:pt-32 lg:pb-10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-75 h-75 md:w-125 md:h-125 bg-[#2A74ED] opacity-[0.02] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-75 h-75 md:w-125 md:h-125 bg-[#2A74ED] opacity-[0.02] blur-3xl rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* --- LEFT: Strategic Messaging --- */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* --- UPDATED BADGE DESIGN --- */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-x-3 bg-white border border-gray-200 rounded-full p-1.5 pr-5 mb-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 cursor-default group">
                <span className="bg-[#2A74ED] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm group-hover:bg-[#1a5fc7] transition-colors">
                  New
                </span>
                <span className="text-sm font-medium text-gray-700 tracking-tight flex items-center gap-1.5">
                  Apple Vision & Meta Quest Pro Support
                  <Sparkles
                    size={12}
                    className="text-amber-400 fill-amber-400"
                  />
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.3] md:leading-[1.1] mb-6 tracking-tight">
              The No-Code 360° Builder for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2A74ED] to-[#60a5fa]">
                WordPress , Vision Pro & Meta Quest
              </span>
            </h1>

            {/* Subtext */}
            <p className=" md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Create professional virtual tours in WordPress instantly. Build
              immersive 360 degree experiences with Apple Vision Pro and Meta
              Quest support without writing a single line of code
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14 w-full">
              {/* --- Primary Button --- */}
              <Link
                href="/pricing"
                className="group w-full sm:w-auto px-6 py-3 lg:py-6 bg-[#2A74ED] text-white rounded-xl font-semibold text-base hover:bg-blue-600 transition-all duration-300 flex items-center justify-between sm:justify-center gap-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-[0.98]"
              >
                {/* Icon Circle (Left Side) */}
                {/* Text (Right Side) */}
                <span className="whitespace-nowrap text-center w-full sm:w-auto">
                  Start Building Free
                </span>{" "}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <ArrowRight size={16} className="text-[#2A74ED]" />
                </div>
              </Link>

              {/* --- Secondary Button --- */}
              <button
                onClick={() => setIsDemoOpen(true)}
                className="group w-full sm:w-auto px-6 py-3 lg:py-6 bg-white text-gray-900 border border-gray-200 rounded-xl font-semibold  hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex lg:flex-row-reverse items-center justify-between sm:justify-center gap-3 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                {/* Icon Circle (Left Side) */}

                {/* Text (Right Side) */}
                <span className="text-gray-700 group-hover:text-gray-900 whitespace-nowrap text-center w-full sm:w-auto">
                  Watch VisionOS Demo
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Play
                    size={12}
                    className="fill-gray-900 text-gray-900 ml-0.5"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* --- RIGHT: Visual Bridge --- */}
          <div className="flex-1 w-full relative perspective-1000 mt-12 lg:mt-0 px-4 md:px-0">
            {/* 1. Base Layer: Traditional Web View */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform transition-transform duration-500 md:rotate-y-6 md:rotate-x-6 hover:rotate-0">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-4/3 relative group">
                <img
                  src="/Home/360 Viewer - Virtual Tour 360 - Thingsatweb.png"
                  alt="360 Viewer - Virtual Tour 360 - Thingsatweb"
                  className="w-full h-full object-cover"
                />
                {/* Overlay UI Mockup */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-md text-blue-600">
                      <Layout size={16} />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-20 bg-gray-200 rounded"></div>
                      <div className="h-1.5 w-12 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Floating Layer: Spatial/XR View */}
            {/* 2. Floating Layer: Spatial/XR View */}
            <div className="absolute -top-8 -right-2 md:-top-6 md:-right-6 z-20 w-[70%] md:w-2/3 animate-float">
              {/* Main White Card Container */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
                {/* --- BADGE FIXED --- */}
                {/* Desktop: Top-Right | Mobile: Bottom-Center */}
                <div className="absolute z-30 md:top-4 md:right-4 max-md:bottom-6 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-max">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-medium text-white tracking-wide">
                      Immersive Experience
                    </span>
                  </div>
                </div>

                {/* Header Section */}
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100/50 pb-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-tr from-rose-400 to-orange-300 flex items-center justify-center text-white shadow-sm">
                    <Box size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Spatial Mode
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Ready for Vision Pro
                    </p>
                  </div>
                </div>

                {/* Content Preview Image */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
                  <img
                    src="/Home/Plugin - Virtual Tour 360 - Thingsatweb.png.png"
                    alt="Plugin - Virtual Tour 360 - Thingsatweb"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Box size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-linear-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* --- Video Modal Component --- */}
      <VideoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default HeroSection;
