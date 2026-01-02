"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/common/FaqItem";
import { Mail, Clock, MessageSquare, Search, ArrowRight } from "lucide-react";
import { faqSupportData } from "./data/faqSupportData";

const categories = ["General", "Technical", "Compatibility", "Billing", "Support"];

export default function FaqSupportPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Filter data based on selected category
  const filteredFaqs = faqSupportData.filter(faq => faq.category === activeCategory);

  return (
    <main className="w-full bg-base min-h-screen font-['Poppins']">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-6 text-center">
        <SectionHeading
          title="Got Questions?"
          highlight="We Have Answers"
          description="Everything you need to know about building spatial tours on WordPress"
          size="large"
          gradient={true}
          className="mb-8"
        />
      </section>

      {/* 2. SUPPORT EXPLORER */}
      <section className="container max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar: Category Selection */}
          <div className="w-full lg:w-1/4">
            <div className="lg:sticky lg:top-32 space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 mb-4">Categories</p>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenFaqId(null); // Reset accordions on category switch
                  }}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-between group ${
                    activeCategory === cat 
                    ? "bg-[#2A74ED] text-white shadow-lg shadow-blue-500/20 translate-x-1" 
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-transparent hover:border-gray-100"
                  }`}
                >
                  {cat}
                  <div className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat ? "bg-white" : "bg-gray-200 group-hover:bg-blue-300"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Content: The Accordions */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 px-2 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#2A74ED] rounded-full" />
                {activeCategory} Questions
              </h3>
              
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaqId === faq.id}
                    onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT SUPPORT FOOTER */}
<section className="pb-24 font-['Poppins']">
  <div className="container max-w-5xl mx-auto px-6">
    {/* Clean White Card instead of Dark Gray for better consistency */}
    <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-sm">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A74ED] opacity-[0.03] blur-[80px] pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
          Still Have Questions?
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Can't find the answer you're looking for? Our support team is ready to help you build your spatial experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          <ContactInfoCard 
            icon={<Mail className="text-[#2A74ED]" size={24} />} 
            title="Email Support" 
            detail="support@virtualtour360.ai" 
          />
          <ContactInfoCard 
            icon={<Clock className="text-[#2A74ED]" size={24} />} 
            title="Response Time" 
            detail="Within 48 business hours" 
          />
          <ContactInfoCard 
            icon={<MessageSquare className="text-[#2A74ED]" size={24} />} 
            title="Support Hours" 
            detail="Mon-Fri 9AM-5PM CET" 
          />
        </div>

        <button className="group px-10 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold text-lg hover:bg-[#1a5fc7] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 mx-auto">
          Contact Support Team
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

// Helper Component for the dark contact cards
const ContactInfoCard = ({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) => (
  <div className="bg-gray-50/50 border border-gray-100 p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
    <div className="mb-4">{icon}</div>
    <h4 className="text-[#1A1A1A] font-bold text-sm mb-1 uppercase tracking-wider">{title}</h4>
    <p className="text-gray-500 text-sm font-medium">{detail}</p>
  </div>

);