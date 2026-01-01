import React from "react";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;

  // --- Style Options ---
  size?: "normal" | "medium" | "large";
  gradient?: boolean;
  align?: "center" | "left";
  breakOnDesktop?: boolean;

  // --- Spacing Overrides ---
  className?: string;
}

const SectionHeading = ({
  title,
  highlight,
  description,
  size = "normal",
  gradient = false,
  align = "center",
  breakOnDesktop = false,
  className = "",
}: SectionHeadingProps) => {
  // 1. Size Configurations
  const sizeClasses = {
    normal: "text-3xl md:text-4xl",
    medium: "text-4xl",
    large: "text-3xl md:text-5xl",
  };

  // 2. Alignment Configuration
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {/* --- Main Heading --- */}
      <h2
        className={`font-bold text-[#1A1A1A] mb-4 tracking-tight leading-[1.2] ${sizeClasses[size]}`}
      >
        {title}

        {/* Optional Line Break */}
        {breakOnDesktop && <br className="hidden md:block" />}

        {/* Highlighted Text */}
        {highlight && (
          <span className={`${breakOnDesktop? "": "ml-2"} ${gradient ? "text-grad-primary" : "text-[#2A74ED]"}`}>
            {highlight}
          </span>
        )}
      </h2>

      {/* --- Optional Description --- */}
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed font-medium opacity-90">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
