import React from "react";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureBlock from "@/components/features/FeatureBlock";
import FeaturesCTA from "@/components/features/FeaturesCTA";
import { featuresData } from "./data/featuresData";

export default function FeaturesPage() {
  return (
    <main className="w-full bg-white">
      {/* 1. Hero Section */}
      <FeaturesHero />

      {/* 2. Content Blocks Container */}
      <div className="flex flex-col gap-24 pb-32">
        {featuresData.map((feature, index) => (
          <FeatureBlock
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            benefits={feature.benefits}
            icon={feature.icon}
            alignment={feature.alignment}
            highlight={feature.highlight}
          />
        ))}
      </div>

      {/* 3. Footer Links */}
      <FeaturesCTA />
    </main>
  );
}
