"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading"; // Correctly imported

const testimonials = [
  {
    quote: "Virtual Tour 360 cut my tour creation time from 4 hours to 30 minutes. The ROI is ridiculous.",
    author: "Sarah Johnson",
    role: "Real Estate Agent",
    initials: "SJ"
  },
  {
    quote: "We can finally offer Vision Pro experiences to our clients without hiring specialized developers.",
    author: "Michael Chen",
    role: "Digital Agency Owner",
    initials: "MC"
  },
  {
    quote: "The Standard plan paid for itself with a single client project. I upgraded to Pro after two weeks.",
    author: "David Martinez",
    role: "Freelance Photographer",
    initials: "DM"
  },
];

const PricingSocialProof = () => {
  return (
    <section className="py-24 bg-white font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* --- Consistency Fix: Using SectionHeading for the Title Only --- */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex justify-center gap-1.5 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#FDB022] text-[#FDB022]" />
            ))}
          </div>
          <SectionHeading 
            title="Trusted by 5,000+"
            highlight="Professionals Worldwide"
            size="medium"
            breakOnDesktop
            gradient={true}
            className="mb-0" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className="relative group flex flex-col h-full">
              <Quote className="text-blue-100 mb-6 group-hover:text-blue-200 transition-colors duration-300" size={48} />
              <p className="text-lg text-gray-600 italic mb-8 relative z-10 leading-relaxed flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2A74ED] font-bold text-sm border border-blue-100">
                   {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">{t.author}</h4>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSocialProof;