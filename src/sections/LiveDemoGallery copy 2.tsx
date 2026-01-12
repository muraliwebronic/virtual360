"use client";
import React, { useState } from "react";

// 1. Types
interface DemoItem {
  id: string;
  category: "Real Estate" | "Hospitality" | "Retail";
  title: string;
  description: string;
  embedUrl: string;
}

const LiveDemoGallery = () => {
  const [activeTab, setActiveTab] = useState<string>("Real Estate");

  // Controls the visual fade state
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const demos: DemoItem[] = [
    {
      id: "demo-re",
      category: "Real Estate",
      title: "Modern Apartment Walkthrough",
      description: "High-fidelity interior tour with hotspot navigation.",
      embedUrl: "https://app.virtualtour360.ai/real-estate/",
    },
    {
      id: "demo-ho",
      category: "Hospitality",
      title: "Luxury Hotel Suite",
      description: "Immersive booking preview for potential guests.",
      embedUrl: "https://app.virtualtour360.ai/hospitality/",
    },
    {
      id: "demo-rt",
      category: "Retail",
      title: "Automotive Showroom",
      description: "Interactive product showcase with detail popups.",
      embedUrl: "https://app.virtualtour360.ai/retail/",
    },
  ];

  const activeDemo = demos.find((d) => d.category === activeTab) || demos[0];

  // 2. The Synchronized Animation Logic (Kept exactly as before)
  const handleTabChange = (category: string) => {
    if (category === activeTab || isTransitioning) return;

    // Phase 1: Fade OUT existing content & Fade IN preloader
    setIsTransitioning(true);

    // Phase 2: Wait 500ms for opacity to hit 0
    setTimeout(() => {
      // NOW switch the data
      setActiveTab(category);

      // Phase 3: Wait remaining time to simulate smooth loading
      setTimeout(() => {
        // Phase 4: Fade IN new content & Fade OUT preloader
        setIsTransitioning(false);
      }, 1500);
    }, 500);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Virtual Tour: ${activeDemo.title}`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    description: activeDemo.description,
    url: activeDemo.embedUrl,
    offers: { "@type": "Offer", category: activeDemo.category },
    hasPart: {
      "@type": "VisualArtwork",
      artMedium: "3D Virtual Tour",
      name: activeDemo.title,
    },
  };

  return (
    <section className="bg-white py-24 font-['Poppins']">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Interactive <span className="text-[#2A74ED]">Virtual Tours</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Explore our immersive 3D environments for Real Estate, Hospitality,
            and Retail directly in your browser.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-8">
          <div className="flex md:mr-auto p-1 bg-gray-100 rounded-xl shadow-inner">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => handleTabChange(demo.category)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === demo.category
                    ? "bg-white text-[#1A1A1A] shadow-md scale-105"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {demo.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Display Window */}
        <div className="relative w-full aspect-video md:aspect-[21/9]  rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
          <div
            className={`absolute inset-0 z-30 flex items-center justify-center bg-[#e7f6f26e] backdrop-blur-md transition-opacity duration-500 ease-in-out ${
              isTransitioning
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div 
            className={`absolute  inset-0 z-30 flex items-center justify-center bg-base/80 backdrop-blur-md shadow-sm transition-all duration-500 ease-in-out ${
              isTransitioning ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          >
            
            {/* The Loader Pill: Clean White with Soft Shadow */}
            <div className=" px-8 py-4 rounded-full flex items-center ">
               
               {/* The Dots: Using your Primary Brand Color (#4888e8) for the accent */}
               <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#4888e8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-3 h-3 bg-[#4888e8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>

               {/* Optional: Subtle Text */}
               {/* <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
                  Loading
               </span> */}

            </div>
          </div>
          </div>

          <iframe
            key={activeTab}
            src={activeDemo.embedUrl}
            title={`${activeDemo.title} - Virtual Tour`}
            className={`w-full h-full border-0 transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
            loading="lazy"
          />

          {/* Caption Overlay */}
          {/* <div
            className={`absolute bottom-17 left-3 z-20 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="bg-blue-500/30 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg max-w-sm">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                {activeDemo.title}
              </h3>
              <p className="text-white/80 text-sm font-light leading-relaxed">
                {activeDemo.description}
              </p>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LiveDemoGallery;
