"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FinalResourcesCTA = () => {
  return (
    <section className="py-32 container max-w-4xl mx-auto text-center px-6 font-['Poppins']">
      {/* Consistency: Using the standardized SectionHeading */}
      <SectionHeading
        title="Ready to Start"
        highlight="Creating?"
        size="large"
        gradient={true}
        className="mb-6"
      />

      <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
        Put these resources into action and build your first immersive 360° tour today. 
        Join thousands of professionals switching to the spatial web.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Primary Action: Brand Blue Pill */}
        <Link
          href="/pricing"
          className="group w-full sm:w-auto px-10 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold text-lg hover:bg-[#1a5fc7] shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          Start Free Trial
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Secondary Action: Clean White Pill */}
        <Link
          href="/Virtual Tour 360.pdf"
          target="_blank"
          className="group w-full sm:w-auto px-10 py-5 bg-white border border-gray-200 text-[#1A1A1A] rounded-[2rem] font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
        >
          <FileText size={20} className="text-gray-400 group-hover:text-[#2A74ED] transition-colors" />
          View Documentation
        </Link>
      </div>
      
      {/* Subtle reassurance text */}
      <p className="mt-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
        No Credit Card Required for Trial
      </p>
    </section>
  );
};

export default FinalResourcesCTA;