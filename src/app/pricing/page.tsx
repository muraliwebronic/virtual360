import React from "react";
import Pricing from "@/sections/pricing/Pricing";
import FeatureComparison from "@/components/FeatureComparison";
import ROICalculator from "@/sections/pricing/ROICalculator";
import PricingSocialProof from "@/sections/pricing/PricingSocialProof";
import Faq from "@/sections/pricing/Faq";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalPricingCTA from "@/sections/pricing/FinalPricingCTA";

export default function PricingPage() {
  return (
    <main className="pt-32 pb-20 px-6 bg-gray-50">
      {/* 1. Pricing Plans */}
      <section id="plans">
        <Pricing />
      </section>

      {/* 2. Detailed Feature Comparison */}
      <FeatureComparison />

      {/* 3. ROI Calculator (The Business Case) */}
      <ROICalculator />

      {/* 4. Social Proof (Trust Building) */}
      <PricingSocialProof />

      {/* 5. FAQ (Removing Friction) */}
      <Faq />

      {/* 6. FINAL CONVERSION CTA */}

     <FinalPricingCTA />
    </main>
  );
}
