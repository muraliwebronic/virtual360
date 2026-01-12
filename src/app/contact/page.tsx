"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Mail,
  Clock,
  BookOpen,
  Bug,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
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
            title=""
            highlight="Get in Touch"
            description="Questions about our platform? Need help with your tours? We're here to help"
            size="large"
            gradient={true}
            className="mb-16 text-center"
          />

          <div className="flex mx-auto flex-wrap justify-center gap-6">
            <ContactMethodCard
              icon={<Mail className="text-[#2A74ED]" />}
              title="Email Us"
              detail="support@virtualtour360.ai"
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

      {/* 3. OTHER WAYS TO CONNECT (Tools + Socials) */}
      <section className="py-24 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <SectionHeading
            title=""
            gradient
            highlight="Other Ways to Connect"
            size="medium"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Essential Tools */}
            <ToolLinkCard
              icon={<BookOpen />}
              title="Documentation"
              link="/Virtual Tour 360.pdf"
              target="_blank" 
            />
            <ToolLinkCard
              icon={<Bug />}
              title="Report a Bug"
              link="mailto:support@virtualtour360.ai"
            />
            {/* Social Channels */}
            <ToolLinkCard
              icon={<Linkedin />}
              title="LinkedIn"
              link="https://www.linkedin.com/company/thingsatweb"
            />
            <ToolLinkCard
              icon={<Youtube />}
              title="YouTube"
              link="https://www.youtube.com/@thingsatweb"
            />
            <ToolLinkCard
              icon={<Facebook />}
              title="Facebook"
              link="https://www.facebook.com/thingsatweb"
            />
            <ToolLinkCard
              icon={<Instagram />}
              title="Instagram"
              link="https://www.instagram.com/thingsatweb/"
            />
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE CTA */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm">
          <div className="grow text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Enterprise & Custom Solutions
            </h3>
            <p className="text-gray-500 max-w-2xl">
              Large organization with specific requirements? We offer dedicated
              account management, SLAs, and white-label options
            </p>
          </div>
          <Link
            href="mailto:sales-360@thingsatweb.com"
            className=" px-5 lg:px-10 py-5 bg-[#1A1A1A] text-xs lg:text-2xl text-white rounded-4xl font-bold shrink-0 hover:bg-black transition-all"
          >
            Contact Enterprise Team
          </Link>
        </div>
      </section>

      {/* 5. READY TO START? */}
      <section className="py-32 container max-w-4xl mx-auto text-center px-6">
        <SectionHeading
          title=""
          highlight="Ready to Get Started?"
          size="large"
          className="mb-6"
        />
        <p className="text-gray-600 text-lg mb-12">
          Start your free trial today and create your first tour in minutes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/pricing"
            className="px-12 py-5 bg-[#2A74ED] text-white rounded-4xl font-bold shadow-xl shadow-blue-500/20 hover:bg-[#1a5fc7] transition-all"
          >
            Start Free Trial
          </Link>
          <Link
            href="/pricing"
            className="px-12 py-5 bg-white border border-gray-200 text-[#1A1A1A] rounded-4xl font-bold hover:bg-gray-50 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}

// Reusable Helper Components
const ContactMethodCard = ({ icon, title, detail }: any) => (
  <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm text-center">
    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-[#1A1A1A] mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{detail}</p>
  </div>
);

const ToolLinkCard = ({ icon, title, link, target }: any) => (
  <Link
    href={link}
    target={target || (link.startsWith("http") ? "_blank" : "_self")}
    className="bg-white p-8 rounded-4xl border border-gray-100 hover:shadow-lg transition-all text-center group"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4 text-[#2A74ED] group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-bold text-[#1A1A1A] block">{title}</span>
  </Link>
);
