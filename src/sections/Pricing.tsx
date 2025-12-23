"use client";
import React, { useState } from "react";
import { Check, X, Sparkles, AlertCircle } from "lucide-react";

export type planType = {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discountBadge: string;
  period: string;
  billingFootnote: string;
  trialPeriod?: string;
  headerImage: string;
  isPopular: boolean;
  features: {
    text: string;
    included: boolean;
  }[];
  buttonText: string;
  isEnterprise?: boolean;
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: planType[] = [
    {
      title: "Standard",
      description:
        "Perfect for small businesses creating multiple tours and scenes",
      // === STANDARD TIER DATA (From Screenshot) ===
      // Annual: $19.99/yr ($1.67/mo). Savings: 72% OFF vs Monthly ($5.99/mo)
      // Monthly: $5.99/mo. Regular: $7.99/mo. Savings: 13% OFF
      price: isAnnual ? "$1.67" : "$5.99",

      // Annual Anchor: Comparing against Monthly Promo ($5.99) shows the 72% savings
      // Monthly Anchor: Comparing against Regular Monthly ($7.99) shows 13% savings
      originalPrice: isAnnual ? "$5.99" : "$7.99",

      // Exact percentages from the screenshot summary lines
      discountBadge: isAnnual ? "72% OFF" : "13% OFF",

      period: "/ month",
      billingFootnote: isAnnual ? "Billed $19.99 yearly" : "Billed monthly",
      trialPeriod: "14 days - Free Trial",
      headerImage: "./Icons/360 Tour Website/motorcycle_3541614.png",
      isPopular: false,
      features: [
        { text: "Maximum 1 Tour", included: true },
        { text: "Maximum 5 Scenes", included: true },
        { text: "Maximum 5 Hotspots", included: true },
        { text: "Maximum 1 Site", included: true },
      ],
      buttonText: "Start 14-Day Free Trial",
    },
    {
      title: "Pro",
      description:
        "Unlock unlimited potential for agencies, photographers, and growing businesses.",
      // === PRO TIER DATA (From Screenshot) ===
      // Annual: $69.99/yr ($5.83/mo). Savings: 42% OFF vs Monthly ($9.99/mo)
      // Monthly: $9.99/mo. Regular: $11.99/mo. Savings: 17% OFF
      price: isAnnual ? "$5.83" : "$9.99",

      // Annual Anchor: Comparing against Monthly Promo ($9.99) shows the 42% savings
      // Monthly Anchor: Comparing against Regular Monthly ($11.99) shows 17% savings
      originalPrice: isAnnual ? "$9.99" : "$11.99",

      // Exact percentages from the screenshot summary lines
      discountBadge: isAnnual ? "42% OFF" : "17% OFF",

      period: "/ month",
      billingFootnote: isAnnual ? "Billed $69.99 yearly" : "Billed monthly",
      trialPeriod: "7 days - Free Trial",
      headerImage: "./Icons/360 Tour Website/Pro.png",
      isPopular: true,
      features: [
        { text: "Unlimited Tours", included: true },
        { text: "Unlimited Scenes", included: true },
        { text: "Unlimited Hotspots", included: true },
        { text: "Maximum 3 Sites", included: true },
      ],
      buttonText: "Start 7-Day Free Trial",
    },
  ];

  return (
    <section className="bg-gray-50 py-22 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            Simple Pricing, <br />
            <span className="text-[#2A74ED]">Maximum ROI.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are a freelancer or an XR studio, we have a plan that
            pays for itself with just one client project.
          </p>
        </div>

        {/* Toggle Switch */}
        {/* Toggle Switch Container */}
        <div className="flex justify-center items-center mb-16 space-x-4">
          
          {/* Monthly Label */}
          <span className={`text-sm  font-medium transition-colors duration-300 ${
            !isAnnual ? 'text-[#2A74ED] font-bold' : 'text-gray-500'
          }`}>
            Monthly
          </span>
          
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none flex-shrink-0 cursor-pointer ${
              isAnnual ? 'bg-[#2A74ED]' : 'bg-gray-200'
            }`}
          >
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'translate-x-7 sm:translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
          
          {/* Annual Label Wrapper */}
          <div className="relative flex items-center">
            {/* Annual Label */}
            <span className={`text-sm  font-medium transition-colors duration-300 ${
              isAnnual ? 'text-[#2A74ED] font-bold' : 'text-gray-500'
            }`}>
              Annual
            </span>
            
            {/* Badge Positioned Below Text on Mobile */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-max sm:static sm:translate-x-0 sm:mt-0 sm:ml-2">
              <span className="relative block text-[#2A74ED] text-[10px] sm:text-[11px] font-bold bg-blue-50 border border-blue-100 px-2 sm:px-2.5 py-0.5 rounded-full animate-pulse">
                Save up to 72%
                {/* Mobile Arrow */}
                <span className="sm:hidden absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-blue-100"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start relative max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Footer */}
        {/* <div className="mt-14 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center gap-2">
            <AlertCircle size={15} />
            All plans come with a money-back guarantee. No credit card required
            for trial.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({ plan }: { plan: planType }) => {
  const {
    title,
    description,
    price,
    originalPrice,
    discountBadge,
    period,
    billingFootnote,
    trialPeriod,
    features,
    buttonText,
    isPopular,
    headerImage,
  } = plan;

  const isStandard = title === "Standard";

  const iconColor = isStandard
    ? "text-green-500 fill-green-500"
    : "text-[#2A74ED] fill-[#2A74ED]";
  const dotColor = isStandard ? "bg-green-300" : "bg-blue-300";
  const gradientText = isStandard
    ? "from-green-600 to-teal-500"
    : "from-[#2A74ED] to-indigo-500";
  const priceColor = isStandard ? "text-gray-900" : "text-[#2A74ED]";
  const badgeColor = isStandard
    ? "bg-green-100 text-green-700"
    : "bg-blue-100 text-blue-700";

  return (
    <div
      className={`bg-white rounded-[1.8rem] p-7 relative flex flex-col h-full transition-all duration-300 ${
        isPopular
          ? "border-2 border-[#2A74ED] shadow-xl scale-[1.02] z-10"
          : "border border-gray-200 hover:border-gray-300 hover:shadow-lg"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-[#2A74ED] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
            Most Popular
          </span>
        </div>
      )}

      {/* Header Image */}
      <div className="mb-5 flex justify-center h-18 items-center">
        <img
          src={headerImage}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex-grow m">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 mb-5 text-sm leading-relaxed min-h-[40px]">
          {description}
        </p>

        <div className="mb-8 font-['Poppins'] ">
          
          {/* Trial Label */}
          {trialPeriod && (
            <div className="mb-2 relative w-fit">
              <span className="relative flex items-center">
                <Sparkles
                  className={`w-3.5 h-3.5 mr-1.5 animate-pulse ${iconColor}`}
                />
                <span className="text-gray-600 font-bold text-xs tracking-tight uppercase mr-1">
                  {trialPeriod.split(" - ")[0]}
                </span>
                <span
                  className={`mx-1 w-1 h-1 rounded-full ${dotColor}`}
                ></span>
                <span
                  className={`font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r ${gradientText} uppercase tracking-wide`}
                >
                  Free Trial
                </span>
              </span>
            </div>
          )}

          {/* Price & Period (Baseline Aligned) */}
          <div className="flex items-baseline gap-1 mt-7">
            <span
              className={`text-5xl font-bold ${priceColor} tracking-tighter leading-none`}
            >
              {price}
            </span>
            <span className="text-gray-500 font-medium text-sm">
              {period}
            </span>
          </div>

          {/* Original Price & Badge (Row Aligned) */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-gray-400 text-sm font-medium line-through decoration-gray-400/60">
              {originalPrice}
            </span>
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap ${badgeColor}`}
            >
              {discountBadge}
            </span>
          </div>

          {/* Billed Yearly Footnote */}
          {billingFootnote && (
            <p className="text-[11px] text-gray-400 font-medium mt-2">
              {billingFootnote}
            </p>
          )}
        </div>
        {/* === END UPDATED LAYOUT === */}

        {/* Features List */}
        <ul className="space-y-3.5 mb-7 border-t border-gray-100 pt-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <div
                className={`mt-0.5 p-0.5 rounded-full mr-2.5 flex-shrink-0 ${
                  feature.included
                    ? isPopular
                      ? "bg-[#2A74ED]/10 text-[#2A74ED]"
                      : "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {feature.included ? (
                  <Check size={13} strokeWidth={3} />
                ) : (
                  <X size={13} strokeWidth={3} />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  feature.included
                    ? "text-gray-700"
                    : "text-gray-400 line-through"
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center transition-all duration-300 ${
          isPopular
            ? "bg-[#2A74ED] text-white hover:bg-[#1a5fc7] shadow-lg shadow-blue-500/30"
            : "bg-[#1A1A1A] text-white hover:bg-black"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};
