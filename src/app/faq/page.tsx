"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/common/FaqItem";
import { Mail, Clock, MessageSquare, ArrowRight, HelpCircle } from "lucide-react";
import { faqSupportData } from "./data/faqSupportData";
import Link from "next/link";

const categories = ["General", "Technical", "Compatibility", "Billing", "Support"];

export default function FaqSupportPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Filter data based on selected category
  const filteredFaqs = faqSupportData.filter(faq => faq.category === activeCategory);

  return (
    <main className="w-full bg-white min-h-screen font-['Poppins']">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-12 border-b border-gray-100">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Got Questions?"
            highlight="We Have Answers"
            description="Everything you need to know about building spatial tours on WordPress"
            size="large"
            gradient={true}
            className="text-left mb-0"
          />
        </div>
      </section>

      {/* 2. SUPPORT EXPLORER */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar: Clean Vertical Navigation (Matches Policy Pages) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-1 border-l border-gray-100">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-5 mb-4">Categories</p>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenFaqId(null);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-3 border-l-2 -ml-[1px] ${
                    activeCategory === cat 
                    ? "border-[#2A74ED] text-[#2A74ED] bg-blue-50/50" 
                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {/* Optional: Add dynamic icons based on category if desired */}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content: The Accordions */}
          <div className="col-span-1 lg:col-span-9">
            <div className="mb-8 flex items-center gap-3">
               <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2A74ED]">
                  <HelpCircle size={20} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">
                 {activeCategory} Questions
               </h3>
            </div>
            
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
      </section>

      {/* 3. CONTACT SUPPORT FOOTER */}
      <section className="pb-24 pt-8">
        <div className="container max-w-5xl mx-auto px-6">
          
          {/* Clean White Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center shadow-sm">
            
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Can't find the answer you're looking for? Our support team is ready to help you build your spatial experience.
              </p>

              {/* Contact Cards - Clean Style */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                <ContactInfoCard 
                  icon={<Mail className="text-[#2A74ED]" size={20} />} 
                  title="Email Support" 
                  detail="support@virtualtour360.ai" 
                />
                <ContactInfoCard 
                  icon={<Clock className="text-[#2A74ED]" size={20} />} 
                  title="Response Time" 
                  detail="Within 48 business hours" 
                />
                <ContactInfoCard 
                  icon={<MessageSquare className="text-[#2A74ED]" size={20} />} 
                  title="Support Hours" 
                  detail="Mon-Fri 9AM-5PM CET" 
                />
              </div>

              {/* Clean Button Style */}
              <Link 
                href="mailto:support@virtualtour360.ai"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2A74ED] text-white rounded-xl font-semibold hover:bg-[#1a5fc7] transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Contact Support Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper Component: Clean White Card with Hover Border
const ContactInfoCard = ({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) => (
  <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all duration-300">
    <div className="mb-3 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">{icon}</div>
    <h4 className="text-gray-900 font-bold text-sm mb-1 uppercase tracking-wider">{title}</h4>
    <p className="text-gray-500 text-sm font-medium">{detail}</p>
  </div>
);