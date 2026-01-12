"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Layout, Play, Coins } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FeaturesCTA = () => {
  return (
    <section className="bg-base border-t border-gray-100 py-24 font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Optimized Header Content */}
        <SectionHeading 
          title="Explore More"
          highlight="Resources"
          description="Everything you need to understand our detailed capabilities and industry-specific applications"
          breakOnDesktop
          size="normal"
          className="mb-12 text-center"
        />
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          
          {/* Link: How it Works - "step by step process" */}
          <Link href="/how-it-works" className="group flex-1 max-w-sm px-8 py-8 bg-white border border-gray-100 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 text-[#2A74ED] group-hover:scale-110 transition-transform">
               <Layout size={24} />
            </div>
            <span className="font-bold text-[#1A1A1A] text-lg mb-2">How It Works</span>
            <p className="text-sm text-gray-500">View our step-by-step process from upload to publish</p>
          </Link>

          {/* Link: Use Cases - "industry specific applications" */}
          <Link href="/use-cases" className="group flex-1 max-w-sm px-8 py-8 bg-white border border-gray-100 rounded-[2rem] hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 text-[#2A74ED] group-hover:scale-110 transition-transform">
               <Play size={24} />
            </div>
            <span className="font-bold text-[#1A1A1A] text-lg mb-2">Use Cases</span>
            <p className="text-sm text-gray-500">Explore industry-specific applications for your business</p>
          </Link>

          {/* Link: Pricing - "compare Standard vs Pro features" */}
          <Link href="/pricing" className="group flex-1 max-w-sm px-8 py-8 bg-[#2A74ED] rounded-[2rem] hover:bg-[#1a5fc7] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center text-white shadow-lg shadow-blue-500/20">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
               <Coins size={24} />
            </div>
            <span className="font-bold text-lg mb-2">Pricing Plans</span>
            <p className="text-sm text-white/80">Compare Standard vs. Pro features and find your ROI</p>
            <ArrowRight size={20} className="mt-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;