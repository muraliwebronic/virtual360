"use client";
import React from 'react';
import { Check, X } from 'lucide-react';


export type planType = {
    title: string;
    description: string;
    price: string;
    period: string;
    headerImage: string;
    isPopular: boolean;
    features: {
        text: string;
        included: boolean;
    }[];
    buttonText: string;
    isEnterprise?: boolean;
}

const Pricing = () => {

  const plans:planType[] = [
    {
      title: 'Starter',
      description: 'For freelancers and small businesses building their first experience.',
      price: '$39',
      period: '/ year',
      headerImage: '../Icons/360 Tour Website/flat.png', 
      isPopular: false,
      features: [
        { text: '3 Active Virtual Tours', included: true },
        { text: 'Unlimited Scenes per Tour', included: true },
        { text: 'Standard Hotspots', included: true },
        { text: 'Remove "Powered by Webronic"', included: false },
        { text: 'Apple Vision Pro Export', included: false },
      ],
      buttonText: 'Start Free Trial',
    },
    {
      title: 'Agency Pro',
      description: 'Unlimited power for agencies selling tours as a service.',
      price: '$99',
      period: '/ year',
      headerImage: '../Icons/360 Tour Website/motorcycle_3541614.png',
      isPopular: true, // This is your Volume Seller
      features: [
        { text: 'Unlimited Virtual Tours', included: true },
        { text: 'Unlimited Scenes & Hotspots', included: true },
        { text: 'White-Label (No Branding)', included: true },
        { text: 'Client Management Dashboard', included: true },
        { text: 'Apple Vision Pro Export', included: false },
      ],
      buttonText: 'Get Agency License',
    },
    {
      title: 'Enterprise XR',
      description: 'For studios requiring spatial computing and API integration.',
      price: '$299',
      period: '/ year',
      headerImage: '../Icons/360 Tour Website/Pro.png', 
      isPopular: false,
      isEnterprise: true,
      features: [
        { text: 'Unlimited Virtual Tours', included: true },
        { text: 'White-Label (No Branding)', included: true },
        { text: 'Vision Pro & Meta Quest Export', included: true }, // The Killer Feature
        { text: 'Developer API Access', included: true },
        { text: 'Priority 24/7 Support', included: true },
      ],
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Simple Pricing, <br />
            <span className="text-[#2A74ED]">Maximum ROI.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are a freelancer or an XR studio, we have a plan that pays for itself with just one client project.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        {/* Guarantee / Trust Footer */}
        <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
                All plans come with a 14-day money-back guarantee. No credit card required for trial.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;



const PricingCard = ({ plan }: { plan: planType }) => {  const {
    title,
    description,
    price,
    period,
    features,
    buttonText,
    isPopular,
    headerImage,
    isEnterprise
  } = plan;

  return (
    <div
      className={`bg-white rounded-[2rem] p-8 relative flex flex-col h-full transition-all duration-300 ${
        isPopular 
          ? 'border-2 border-[#2A74ED] shadow-2xl scale-105 z-10' 
          : 'border border-gray-200 hover:border-gray-300 hover:shadow-lg'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
           <span className="bg-[#2A74ED] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
             Best Value
           </span>
        </div>
      )}

      {/* Header Image */}
      <div className="mb-6 flex justify-center h-20 items-center">
        <img src={headerImage} alt={title} className="h-full w-auto object-contain" />
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed min-h-[40px]">{description}</p>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className={`text-4xl font-bold ${isPopular ? 'text-[#2A74ED]' : 'text-gray-900'}`}>
              {price}
            </span>
            <span className="text-gray-500 ml-2 font-medium">{period}</span>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <div className={`mt-0.5 p-0.5 rounded-full mr-3 flex-shrink-0 ${
                feature.included 
                  ? (isPopular ? 'bg-[#2A74ED]/10 text-[#2A74ED]' : 'bg-green-100 text-green-600') 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {feature.included ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
              </div>
              <span className={`text-sm font-medium ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 ${
          isPopular
            ? 'bg-[#2A74ED] text-white hover:bg-[#1a5fc7] shadow-lg shadow-blue-500/30'
            : isEnterprise
              ? 'bg-[#1A1A1A] text-white hover:bg-black'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};