"use client";
import React from "react";
import { CheckCircle2, Info } from "lucide-react";

interface StepBlockProps {
  imgUrl:string;
  number: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  insightTitle?: string;
  insight?: string;
  detailsTitle?: string;
  details: string[];
  imageSrc?: string;
}

const StepBlock = ({ 
  imgUrl,
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
            <img src={imgUrl} alt={imgUrl} />
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
        <h2 className="text-xl md:text-4xl font-bold text-[#1A1A1A] mb-3 leading-tight">
          {title}
        </h2>
        <h4 className="  font-medium text-secondary mb-6">
          {subtitle}
        </h4>
        
        {/* Main Description */}
        <div className="text-gray-600 text-justify leading-relaxed mb-8 space-y-4">
          {description}
        </div>

        {/* Insight Section: Minimal Developer Notice */}
        {insight && (
          <div className="mb-8 pl-4 border-l-2 border-blue-400/30">
            {insightTitle && (
               <h5 className="font-semibold text-gray-900 mb-1 flex items-center gap-2 text-xs uppercase tracking-wider">
                 {insightTitle}
               </h5>
            )}
            <p className="text-gray-500 text-sm leading-relaxed italic">
              {insight}
            </p>
          </div>
        )}

        {/* Details List: Clean Layout (No Box) */}
        {detailsTitle && (
          <div className="mt-4">
            <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
               {/* Small accent to anchor the list title */}
              {detailsTitle}
            </h5>
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                   {/* Checkmarks provide the visual weight now */}
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