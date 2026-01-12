"use client";
import React from "react";
import { Compass } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading"; 
import ActionButton from "@/components/ui/ActionButtons"; // Assuming this is your MinimalAction component

const IndustriesSection = () => {
  const router = useRouter();

  // Data with Anchors matching 'IndustryExplorer' IDs
  const industries = [
    {
      title: "Retail & Showrooms",
      icon: "/Icons/360 Tour Website/Group 104.png",
      anchor: "retail",
    },
    {
      title: "Real Estate",
      icon: "/Icons/360 Tour Website/group-151.png",
      anchor: "real-estate",
    },
    {
      title: "Schools & University",
      icon: "/Icons/360 Tour Website/group-150.png",
      anchor: "education",
    },
    {
      title: "Hotels & Resorts",
      icon: "/Icons/360 Tour Website/Group 73.png",
      anchor: "hospitality",
    },
    {
      title: "Museums & Exhibitions",
      icon: "/Icons/360 Tour Website/Group 98.png",
      anchor: "museums",
    },
    {
      title: "Offices & Workspaces",
      icon: "/Icons/360 Tour Website/group-152.png",
      anchor: "real-estate",
    },
    {
      title: "Architecture & Interiors",
      icon: "/Icons/360 Tour Website/Group 149.png",
      anchor: "architecture",
    },
  ];

  const handleCardClick = (anchorId: string) => {
    router.push(`/use-cases#${anchorId}`);
  };

  // Duplicated 4 times to ensure it covers very wide screens (1920px+) without gaps
  const carouselItems = [...industries, ...industries, ...industries, ...industries];

  return (
    <section className="w-full bg-base shadow-inner font-['Poppins'] py-20 overflow-hidden">
      
      {/* 1. Header (Kept inside centered container) */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <SectionHeading
          title="Perfect For"
          highlight="Every Industry"
          description="From real estate to education, our 360° tour plugin works for any business that wants to showcase spaces"
          size="large"
          breakOnDesktop
          gradient={true}
        />
      </div>

      {/* 2. Scrolling Carousel (FULL WIDTH - Outside container) */}
      <div className="w-full relative">
        <div className="flex w-max animate-scroll gap-6 md:gap-12 py-10 hover:[animation-play-state:paused]">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(item.anchor)}
              className={`group bg-white w-40 md:w-48 h-40 md:h-48 rounded-3xl
                shrink-0 flex flex-col items-center justify-center p-4 text-center 
                border border-gray-50 hover:border-[#2A74ED]/30 
                shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(42,116,237,0.15)] 
                hover:-translate-y-2 transition-all duration-300 cursor-pointer
                ${index % 2 === 1 ? "mt-12" : ""} `}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[#1A1A1A] font-semibold text-sm leading-tight group-hover:text-[#2A74ED] transition-colors">
                {item.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Bottom CTA Button (Kept inside centered container) */}
      <div className="max-w-7xl mx-auto px-4 mt-12 flex justify-center">
        <ActionButton
          href="/use-cases"
          label="Explore All Use Cases"
          icon={Compass}
        />
      </div>

    </section>
  );
};

export default IndustriesSection;