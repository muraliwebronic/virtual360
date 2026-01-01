"use client";
import React from "react";

interface FeatureBlockProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  alignment: "left" | "right";
  highlight?: boolean;
}

const FeatureBlock = ({ 
  title, 
  subtitle, 
  description, 
  benefits, 
  icon, 
  alignment, 
  highlight = false 
}: FeatureBlockProps) => {
  return (
    <section className={`w-full max-w-7xl mx-auto px-6 lg:px-8 font-['Poppins'] ${highlight ? 'py-16 bg-blue-50/40 rounded-4xl border border-blue-100/50' : ''}`}>
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text Side */}
        <div className="flex-1 w-full">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 hover:scale-105 ${highlight ? 'bg-[#2A74ED] text-white' : 'bg-secondary text-white'}`}>
            {icon}
          </div>
          
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3">
            {title}
          </h3>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
            {subtitle}
          </h2>
          
          <p className=" text-justify text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual/Image Side */}
        <div className="flex-1 w-full">
           <div className={`w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative group transform transition-all duration-500 hover:-translate-y-2 ${highlight ? 'shadow-blue-200/50' : ''}`}>
             
             {/* Placeholder for actual Feature Images */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 bg-gray-50/50">
                {/* Visual Hint */}
                <div className="w-16 h-16 rounded-full bg-gray-100 mb-4" />
                <span className="text-sm font-mono font-medium">Image: {title}</span>
             </div>

             {/* Hover Effect Gradient */}
             <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureBlock;