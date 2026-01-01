"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Home, Camera, Briefcase, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const calculations = [
    {
      role: "Real Estate Agents",
      icon: <Home className="text-blue-600" size={24} />,
      scenario: "Close just ONE additional property sale per year",
      data: [
        { label: "Median Home Price", value: "$400,000" },
        { label: "3% Commission", value: "$12,000" },
        { label: "Annual Pro Cost", value: "$69.99" },
      ],
      resultLabel: "Estimated ROI",
      resultValue: "17,000%",
      accent: "bg-blue-600",
    },
    {
      role: "Photographers",
      icon: <Camera className="text-emerald-600" size={24} />,
      scenario: "Charge clients for virtual tour services",
      data: [
        { label: "Client Fee", value: "$200 - $500" },
        { label: "Time Saved", value: "3-4 Hours" },
        { label: "Annual Pro Cost", value: "$69.99" },
      ],
      resultLabel: "Profitability",
      resultValue: "1 Project Break-even",
      accent: "bg-emerald-600",
    },
    {
      role: "Digital Agencies",
      icon: <Briefcase className="text-purple-600" size={24} />,
      scenario: "Win bigger proposals & premium pricing",
      data: [
        { label: "Project Increase", value: "$500 - $2,000" },
        { label: "Projects / Year", value: "5 - 10" },
        { label: "Annual Pro Cost", value: "$69.99" },
      ],
      resultLabel: "Estimated ROI",
      resultValue: "7,000% - 28,000%",
      accent: "bg-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 font-['Poppins'] shadow-inner">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* --- Consistency Fix: Using SectionHeading --- */}
        <SectionHeading
          title="Calculate Your"
          highlight="Return on Investment"
          description="See how Virtual Tour 360 pays for itself across different industries."
          size="large"
          gradient={true}
          className="mb-16 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {calculations.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.role}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed h-12">{item.scenario}</p>

                <div className="space-y-4 mb-10">
                  {item.data.map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-400 text-sm">{row.label}</span>
                      <span className="text-[#1A1A1A] font-semibold">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Even-sized bottom badge */}
              <div className={`${item.accent} rounded-3xl p-6 text-white relative overflow-hidden mt-auto shadow-lg shadow-black/5`}>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-widest opacity-80 mb-1 font-bold">{item.resultLabel}</p>
                  <p className="text-2xl font-black">{item.resultValue}</p>
                </div>
                <TrendingUp className="absolute right-[-10px] bottom-[-10px] text-white/10" size={90} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;