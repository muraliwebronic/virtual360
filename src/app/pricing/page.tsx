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
    <main className="pt-32  bg-gray-50">
      <section id="plans">
        <Pricing />
      </section>

      <FeatureComparison />

      <ROICalculator />

      <Faq />
      <PricingSocialProof />

      <FinalPricingCTA />
    </main>
  );
}
