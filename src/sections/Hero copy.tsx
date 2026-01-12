"use client";
import React, { useState } from "react";
import { Play, ArrowRight, Layout, Box } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/ui/VideoModal"; // Ensure this path matches your file structure

const HeroSection = () => {
  // State to control the video modal
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="relative w-full bg-white overflow-hidden font-['Poppins'] pt-28 pb-20 lg:pt-32 lg:pb-24">
      {/* Background Decor: Made even more subtle for mobile */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-75 h-75 md:w-125 md:h-125 bg-[#2A74ED] opacity-[0.02] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-75 h-75 md:w-125 md:h-125 bg-[#2A74ED] opacity-[0.02] blur-3xl rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* --- LEFT: Strategic Messaging --- */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ECFDF3] border border-[#D1FADF] mb-8 shadow-sm animate-fade-in-up">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#027A48]"></span>
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#027A48] tracking-wide">
                  New: Apple Vision Pro Support
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.3] md:leading-[1.1] mb-6 tracking-tight">
              The No-Code 360° Builder for <br className="hidden lg:block" />
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14 w-full">
              {/* --- Primary Button: Brand Color (Standout) --- */}
              <Link
                href="/pricing"
                className="relative group w-full sm:w-auto px-8 py-3.5 overflow-hidden bg-[#2A74ED] text-white rounded-2xl shadow-xl shadow-blue-500/10 hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                {/* Subtle gradient overlay for depth, not color change */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center justify-between sm:justify-center gap-4">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-bold text-white sm:text-lg leading-tight tracking-tight">
                      Start Building Free
                    </span>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-white group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* --- Secondary Button: Neutral / Clean (No Brand Color) --- */}
              <button 
                onClick={() => setIsDemoOpen(true)} // Opens the modal
                className="group w-full sm:w-auto pl-6 pr-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-semibold  sm:text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                {/* Icon Circle: Neutral Gray instead of Blue */}
                <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors duration-300">
                  <Play
                    size={14}
                    className="fill-gray-900 text-gray-900 ml-0.5"
                  />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900">
                  Watch VisionOS Demo
                </span>
              </button>
            </div>
          </div>

          {/* --- RIGHT: Visual Bridge --- */}
          {/* Added mt-12 for breathing room on mobile */}
          <div className="flex-1 w-full relative perspective-1000 mt-12 lg:mt-0 px-4 md:px-0">
            {/* 1. Base Layer: Traditional Web View */}
            {/* Removed rotation on mobile for a cleaner, flat look. Only rotates on md+ screens */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform transition-transform duration-500 md:rotate-y-6 md:rotate-x-6 hover:rotate-0">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-4/3 relative group">
                <img
                  src="/Icons/360 Tour Website/Group 2586.png"
                  alt="Web Dashboard View"
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
            {/* Positioned cleanly on top-right, but with better margins */}
            <div className="absolute -top-8 -right-2 md:-top-6 md:-right-6 z-20 w-[70%] md:w-2/3 animate-float">
              <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
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
                {/* Content Preview */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
                  <img
                    src="/Icons/360 Tour Website/Group 2584.png"
                    alt="Spatial View"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
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
      <VideoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        // No need to pass src if you set the default in the component, otherwise:
        // videoSrc="/demo/Apple Vision - Virtual Tour 360.mp4"
      />
    </section>
  );
};

export default HeroSection;