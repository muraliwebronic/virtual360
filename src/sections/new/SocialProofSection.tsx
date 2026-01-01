"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star, Box, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// --- 1. Utility: Custom Hook (Unchanged) ---
const useCounter = (
  end: number,
  duration: number = 2000,
  decimals: number = 0,
  startAnimation: boolean = false
): string => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!startAnimation) return;
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentVal = ease * end;
      setCount(currentVal);
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startAnimation]);
  return count.toFixed(decimals);
};

// --- 2. Main Component ---
const SocialProofSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const formatNumber = (numStr: string) => {
    const num = parseFloat(numStr);
    return num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 1 });
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white border-b border-gray-100 font-['Poppins']"
    >
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
         
        {/* --- Section Header --- */}
        <SectionHeading 
          title="Trusted by the World’s Best"
          highlight="Creators & Agencies"
          description="Join the fastest-growing community building the immersive web."
          size="normal"
          breakOnDesktop={true}
          className="mb-16"
        />

        {/* --- Stats Grid --- */}
        {/* FIXED: Changed items-center to items-start so everything aligns to the top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* 1. Rating Block */}
          <div className="flex flex-col items-center justify-start group cursor-default">
            {/* FIXED: Added h-14 to match the height of the icon boxes below */}
            <div className="h-14 flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={22} 
                  className={`fill-[#FDB022] text-[#FDB022] transition-transform duration-300 group-hover:scale-110 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <h3 className="text-4xl font-bold text-[#1A1A1A] mb-1 tracking-tight">
              {useCounter(4.9, 2000, 1, isVisible)}/5
            </h3>
            <p className="text-gray-500 font-medium">Average User Rating</p>
          </div>

          {/* Divider for Mobile */}
          <div className="w-24 h-px bg-gray-100 mx-auto md:hidden" />

          {/* 2. Tours Created Block */}
          <div className="flex flex-col items-center justify-start group">
            {/* Icon Box: h-14 */}
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 text-[#2A74ED] group-hover:bg-[#2A74ED] group-hover:text-white transition-colors duration-300">
              <Box size={26} className="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-4xl font-bold text-[#1A1A1A] mb-1 tracking-tight tabular-nums">
              {formatNumber(useCounter(50000, 2500, 0, isVisible))}+
            </h3>
            <p className="text-gray-500 font-medium">Virtual Tours Created</p>
          </div>

          {/* Divider for Mobile */}
          <div className="w-24 h-px bg-gray-100 mx-auto md:hidden" />

          {/* 3. Trusted By Block */}
          <div className="flex flex-col items-center justify-start group">
            {/* Icon Box: h-14 */}
            <div className="w-14 h-14 rounded-2xl bg-[#ECFDF3] flex items-center justify-center mb-4 text-[#027A48] group-hover:bg-[#027A48] group-hover:text-white transition-colors duration-300">
              <Users size={26} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-4xl font-bold text-[#1A1A1A] mb-1 tracking-tight tabular-nums">
              {formatNumber(useCounter(5000, 2500, 0, isVisible))}+
            </h3>
            <p className="text-gray-500 font-medium text-center px-4">
              Agencies, Freelancers & Creators
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;