"use client";
import React, { useState, useEffect } from "react";
import { industriesData } from "@/app/use-cases/data/industriesData"; // Ensure this path is correct
import { 
  CheckCircle2, 
  TrendingUp, 
  BarChart3, 
  Play, 
  Maximize2,
  ExternalLink 
} from "lucide-react";

const IndustryExplorer = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Helper to find active data
  const activeData = industriesData.find((item) => item.id === activeTab) || industriesData[0];

  // Handle Tab Switching with Animation
  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    
    setIsTransitioning(true);
    setIframeLoaded(false); // Reset loader for new iframe
    
    // Smooth transition logic
    setTimeout(() => {
      setActiveTab(id);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 300);
  };

  // Handle Hash Navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = industriesData.find((i) => i.id === hash);
      if (found) handleTabChange(found.id);
    }
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-8 pb-32 font-['Poppins']">
      
      {/* --- Layout Split --- */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* ================= LEFT: Navigation Sidebar ================= */}
        <div className="w-full lg:w-1/4 lg:shrink-0">
          <div className="lg:sticky lg:top-32 max-md:gap-5 overflow-x-auto lg:overflow-visible flex lg:flex-col pb-4 lg:pb-0 no-scrollbar snap-x">
            {industriesData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 w-full whitespace-nowrap lg:whitespace-normal snap-start
                  border group
                  ${activeTab === item.id
                    ? "bg-[#2A74ED] border-[#2A74ED] text-white shadow-lg shadow-blue-500/25 translate-x-1"
                    : "bg-white border-transparent hover:border-blue-100 text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-50"
                  }`}
              >
                <span className={`p-2 rounded-lg transition-colors duration-300 ${activeTab === item.id ? "bg-white/20" : "bg-gray-100 group-hover:bg-white"}`}>
                  {/* Clone element to force size prop if it's a Lucide icon */}
                  {item.icon}
                </span>
                <span className="font-semibold text-sm  tracking-tight">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: Content Area ================= */}
        <div className="w-full lg:w-3/4 min-h-[600px]">
          
          {/* Transition Wrapper */}
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            
            {/* 1. Header Info */}
            <div className="mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2A74ED] text-xs uppercase tracking-wider font-bold mb-4 border border-blue-100">
                {activeData.title}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                {activeData.headline}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {activeData.description}
              </p>
            </div>

            {/* 2. LIVE DEMO VIEWER (Merged Here) */}
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-12 group">
              
              {/* Overlay: Title & Info (Fade out on hover/interact) */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <div className="flex justify-between items-start text-white">
                  <div>
                    <h3 className="font-bold text-lg drop-shadow-md flex items-center gap-2">
                       <Play size={16} className="fill-white" /> Live Preview
                    </h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                    Interactive
                  </div>
                </div>
              </div>

              {/* Custom Loader */}
              {(!iframeLoaded || isTransitioning) && (
                 <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-[#2A74ED] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-3 h-3 bg-[#60a5fa] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-3 h-3 bg-[#2A74ED] rounded-full animate-bounce"></div>
                    </div>
                 </div>
              )}

              {/* Iframe */}
              <iframe
                key={activeTab} // Force re-render on tab change
                src={activeData.embedUrl || "https://app.virtualtour360.ai/real-estate/"} 
                title={`${activeData.title} Demo`}
                className={`w-full h-full border-0 transition-opacity duration-700 ${iframeLoaded && !isTransitioning ? 'opacity-100' : 'opacity-0'}`}
                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                onLoad={() => setIframeLoaded(true)}
              />
              
             
            </div>


            {/* 3. Stats & ROI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Impact Card - Dark Theme */}
              <div className="relative overflow-hidden rounded-[24px] bg-[#1A1A1A] p-8 text-white shadow-xl group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#2A74ED] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4 text-[#60a5fa]">
                     <TrendingUp size={24} />
                     <h4 className="font-bold uppercase tracking-wider text-xs">Business Impact</h4>
                   </div>
                   <p className="text-white/90  md:text-xl font-medium leading-relaxed">
                     "{activeData.impact}"
                   </p>
                 </div>
              </div>

              {/* ROI Card - Light Theme */}
              <div className="relative overflow-hidden rounded-[24px] bg-white border border-gray-100 p-8 shadow-lg group">
                 <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-100 rounded-full blur-[40px] opacity-50" />
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4 text-green-600">
                     <BarChart3 size={24} />
                     <h4 className="font-bold uppercase tracking-wider text-xs">Typical ROI</h4>
                   </div>
                   <p className="text-gray-700  md:text-xl font-medium leading-relaxed">
                     {activeData.roi}
                   </p>
                 </div>
              </div>
            </div>

            {/* 4. Applications Checklist */}
            <div className="bg-gray-50/80 rounded-[32px] p-8 md:p-10 border border-gray-200/50">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 flex items-center gap-2">
                Specific Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {activeData.applications.map((app: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-[#2A74ED] transition-colors duration-300">
                      <CheckCircle2 size={14} className="text-[#2A74ED] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            {/* <div className="mt-8 flex justify-end">
               <a 
                 href={activeData.embedUrl} 
                 target="_blank"
                 className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#2A74ED] transition-colors"
               >
                 Open standalone demo <ExternalLink size={14} />
               </a>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExplorer;