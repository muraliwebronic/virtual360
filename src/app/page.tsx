import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Industries from "@/sections/Industries";
import LiveDemoGallery from "@/sections/LiveDemoGallery";
import Pricing from "@/sections/Pricing";
import SocialProof from "@/sections/SocialProof";
import StatsCard from "@/sections/StatsCard";
import USPShowcase from "@/sections/USPShowcase";


export default function page() {
  return (
    <>
    <Hero />
    <Features />
    <USPShowcase />
    <StatsCard />
    <HowItWorks />
    <Industries />
    <Pricing />
    <Faq />
    <LiveDemoGallery />
    <SocialProof />
    <Footer />
    </>
  )
}
