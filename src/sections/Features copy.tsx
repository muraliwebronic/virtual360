import React from "react";

const Features = () => {
  // Mapped icons based on your uploaded image and folder structure
  const features = [
    {
      icon: "./Icons/360 Tour Website/Group 2560.png", 
      title: "Unlimited Tours",
      description: "Create multiple virtual tours for different spaces and properties without any restrictions.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2561.png", 
      title: "Interactive Hotspots",
      description: "Add navigation points and information hotspots to guide visitors through your tours.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2562.png",
      title: "Live Preview",
      description: "See changes in real-time as you build your tours with our instant preview feature.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2563.png",
      title: "Full-Screen Mode",
      description: "Immersive viewing experience with full-screen mode for maximum impact.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2564.png",
      title: "Mobile Responsive",
      description: "Perfect viewing experience on all devices - desktop, tablet, and mobile.",
    },
    {
      icon: "./Icons/360 Tour Website/Group 2566.png", 
      title: "One-Click Embed",
      description: "Simple shortcode integration - just copy and paste into any WordPress page or post.",
    },
  ];

  return (
    // Main Section classes preserved as requested
    <section className="bg-white w-full max-w-7xl mx-auto px-6 lg:px-8 my-20 font-['Poppins']">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight">
              Everything You Need to Build <br className="hidden md:block" />
              <span className="text-grad-primary ">Stunning 360° Tours</span>
            </h2>
          </div>
          <div className="max-w-lg lg:text-right lg:pb-2">
            <p className="text-gray-600 text-lg md:text-[1.1rem] leading-relaxed font-medium">
              Create stunning virtual tours that engage your audience and showcase your spaces like never before.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-sky-50 rounded-3xl p-8 hover:bg-base border border-transparent hover:border-gray-100 shadow-lg transition-all duration-300 ease-in-out"
            >
              {/* Icon Container - Renders the Image directly */}
              <div className="size-16 mb-8 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;