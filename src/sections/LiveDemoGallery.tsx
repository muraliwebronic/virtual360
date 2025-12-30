"use client";
import React, { useState } from "react";
import { Play, Box, Move3d } from "lucide-react";

// 1. Types
interface DemoItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageWeb: string; // Placeholder for Web View Image
  imageSpatial: string; // Placeholder for Spatial View Image
}

const LiveDemoGallery = () => {
  const [activeTab, setActiveTab] = useState<string>("Real Estate");
  const [isSpatialMode, setIsSpatialMode] = useState<boolean>(false);

  // 2. Data Strategy: Covering the 3 core verticals from the blueprint
  const demos: DemoItem[] = [
    {
      id: "demo-1",
      category: "Real Estate",
      title: "Modern Apartment Walkthrough",
      description: "High-fidelity interior tour with hotspot navigation.",
      imageWeb: "./image/hero.png", 
      imageSpatial: "./image/hero2.png",
    },
    {
      id: "demo-2",
      category: "Hospitality",
      title: "Luxury Hotel Suite",
      description: "Immersive booking preview for potential guests.",
      imageWeb: "./image/hero2.png",
      imageSpatial: "./image/hero.png",
    },
    {
      id: "demo-3",
      category: "Retail",
      title: "Automotive Showroom",
      description: "Interactive product showcase with detail popups.",
      imageWeb: "./image/hero.png",
      imageSpatial: "./image/hero2.png",
    },
  ];

  const activeDemo = demos.find((d) => d.category === activeTab) || demos[0];

  return (
    <section className="bg-white py-24 font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Experience the <span className="text-[#2A74ED]">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Switch between standard Web view and our exclusive Spatial Mode to see what your users will experience
          </p>
        </div>

        {/* Controls: Tabs + Mode Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          
          {/* Category Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-xl">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo.category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === demo.category
                    ? "bg-white text-[#1A1A1A] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {demo.category}
              </button>
            ))}
          </div>

          {/* Spatial Mode Toggle (The Strategic Hook) */}
          <div 
            onClick={() => setIsSpatialMode(!isSpatialMode)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className={`text-sm font-semibold transition-colors ${!isSpatialMode ? "text-[#1A1A1A]" : "text-gray-400"}`}>
                Web View
            </span>
            <div className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isSpatialMode ? "bg-[#2A74ED]" : "bg-gray-300"}`}>
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${isSpatialMode ? "translate-x-6" : "translate-x-0"}`}>
                    {isSpatialMode ? <Move3d size={14} className="text-[#2A74ED]" /> : <Box size={14} className="text-gray-400" />}
                </div>
            </div>
            <span className={`text-sm font-semibold transition-colors ${isSpatialMode ? "text-[#2A74ED]" : "text-gray-400"}`}>
                Spatial Mode
            </span>
          </div>

        </div>

        {/* Demo Window */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-100">
            
            {/* Background Image (Mocking the Switch) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${isSpatialMode ? 'opacity-0' : 'opacity-100'}`}>
                {/* Standard Web Image */}
                 <img src={activeDemo.imageWeb} alt="Web View" className="w-full h-full object-cover opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition-transform">
                        <Play size={20} fill="currentColor" /> Launch Web Tour
                    </button>
                 </div>
            </div>

            <div className={`absolute inset-0 bg-gradient-to-br from-indigo-900 to-black transition-opacity duration-500 ${isSpatialMode ? 'opacity-100' : 'opacity-0'}`}>
                {/* Spatial Mode Content */}
                 <img src={activeDemo.imageSpatial} alt="Spatial View" className="w-full h-full object-cover opacity-50" />
                 
                 {/* VisionOS Style UI Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 animate-pulse">
                        <Move3d size={48} className="text-white" />
                    </div>
                    <p className="text-white font-medium tracking-widest uppercase text-sm">Vision Pro Detected</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Enter Immersive Space
                    </button>
                 </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 md:left-10 text-white">
                <h3 className="text-2xl font-bold mb-1">{activeDemo.title}</h3>
                <p className="text-white/80 text-sm">{activeDemo.description}</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default LiveDemoGallery;