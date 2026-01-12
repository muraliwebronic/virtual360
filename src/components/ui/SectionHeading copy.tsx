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
    normal: "max-xs:text-xl text-2xl md:text-4xl",
    medium: "max-xs:text-xl text-2xl md:text-[2.75rem]",
    large:  "max-xs:text-xl text-2xl md:text-5xl",
  };

  // 2. Alignment Configuration
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {/* --- Main Heading --- */}
      <h2
        className={`font-bold text-[#1A1A1A] mb-6 tracking-tight leading-[1.15] ${sizeClasses[size]}`}
      >
        {title}

        {highlight && (
          <>
            {breakOnDesktop ? (
              <>
                {/* LOGIC: When breaking on desktop, we need a space on mobile so words don't touch. */}
                <span className="md:hidden"> </span>
                <br className="hidden md:block" />
              </>
            ) : (
              // If not breaking, just add a natural space
              " " 
            )}
            
            <span className={gradient ? "text-grad-primary" : "text-[#2A74ED]"}>
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* --- Optional Description --- */}
      {description && (
        <p className="text-lg text-gray-600 leading-relaxed font-medium opacity-90 text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;