"use client";
import React from "react";
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  const plans = [
    { name: "Standard Plan" },
    { name: "Pro Plan" },
  ];

  // Data extracted from the image (Standard vs Pro)
  const features = [
    {
      name: "Number of Tours",
      standard: "1",
      pro: "Unlimited",
      highlight: true,
    },
    {
      name: "Scenes per Tour",
      standard: "5",
      pro: "Unlimited",
      highlight: true,
    },
    {
      name: "Hotspots per Scene",
      standard: "5",
      pro: "Unlimited",
      highlight: true,
    },
    {
      name: "Custom Colors",
      standard: false,
      pro: true,
      highlight: false,
    },
    {
      name: "Typography Controls",
      standard: false,
      pro: true,
      highlight: false,
    },
    {
      name: "Priority Support",
      standard: true,
      pro: true,
      highlight: false,
    },
    {
      name: "Future Updates",
      standard: true,
      pro: true,
      highlight: false,
    },
    {
      name: "Shortcode Embedding",
      standard: true,
      pro: true,
      highlight: false,
    },
    {
      name: "Mobile Responsive",
      standard: true,
      pro: true,
      highlight: false,
    },
    {
      name: "Full-Screen Mode",
      standard: true,
      pro: true,
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-16 font-['Poppins']">
      <div className="container max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
            Compare Features
          </h2>
          <p className="text-gray-500">
            See the difference between Standard and Pro
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden shadow-lg rounded-[20px] border border-gray-100">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
            {/* Table Header */}
            <thead className="bg-[#2A74ED] text-white">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold text-white w-1/3">
                  Features
                </th>
                {plans.map((plan, index) => (
                  <th 
                    key={index} 
                    scope="col" 
                    className="px-6 py-4 font-bold text-white text-center w-1/3"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-colors hover:bg-gray-50/50 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  {/* Feature Name */}
                  <th className="px-6 py-3 font-medium text-gray-900">
                    {feature.name}
                  </th>

                  {/* Standard Column */}
                  <td className="px-6 py-3 text-center">
                    <StatusCell value={feature.standard} highlight={feature.highlight} />
                  </td>

                  {/* Pro Column */}
                  <td className="px-6 py-3 text-center">
                    <StatusCell value={feature.pro} highlight={feature.highlight} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

// Helper component to render Check, X, or Text with the SAME styling as PricingCard
const StatusCell = ({ value, highlight }: { value: string | boolean; highlight: boolean }) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        {/* Same styling: p-0.5 rounded-full bg-green-100 text-green-600 */}
        <div className="p-0.5 rounded-full bg-green-100 text-green-600 inline-flex items-center justify-center">
          <Check size={14} strokeWidth={3} />
        </div>
      </div>
    );
  }
  
  if (value === false) {
    return (
      <div className="flex justify-center">
        {/* Same styling but red for 'Wrong': p-0.5 rounded-full bg-red-100 text-red-500 */}
        <div className="p-0.5 rounded-full bg-red-100 text-red-500 inline-flex items-center justify-center">
          <X size={14} strokeWidth={3} />
        </div>
      </div>
    );
  }

  // Render text (e.g., "5" or "Unlimited")
  return (
    <span className={`font-bold ${value === "Unlimited" || highlight ? "text-[#027A48]" : "text-gray-900"}`}>
      {value}
    </span>
  );
};

export default FeatureComparison;