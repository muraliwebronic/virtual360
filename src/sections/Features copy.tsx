"use client";
import React from "react";

const Features = () => {
  // Mapped icons based on your uploaded image and folder structure
  const features = [
    {
      icon: "./Icons/360 Tour Website/Group 2560.png",
      title: "Unlimited Tours",
      description: "Create multiple virtual tours for different spaces and properties without any restrictions.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2561.png",
      title: "Interactive Hotspots",
      description: "Add navigation points and information hotspots to guide visitors through your tours.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2562.png",
      title: "Live Preview",
      description: "See changes in real-time as you build your tours with our instant preview feature.",
    },
    // --- STRATEGIC UPDATE: Targeted for Immersive/XR Market ---
    {
      icon: "./Icons/360 Tour Website/Group 2563.png", 
      title: "VR & Spatial Mode",
      description: "Native support for VR headsets and Apple Vision Pro viewing directly from the browser.",
    },
    // ----------------------------------------------------------
    {
      icon: "./Icons/360 Tour Website/Group 2564.png",
      title: "Mobile Responsive",
      description: "Perfect viewing experience on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2566.png",
      title: "One-Click Embed",
      description: "Simple shortcode integration - just copy and paste into any WordPress page or post.",
    },
  ];

  return (
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 my-24 font-['Poppins']">
      <div className="container mx-auto">
        
        {/* Header Section - Split Layout for Agency Feel */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight">
              Everything You Need to Build <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#2A74ED] to-[#60a5fa] bg-clip-text text-transparent">Stunning 360° Tours</span>
            </h2>
          </div>
          <div className="max-w-lg lg:text-right lg:pb-2">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Create immersive virtual tours that engage your audience and showcase your spaces like never before
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[24px] p-8 border border-gray-100 hover:border-[#e7f6f2] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#e7f6f26e' }}
              >
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;