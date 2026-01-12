"use client";
import React, { useEffect, useState, useRef } from "react";

// --- Utility: Custom Hook (Same as before) ---
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

// --- Types ---
interface StatItem {
  targetValue: number;
  suffix: string;
  label: string;
  decimals: number;
}

const StatsCard = () => {
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

  const stats: StatItem[] = [
    { targetValue: 50, suffix: "k+", label: "Tours Created", decimals: 0 },
    { targetValue: 100, suffix: "%", label: "No Code", decimals: 0 },
    { targetValue: 4.9, suffix: "★", label: "User Rating", decimals: 1 },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-6 lg:px-8 mb-20 font-['Poppins']"
    >
      <div className="bg-[#2A74ED] rounded-[20px] shadow-xl text-white">
        
        {/* Container: Flex Column on Mobile, Row on Desktop */}
        {/* We use 'divide' classes here for perfect 1px lines between items */}
        <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          {stats.map((stat, index) => (
            <div
              key={index}
              // Item Spacing: 
              // Mobile: py-8 (vertical padding), w-full (full width)
              // Desktop: py-12 (taller card), w-1/3 (equal width)
              className="flex flex-col items-center justify-center w-full md:w-1/3 py-8 md:py-12 px-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline tracking-tight">
                <span>
                  {useCounter(
                    stat.targetValue,
                    2500,
                    stat.decimals,
                    isVisible
                  )}
                </span>
                <span className="ml-2">{stat.suffix}</span>
              </h3>
              <p className="text-blue-100  text-lg font-medium opacity-90 text-center">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsCard;