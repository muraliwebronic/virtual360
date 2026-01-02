"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  Mail, Phone, MapPin, Clock, ArrowRight, 
  MessageSquare, BookOpen, Bug, Lightbulb, Calendar 
} from "lucide-react";
import Link from "next/link";
import ContactSection from "@/sections/contact/ContactSection";

export default function ContactPage() {
  return (
    <main className="w-full bg-white font-['Poppins']">
      
      {/* 1. HERO & PRIMARY CONTACT */}
      <section className="pt-32 pb-20 px-6 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto">
          <SectionHeading
            title="Get in"
            highlight="Touch"
            description="Questions about our platform? Need help with your tours? We're here to help."
            size="large"
            gradient={true}
            className="mb-16 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactMethodCard 
              icon={<Mail className="text-[#2A74ED]" />} 
              title="Email Us" 
              detail="support@virtualtour360.ai" 
            />
       
            <ContactMethodCard 
              icon={<MapPin className="text-[#2A74ED]" />} 
              title="Visit Us" 
              detail="Lidköping, Sweden" 
            />
            <ContactMethodCard 
              icon={<Clock className="text-[#2A74ED]" />} 
              title="Business Hours" 
              detail="Mon-Fri: 9AM - 5PM CET" 
            />
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & DEPARTMENTS */}
        <ContactSection />

      {/* 3. ALTERNATIVE CHANNELS (Grid style) */}
      <section className="py-24 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <SectionHeading title="Other Ways" highlight="to Connect" size="medium" className="mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <ToolLinkCard icon={<BookOpen />} title="Documentation" link="/docs" />
             <ToolLinkCard icon={<MessageSquare />} title="Community Forum" link="/forum" />
             <ToolLinkCard icon={<Calendar />} title="Schedule a Demo" link="/demo" />
             <ToolLinkCard icon={<Bug />} title="Report a Bug" link="/bug-report" />
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE CTA (Consistency: Rounded Card) */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm">
          <div className="flex-grow text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4">Enterprise & Custom Solutions</h3>
            <p className="text-gray-500 max-w-2xl">Large organization with specific requirements? We offer dedicated account management, SLAs, and white-label options.</p>
          </div>
          <Link href="mailto:sales-360@thingsatweb.com" className="px-10 py-5 bg-[#1A1A1A] text-white rounded-[2rem] font-bold shrink-0 hover:bg-black transition-all">
            Contact Enterprise Team
          </Link>
        </div>
      </section>

      {/* 5. READY TO START? (Consistent Component) */}
      <section className="py-32 container max-w-4xl mx-auto text-center px-6">
        <SectionHeading title="Ready to" highlight="Get Started?" size="large" gradient={true} className="mb-6" />
        <p className="text-gray-600 text-lg mb-12">Start your free trial today and create your first tour in minutes.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/pricing" className="px-12 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold shadow-xl shadow-blue-500/20 hover:bg-[#1a5fc7] transition-all">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="px-12 py-5 bg-white border border-gray-200 text-[#1A1A1A] rounded-[2rem] font-bold hover:bg-gray-50 transition-all">
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}

// Reusable Helper Components
const ContactMethodCard = ({ icon, title, detail }: any) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h4 className="font-bold text-[#1A1A1A] mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{detail}</p>
  </div>
);

const DepartmentItem = ({ title, description, email }: any) => (
  <div className="group">
    <h4 className="font-bold text-lg text-[#1A1A1A] mb-1">{title}</h4>
    <p className="text-sm text-gray-500 mb-2">{description}</p>
    <Link href={`mailto:${email}`} className="text-[#2A74ED] font-semibold text-sm hover:underline">{email}</Link>
  </div>
);

const ToolLinkCard = ({ icon, title, link }: any) => (
  <Link href={link} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all text-center group">
    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4 text-[#2A74ED] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-bold text-[#1A1A1A] block">{title}</span>
  </Link>
);