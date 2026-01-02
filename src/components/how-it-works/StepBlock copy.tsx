"use client";
import React from "react";
import { CheckCircle2, Info } from "lucide-react";

interface StepBlockProps {
  number: string;
  title: string;
  subtitle: string;
  description: React.ReactNode; // Changed to Node to allow bolding/breaks
  insightTitle?: string; // For "What happens behind the scenes"
  insight?: string;      // The actual text
  detailsTitle?: string;
  details: string[];
  imageSrc?: string;
}

const StepBlock = ({ 
  number, 
  title, 
  subtitle, 
  description, 
  insightTitle,
  insight,
  detailsTitle, 
  details 
}: StepBlockProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-24 last:mb-0">
      
      {/* Visual Side (Sticky on Desktop) */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
           {/* Placeholder for Step Image */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
              <span className="font-mono text-sm font-medium">Visual: {title}</span>
           </div>
           {/* Step Badge */}
           <div className="absolute top-4 left-4 w-12 h-12 bg-[#2A74ED] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md z-10">
             {number}
           </div>
           {/* Hover Gradient */}
           <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 pt-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">
          Step {number}
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 leading-tight">
          {title}
        </h2>
        <h4 className="text-lg md:text-xl font-medium text-secondary mb-6">
          {subtitle}
        </h4>
        
        {/* Main Description */}
        <div className="text-gray-600 text-justify leading-relaxed mb-8 space-y-4">
          {description}
        </div>

        {/* Insight Box (Behind the Scenes / Publishing Info) */}
        {insight && (
          <div className="mb-8 bg-blue-50/50 rounded-xl p-5 border border-blue-100">
            {insightTitle && (
               <h5 className="font-semibold text-[#2A74ED] mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                 <Info size={16} /> {insightTitle}
               </h5>
            )}
            <p className="text-gray-700 text-sm  leading-relaxed">
              {insight}
            </p>
          </div>
        )}

        {/* Details List */}
        {detailsTitle && (
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"/> 
              {detailsTitle}
            </h5>
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                   <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                   <span className="leading-snug">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepBlock;