"use client";
import React from "react";
import { Star, TrendingUp } from "lucide-react";

// 1. Types
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string; // Optional: "Increased sales by 30%"
}

const SocialProof = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      // Target: Traditional Agency Market (Revenue Focus)
      quote:
        "We started offering 360 tours as an add-on for our hotel clients. It took 10 minutes to setup, and we increased our average project billing by 30% immediately.",
      author: "Sarah Jenkins",
      role: "Founder",
      company: "Skyline Digital Agency",
      metric: "+30% Revenue",
    },
    {
      id: 2,
      // Target: Immersive/XR Market (Tech Focus)
      quote:
        "Finally, a tool that bridges the gap. I can build scenes in WordPress and they look stunning natively on my Apple Vision Pro without any extra coding.",
      author: "David Chen",
      role: "XR Developer",
      company: "Spatial Studios",
      metric: "VisionOS Ready",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                Trusted by Agencies & Creators
            </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-xl text-[#1A1A1A] font-medium leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Footer: Author & Metric */}
              <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">{item.author}</h4>
                  <p className="text-sm text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
                {item.metric && (
                  <div className="hidden sm:flex items-center gap-2 bg-[#ECFDF3] px-3 py-1 rounded-full">
                    <TrendingUp size={16} className="text-[#027A48]" />
                    <span className="text-xs font-bold text-[#027A48]">{item.metric}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip (Trust Indicators) */}
        <div className="border-t border-gray-200 pt-10">
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8 font-semibold">
                Powering Experiences For
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos - Replace with actual SVGs */}
                <span className="text-xl font-bold font-serif">Dummy</span>
                <span className="text-xl font-bold font-sans">Dummy</span>
                <span className="text-xl font-bold font-mono">Dummy</span>
                <span className="text-xl font-bold italic">Dummy</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;