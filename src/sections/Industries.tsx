"use client";
import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Retail & Showrooms",
      icon: "/Icons/360 Tour Website/Group 104.png",
    },
    {
      title: "Real Estate",
      icon: "/Icons/360 Tour Website/group-151.png",
    },
    {
      title: "Schools & University",
      icon: "/Icons/360 Tour Website/group-150.png",
    },
    {
      title: "Hotels & Resorts",
      icon: "/Icons/360 Tour Website/Group 73.png",
    },
    {
      title: "Museums & Exhibitions",
      icon: "/Icons/360 Tour Website/Group 98.png",
    },
    {
      title: "Offices & Workspaces",
      icon: "/Icons/360 Tour Website/group-152.png",
    },
    // --- STRATEGIC SWAP: High-Value Target for Vision Pro ---
    {
      title: "Architecture & Interiors", // Swapped from "Amusement"
      icon: "/Icons/360 Tour Website/Group 149.png", // Kept same icon or use a specific building icon if available
    },
    // --------------------------------------------------------
  ];

  return (
    <section className="w-full bg-base">
      

      <div className="max-w-7xl mx-auto my-20 font-['Poppins'] py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Perfect For
            <span className="text-grad-primary"> Every Industry</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            From real estate to education, our 360° tour plugin works for any
            business that wants to showcase spaces.
          </p>
        </div>

        {/* Wrapper for Scroll Area + Fade Divs */}
        <div className="relative w-full">
          
          {/* Left Fade Shadow Div */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-linear-to-r from-base to-transparent z-10 pointer-events-none" />

          {/* Right Fade Shadow Div */}
          <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-linear-to-l from-base to-transparent z-10 pointer-events-none" />

          {/* Scrollable Container */}
          <div className="flex overflow-x-auto justify-start items-start w-full py-10 gap-3 md:gap-12 min-h-75 no-scrollbar px-4 md:px-8">
            {industries.map((item, index) => (
              <div
                key={index}
                className={`group bg-white w-40 md:w-48 h-40 md:h-48 rounded-[20px] 
             shrink-0 flex flex-col items-center justify-center p-4 text-center border border-gray-50 hover:border-primary shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default
             ${index % 2 === 1 ? "mt-12" : ""} `}
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-black font-semibold text-sm leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;