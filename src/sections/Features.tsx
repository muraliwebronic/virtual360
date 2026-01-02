"use client";
import React from "react";
import Link from "next/link"; // Import for internal linking
import { ArrowRight, Layers, PlayCircle } from "lucide-react"; // Consistent icon usage
import SectionHeading from "@/components/ui/SectionHeading";
import ActionButton from "@/components/ui/ActionButtons";

const Features = () => {
  // Content matches your optimized SEO requirements
  const features = [
    {
      icon: "./Icons/360 Tour Website/Group 2560.png",
      title: "Unlimited Tours",
      description:
        "Create as many virtual tours as you need. No artificial limits on your creativity or client projects.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2561.png",
      title: "Interactive Hotspots",
      description:
        "Guide visitors through your spaces with clickable navigation points and rich information hotspots.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2562.png",
      title: "Live Preview",
      description:
        "See your changes instantly as you build. No waiting, no rendering delays, just immediate visual feedback.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2563.png",
      title: "VR & Spatial Mode",
      description:
        "Native VR headset and Apple Vision Pro support built directly into every tour you create.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2564.png",
      title: "Mobile Responsive",
      description:
        "Your tours look perfect on every device: desktop, tablet, and mobile phones.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2566.png",
      title: "One Click Embed",
      description:
        "Copy a simple WordPress shortcode and paste it anywhere. No complex setup or technical knowledge required.",
    },
  ];

  return (
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 my-24 font-['Poppins']">
      <div className="container mx-auto">
        {/* Header Section */}
        <SectionHeading
          title="Everything You Need to Build"
          highlight="Professional Virtual Tours"
          size="large"
          gradient={true}
          align="left"
          breakOnDesktop={true}
          className="max-w-3xl mb-10"
        />
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
                style={{ backgroundColor: "#e7f6f26e" }}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} Icon`} // SEO: Dynamic Alt text
                  className="w-8 h-8 object-contain"
                  loading="lazy"
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

        {/* --- SEO: Internal Linking Strategy --- */}
        <div className="mt-16 flex justify-center">
           <ActionButton
          href="/features" 
    label="View All Features" 
    icon={Layers}
        />
        </div>
      </div>
    </section>
  );
};

export default Features;
