"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

// 1. Define the shape of your FAQ data
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  // 2. Type the state as an array of numbers (indices)
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  // 3. Type the handler argument
  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "Do I need a VR headset to build tours?",
      answer:
        "No. You can build everything on your desktop using our standard WordPress editor. The 'Spatial Mode' is automatically generated for users who visit your site using Apple Vision Pro or Meta Quest.",
    },
    {
      id: 2,
      question: "Will 360° images slow down my website?",
      answer:
        "Not at all. We use smart lazy-loading and image optimization. The heavy 360 assets are only loaded when the user actually interacts with the tour player, keeping your PageSpeed score high.",
    },
    {
      id: 3,
      question: "Does it work with Elementor or Divi?",
      answer:
        "Yes! Webronic is 100% compatible with Elementor, Divi, Gutenberg, and WPBakery. You simply use our shortcode block to place the tour anywhere on your layout.",
    },
    {
      id: 4,
      question: "How does the Apple Vision Pro export work?",
      answer:
        "It's automatic. When a user visits your site on visionOS, our plugin detects the device and offers an 'Enter Immersive Mode' button, rendering your tour in full spatial 360.",
    },
    {
      id: 5,
      question: "Can I white-label the tours for my clients?",
      answer:
        "Yes. Both the Standard and Pro plans are fully white-labeled. There are no watermarks, and you can add your own logo or your client’s logo to the tour player.",
    },
  ];

  return (
    <div className="mt-10 font-['Poppins']">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
          {/* Left Column: Header */}
          <div className="flex flex-col gap-3">
            <div className="sticky top-20">
              <div className="flex flex-col gap-5 text-left">
                <h3 className="w-fit rounded-full bg-[#ECFDF3] border border-[#D1FADF] px-4 py-1.5 text-sm font-semibold text-[#027A48] shadow-sm">
                  Support
                </h3>
                <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                  Got Questions? <br />
                  <span className="text-[#2A74ED]">We have answers.</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-sm">
                  Everything you need to know about building spatial tours on
                  WordPress.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="grid h-fit">
            <div className="flex flex-col gap-5">
              {faqData.map((fq, index) => {
                const isOpen = openFaqs.includes(index);
                return (
                  <div
                    key={fq.id}
                    onClick={() => toggleFaq(index)}
                    className={`group cursor-pointer flex-col rounded-2xl border bg-white px-6 py-5 shadow-sm transition-all duration-300 ease-in-out hover:border-[#2A74ED]/30 hover:shadow-md
                    ${
                      isOpen
                        ? "border-[#2A74ED] ring-1 ring-[#2A74ED]/20"
                        : "border-gray-200"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`font-semibold text-lg ${
                          isOpen ? "text-[#2A74ED]" : "text-[#1A1A1A]"
                        }`}
                      >
                        {fq.question}
                      </h3>
                      <div
                        className={`${
                          isOpen ? "text-[#2A74ED]" : "text-gray-400"
                        } flex-shrink-0`}
                      >
                        <Plus
                          className={`${
                            isOpen ? "rotate-45" : "rotate-0"
                          } transition-transform duration-300 ease-in-out`}
                          size={20}
                        />
                      </div>
                    </div>
                    {/* Content Wrapper for Animation */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <p className="overflow-hidden text-gray-500 leading-relaxed">
                        {fq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
