import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FinalPricingCTA = () => {
  return (
    <section className="py-28 bg-base relative overflow-hidden font-['Poppins'] shadow-inner">
      {/* Subtle Background Accents - adjusted for light theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2A74ED] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2A74ED] opacity-[0.02] blur-[100px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge - Adjusted for light background */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            Limited Time Offer
          </span>
        </div>

        {/* Section Heading Integration */}
        <SectionHeading
          title="Ready to"
          highlight="Get Started?"
          description="Only $0.50 refundable verification charge. No long-term commitment. Cancel anytime."
          size="large"
          gradient={true}
          className="mb-12"
        />

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/checkout/standard"
            className="group w-full sm:w-auto px-10 py-5 bg-white text-[#1A1A1A] border border-gray-100 rounded-[2rem] font-bold text-lg hover:border-gray-200 hover:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            Start Standard Trial
            <ArrowRight
              size={20}
              className="text-[#2A74ED] group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/checkout/pro"
            className="group w-full sm:w-auto px-10 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold text-lg hover:bg-[#1a5fc7] transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
          >
            Start Pro Trial
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-gray-400 text-xs font-medium uppercase tracking-widest">
          Safe & Secure Checkout via Razorpay
        </p>
      </div>
    </section>
  );
};

export default FinalPricingCTA;