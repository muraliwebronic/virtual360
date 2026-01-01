"use client";
import { industriesData } from "@/app/use-cases/data/industriesData";
import { useState, useEffect } from "react";
import { CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";

const IndustryExplorer = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  // Helper to find active data
  const activeData =
    industriesData.find((item) => item.id === activeTab) || industriesData[0];

  // Optional: Handle hash change from URL (e.g., /use-cases#retail)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = industriesData.find((i) => i.id === hash);
      if (found) setActiveTab(found.id);
    }
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-6 lg:px-8 pb-32 font-['Poppins']">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* --- LEFT SIDE: Sticky Navigation --- */}
        <div className="w-full lg:w-1/4 lg:shrink-0">
          <div className="lg:sticky lg:top-32 space-y-2 overflow-x-auto lg:overflow-visible flex lg:flex-col pb-4 lg:pb-0 no-scrollbar">
            {industriesData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 w-full whitespace-nowrap lg:whitespace-normal
                   ${
                     activeTab === item.id
                       ? "bg-[#2A74ED] text-white shadow-lg shadow-blue-500/30 translate-x-2"
                       : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                   }`}
              >
                <span
                  className={`${
                    activeTab === item.id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-semibold text-sm ">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: Content Display --- */}
        <div className="w-full lg:w-3/4 min-h-[600px]">
          {/* Key on the outer div forces React to re-animate when tab changes */}
          <div key={activeTab} className="animate-fade-in-up">
            {/* Header Area */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
                {activeData.icon} <span>{activeData.title}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                {activeData.headline}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {activeData.description}
              </p>
            </div>

            {/* Stats / ROI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Impact Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-3 text-blue-300">
                  <TrendingUp size={24} />
                  <h4 className="font-bold uppercase tracking-wider text-sm">
                    Business Impact
                  </h4>
                </div>
                <p className="text-white/90  leading-relaxed font-medium">
                  "{activeData.impact}"
                </p>
              </div>

              {/* ROI Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75" />
                <div className="flex items-center gap-3 mb-3 text-green-600 relative z-10">
                  <BarChart3 size={24} />
                  <h4 className="font-bold uppercase tracking-wider text-sm">
                    Typical ROI
                  </h4>
                </div>
                <p className="text-gray-700  leading-relaxed relative z-10">
                  {activeData.roi}
                </p>
              </div>
            </div>

            {/* Applications Checklist */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-200/60">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
                Specific Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {activeData.applications.map((app, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full">
                      <CheckCircle2 size={14} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder for future specific demo embed */}
            <div className="mt-8 flex justify-end">
              <button className="text-sm text-gray-400 hover:text-blue-500 transition-colors">
                See live demo for {activeData.title} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExplorer;
