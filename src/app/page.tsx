import Faq from "@/sections/pricing/Faq";
import Features from "@/sections/Features";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Industries from "@/sections/Industries";
import LiveDemoGallery from "@/sections/LiveDemoGallery";
import Pricing from "@/sections/pricing/Pricing";
import Pricingv1 from "@/sections/Pricingv1";
import SocialProof from "@/sections/SocialProof";
import StatsCard from "@/sections/StatsCard";
import USPShowcase from "@/sections/USPShowcase";
import SocialProofSection from "@/sections/new/SocialProofSection";


export default function page() {
  return (
    <>
    <Hero />
    <SocialProofSection />
    <Features />
    <USPShowcase />
    <StatsCard />
    <HowItWorks />
    <Industries />
    {/* <Pricingv1 /> */}
    <Pricing />
    <Faq />
    <LiveDemoGallery />
    {/* <SocialProof /> */}
   
    </>
  )
}
