

"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface MinimalActionProps {
  href: string;
  label: string;
  icon?: LucideIcon; // Optional icon for the left side
}

const ActionButton = ({ href, label, icon: Icon }: MinimalActionProps) => {
  return (
    <Link 
      href={href} 
      className="group inline-flex items-center gap-2 py-2 px-1 transition-all duration-300"
    >
      {/* Optional Left Icon (slides up slightly on hover) */}
      {Icon && (
        <Icon 
          size={20} 
          className="text-gray-400 hidden md:block group-hover:text-[#2A74ED] transition-colors duration-300" 
        />
      )}

      {/* Label (Dark gray to Blue) */}
      <span className="text-[#2A74ED] font-semibold text-xs md:text-lg group-hover:text-[#2A74ED] transition-colors duration-300">
        {label}
      </span>

      {/* Right Arrow (Slides forward) */}
      <ArrowRight 
        size={20} 
        className="text-[#2A74ED] transition-transform duration-300 group-hover:translate-x-1.5" 
      />
    </Link>
  );
};

export default ActionButton;