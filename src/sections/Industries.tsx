"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading"; // Corrected path

const IndustriesSection = () => {
  const router = useRouter();

  // Data with Anchors matching 'IndustryExplorer' IDs
  const industries = [
    {
      title: "Retail & Showrooms",
      icon: "./Icons/360 Tour Website/Group 104.png",
      anchor: "retail",
    },
    {
      title: "Real Estate",
      icon: "./Icons/360 Tour Website/group-151.png",
      anchor: "real-estate",
    },
    {
      title: "Schools & University",
      icon: "./Icons/360 Tour Website/group-150.png",
      anchor: "education",
    },
    {
      title: "Hotels & Resorts",
      icon: "./Icons/360 Tour Website/Group 73.png",
      anchor: "hospitality",
    },
    {
      title: "Museums & Exhibitions",
      icon: "./Icons/360 Tour Website/Group 98.png",
      anchor: "museums",
    },
    {
      title: "Offices & Workspaces",
      icon: "./Icons/360 Tour Website/group-152.png",
      anchor: "real-estate", // Maps to Real Estate tab
    },
    {
      title: "Architecture & Interiors",
      icon: "./Icons/360 Tour Website/Group 149.png",
      anchor: "architecture",
    },
  ];

  const handleCardClick = (anchorId: string) => {
    // Navigates to /use-cases page and scrolls to the specific ID
    router.push(`/use-cases#${anchorId}`);
  };

  return (
    <section className="w-full bg-base shadow-inner font-['Poppins'] py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header */}
        <SectionHeading 
          title="Perfect For"
          highlight="Every Industry"
          description="From real estate to education, our 360° tour plugin works for any business that wants to showcase spaces"
          size="large"
          gradient={true}
          className="mb-16 px-4"
        />

        {/* 2. Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* 'group' class allows pausing animation on hover */}
          <div className="flex w-max animate-scroll gap-6 md:gap-12 py-10 hover:[animation-play-state:paused]">
            
            {/* Duplicated list for seamless infinite scroll */}
            {[...industries, ...industries].map((item, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(item.anchor)}
                className={`group bg-white w-40 md:w-48 h-40 md:h-48 rounded-[24px] 
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

        {/* 3. Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link 
             href="/use-cases" 
             className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition-all text-[#1A1A1A] font-semibold md:text-lg"
          >
             <span>Explore All Use Cases</span>
             <ArrowRight size={20} className="text-[#2A74ED] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;