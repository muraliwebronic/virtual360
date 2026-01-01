import React from "react";
import UseCasesHero from "@/components/use-cases/UseCasesHero";
import IndustryExplorer from "@/components/use-cases/IndustryExplorer";
import FeaturesCTA from "@/components/features/FeaturesCTA";

export default function UseCasesPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      
      {/* 1. Hero */}
      {/* <UseCasesHero /> */}

      {/* 2. Interactive Industry Switcher */}
      <IndustryExplorer />

      {/* 3. Bottom CTA (Reusing from Features) */}
      <FeaturesCTA />
      
    </main>
  );
}