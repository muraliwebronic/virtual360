"use client";
import React, { useState } from "react";
import { CheckCircle2, Copy, Monitor, Glasses } from "lucide-react";

const USPShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "workflow",
      title: "Clean UI & Simple Workflow",
      description: "Drag, drop, and link scenes in minutes. Our no-code editor is designed for speed, not complexity.",
      icon: <Monitor size={20} />,
      visual: "./Icons/360 Tour Website/Group 2586.png", // Represents the Editor/Web View
      tag: "Web Editor",
    },
    {
      id: "embed",
      title: "Fast Embedding",
      description: "No heavy iframes or complex setups. Just copy one shortcode and your tour is live on WordPress.",
      icon: <Copy size={20} />,
      visual: "./Icons/360 Tour Website/Group 2586.png", // Represents the Link/Embed action
      tag: "WordPress Ready",
    },
    {
      id: "spatial",
      title: "360° → VR-Ready Pipeline",
      description: "The only plugin that automatically converts your web tours into spatial assets for Apple Vision Pro.",
      icon: <Glasses size={20} />,
      visual: "./Icons/360 Tour Website/Group 2584.png", // Represents the VR/Spatial View
      tag: "Vision Pro Ready",
    },
  ];

  return (
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 font-['Poppins']">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
          One Workflow. <span className="text-[#2A74ED]">Dual Output.</span>
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Bridge the gap between traditional web and the spatial web. Build once, deploy everywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Interactive Steps List */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer rounded-[20px] p-6 transition-all duration-300 border-2 ${
                activeStep === index
                  ? "bg-white border-[#2A74ED] shadow-lg scale-[1.02]"
                  : "bg-white border-transparent hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-5">
                {/* Step Indicator */}
                <div
                  className={`mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    activeStep === index
                      ? "bg-[#2A74ED] text-white"
                      : "bg-[#e7f6f26e] text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>

                <div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    activeStep === index ? "text-[#2A74ED]" : "text-[#1A1A1A]"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm ">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Dynamic Visual Display */}
        <div className="relative h-[400px] md:h-[500px] w-full bg-gray-50 rounded-[30px] border border-gray-100 overflow-hidden shadow-2xl transition-all duration-500">
          
          {/* Top Bar Decoration (Browser/OS Style) */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-gray-100 flex items-center px-6 gap-2 z-20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-auto px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
              {steps[activeStep].tag} Mode
            </div>
          </div>

          {/* Animated Image Container */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 top-12 transition-opacity duration-500 ease-in-out flex items-center justify-center p-8 ${
                activeStep === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Visual Asset */}
              <div className={`relative w-full h-full rounded-xl overflow-hidden shadow-sm ${
                index === 2 ? "scale-90" : "scale-100" 
              }`}>
                <img
                  src={step.visual}
                  alt={step.title}
                  className="w-full h-full object-contain md:object-cover"
                />
                
                {/* Specific Overlay for 'Spatial' Step to emphasize VR readiness */}
                {index === 2 && (
                   <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-lg border border-white/40 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 animate-bounce">
                         <Glasses size={20} /> Ready for Export
                      </div>
                   </div>
                )}
                
                {/* Specific Overlay for 'Embed' Step */}
                {index === 1 && (
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg font-mono text-sm shadow-xl">
                      [webronic_360_tour id="101"]
                   </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default USPShowcase;