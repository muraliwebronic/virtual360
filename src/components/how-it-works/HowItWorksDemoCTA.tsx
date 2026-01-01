import { Play, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HowItWorksDemoCTA() {
  return (
    <section className="bg-base shadow-inner py-24 font-['Poppins']">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        {/* Optimized Content Integration */}
        <SectionHeading
          title="Experience Virtual Tour 360"
          highlight="in Action"
          description="Watch the walkthrough or try the live demo yourself. Explore a sample virtual tour created with our platform. This is exactly what you will be able to create in minutes."
          size="medium"
          gradient={true}
          className="mb-12"
        />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Watch Walkthrough Button */}
          <button className="group w-full sm:w-auto px-10 py-5 bg-white text-[#1A1A1A] border border-gray-100 rounded-[2rem] font-bold text-lg hover:border-blue-200 hover:shadow-xl transition-all flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Play size={16} className="fill-[#1A1A1A] text-[#1A1A1A] ml-0.5" />
            </div>
            Watch Walkthrough
          </button>

          {/* Launch Live Demo Button */}
          <button className="group w-full sm:w-auto px-10 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold text-lg hover:bg-[#1a5fc7] transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20">
            Launch Live Demo Tour
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};