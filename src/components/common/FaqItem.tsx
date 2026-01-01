"use client";
import React from "react";
import { Plus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex-col rounded-2xl border bg-white px-6 py-5 shadow-sm transition-all duration-300 ease-in-out hover:border-[#2A74ED]/30 hover:shadow-md
      ${
        isOpen
          ? "border-[#2A74ED] ring-1 ring-[#2A74ED]/20"
          : "border-gray-200"
      }`}
      aria-expanded={isOpen}
    >
      {/* Header (Question + Icon) */}
      <div className="flex items-center justify-between gap-4">
        <h3
          className={`font-semibold text-lg transition-colors duration-300 ${
            isOpen ? "text-[#2A74ED]" : "text-[#1A1A1A]"
          }`}
        >
          {question}
        </h3>
        <div
          className={`flex-shrink-0 transition-colors duration-300 ${
            isOpen ? "text-[#2A74ED]" : "text-gray-400"
          }`}
        >
          <Plus
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            size={20}
          />
        </div>
      </div>

      {/* Content Wrapper (Answer) with Grid Animation */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;