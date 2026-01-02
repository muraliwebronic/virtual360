"use client";
import { faqData } from "@/app/pricing/data/pricingFAQData";
import FaqItem from "@/components/common/FaqItem";
import React, { useState } from "react";
import Link from "next/link"; // Added Import
import { ArrowRight, HelpCircle } from "lucide-react"; // Added Import
import ActionButton from "@/components/ui/ActionButtons";

export default function Faq() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  return (
    <section className="py-20 font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column: Sticky Header */}
          <div className="flex flex-col gap-3">
            <div className="md:sticky md:top-32">
              <div className="flex flex-col gap-5 text-left">
                <span className="w-fit rounded-full bg-[#ECFDF3] border border-[#D1FADF] px-4 py-1.5 text-sm font-semibold text-[#027A48] shadow-sm">
                  Support
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
                  Got Questions? <br />
                  <span className="text-[#2A74ED]">We have answers</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-sm mb-2">
                  Everything you need to know about building spatial tours on
                  WordPress.
                </p>

                {/* Quick Link Added Here */}
                <ActionButton
                  href="/faq"
                  label="View additional billing & technical questions"
                  icon={HelpCircle}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-5 h-fit">
            {faqData.map((fq, index) => (
              <FaqItem
                key={fq.id}
                question={fq.question}
                answer={fq.answer}
                isOpen={openFaqs.includes(index)}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
