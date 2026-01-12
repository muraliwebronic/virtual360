"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  FileCheck, Server, UserCheck, CreditCard, 
  Image, Ban, Copyright, Activity, 
  AlertTriangle, Scale, Mail, ShieldAlert, ArrowRight, Lock
} from "lucide-react";

const sections = [
  { id: 'acceptance', title: 'Acceptance & Services', icon: <FileCheck size={18} /> },
  { id: 'account', title: 'Account Registration', icon: <UserCheck size={18} /> },
  { id: 'billing', title: 'Billing & Plans', icon: <CreditCard size={18} /> },
  { id: 'content', title: 'Content & Rights', icon: <Image size={18} /> },
  { id: 'restrictions', title: 'Restrictions', icon: <Ban size={18} /> },
  { id: 'ip', title: 'Intellectual Property', icon: <Copyright size={18} /> },
  { id: 'liability', title: 'Liability & Disclaimers', icon: <AlertTriangle size={18} /> },
  { id: 'disputes', title: 'Dispute Resolution', icon: <Scale size={18} /> },
  { id: 'contact', title: 'Contact', icon: <Mail size={18} /> },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    };
    handleScroll();
  }, []);

  // --- RESPONSIVE STYLES (MATCHING PRIVACY POLICY) ---
  const h2Style = "text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 md:mb-6 mt-2";
  const h3Style = "text-lg font-bold text-[#1A1A1A] mb-2 md:mb-3 mt-4 md:mt-6";
  const pStyle = "text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:";
  const listStyle = "space-y-2 mb-4 text-gray-600 list-disc pl-5 text-sm md:";
  const sectionStyle = "mb-10 md:mb-16 scroll-mt-28 md:scroll-mt-32 border-b border-gray-100 pb-8 md:pb-12";

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      
      {/* --- HERO SECTION --- */}
      <header className="pt-24 pb-8 md:pt-32 md:pb-16 border-b border-gray-100 bg-gray-50/50">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Terms &"
            highlight="Conditions"
            description="Please read these terms carefully before using our services."
            size="large"
            gradient={true}
            align="left"
            className="mb-4 md:mb-6"
          />
          <p className="text-gray-500 font-medium text-xs md:text-sm">
             Effective Date: <span className="text-[#1A1A1A]">January 1, 2025</span> | Last Updated: <span className="text-[#1A1A1A]">January 1, 2025</span>
          </p>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-6 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- SIDEBAR NAVIGATION --- */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-32 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-3 ${
                  activeSection === section.id 
                  ? "bg-blue-50 text-[#2A74ED]" 
                  : "text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-50"
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* --- TERMS CONTENT --- */}
        <div className="col-span-1 lg:col-span-9">
          
          {/* 1. Acceptance */}
          <section id="acceptance" className={sectionStyle}>
             <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 md:mb-6">
              These Terms and Conditions (“Terms”) govern your use of Virtual Tour 360 services provided by Things at Web Sweden AB (“Company,” “we,” “our,” or “us”).
            </p>
            <p className={pStyle}>
              By accessing or using Virtual Tour 360, you agree to be bound by these Terms. If you do not agree, do not use our services.
            </p>

            <h3 className={h3Style}>Service Description</h3>
            <p className={pStyle}>
              Virtual Tour 360 provides a software as a service (SaaS) platform for creating, hosting, and embedding 360 degree virtual tours. Services include:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3 mt-4">
               {["Web based tour editor", "WordPress plugin for embedding", "Hosting and content delivery", "Spatial export capabilities", "Customer support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#2A74ED] rounded-full shrink-0"></span>
                    {item}
                  </li>
               ))}
            </ul>
          </section>

          {/* 2. Account Registration */}
          <section id="account" className={sectionStyle}>
            <h2 className={h2Style}>Account Registration</h2>
            
            <h3 className={h3Style}>Eligibility</h3>
            <p className={pStyle}>You must be at least 18 years old and capable of forming binding contracts.</p>

            <h3 className={h3Style}>Account Responsibility</h3>
            <p className={pStyle}>You are responsible for:</p>
            <ul className={listStyle}>
                <li>Maintaining account security and confidentiality</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
            </ul>
          </section>

          {/* 3. Billing */}
          <section id="billing" className={sectionStyle}>
            <h2 className={h2Style}>Subscription Plans and Billing</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-6">
               <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm uppercase mb-2">Plans & Free Trials</h4>
                  <p className={pStyle}>We offer Standard and Pro subscription plans. New users receive trial periods (14 days Standard, 7 days Pro) with full feature access.</p>
               </div>
               <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm uppercase mb-2">Billing Cycles</h4>
                  <p className={pStyle}>Subscriptions are billed monthly or annually via <strong>Razorpay</strong>. Subscriptions renew automatically unless cancelled before the renewal date.</p>
               </div>
               <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm uppercase mb-2">Refunds</h4>
                  <p className={pStyle}>Subscriptions cannot be refunded mid-term. If payment fails, we retry up to 3 times over 10 days before suspension.</p>
               </div>
               <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm uppercase mb-2">Cancellation</h4>
                  <p className={pStyle}>You may cancel anytime. Monthly subscriptions end at the next billing date. Annual subscriptions remain active until the end of the paid term.</p>
               </div>
            </div>
          </section>

          {/* 4. Content Rights */}
          <section id="content" className={sectionStyle}>
            <h2 className={h2Style}>Content and Usage Rights</h2>
            
            <p className={pStyle}>
               You retain ownership of all content you upload (360 images, text, etc.). You grant us a license to host, process, and deliver your content as necessary to provide services.
            </p>

            <h3 className={h3Style}>Your Responsibility</h3>
            <p className={pStyle}>You are solely responsible for:</p>
            <ul className={listStyle}>
                <li>Ensuring you have rights to uploaded content</li>
                <li>Compliance with applicable laws</li>
                <li>Accuracy of information in your tours</li>
            </ul>

            <h3 className={h3Style}>Prohibited Content</h3>
            <div className="bg-red-50/50 p-4 md:p-6 rounded-xl border border-red-100 mt-4">
               <p className="text-gray-700 font-medium text-sm md: mb-2">You may not upload content that:</p>
               <ul className="space-y-2 text-gray-600 text-sm md: list-disc pl-5">
                 <li>Violates intellectual property rights</li>
                 <li>Contains malware or malicious code</li>
                 <li>Depicts illegal activities</li>
                 <li>Is defamatory, obscene, or hateful</li>
               </ul>
            </div>
          </section>

          {/* 5. Restrictions */}
          <section id="restrictions" className={sectionStyle}>
             <h2 className={h2Style}>Usage Restrictions</h2>
             <p className={pStyle}>You agree not to:</p>
             <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3 mt-4">
                {[
                   "Reverse engineer or decompile software", 
                   "Resell or redistribute without authorization", 
                   "Use services for illegal purposes", 
                   "Attempt to gain unauthorized access", 
                   "Interfere with service operation", 
                   "Scrape or harvest data"
                ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:">
                     <Ban size={16} className="text-gray-400 mt-1 shrink-0" />
                     {item}
                   </li>
                ))}
             </ul>
             <p className="text-sm text-gray-500 mt-6 italic">
                Your subscription plan includes limits on tours, scenes, hotspots, and sites. Exceeding limits requires upgrading to a higher plan.
             </p>
          </section>

          {/* 6. Intellectual Property */}
          <section id="ip" className={sectionStyle}>
             <h2 className={h2Style}>Intellectual Property</h2>
             <p className={pStyle}>
               Virtual Tour 360 software, website, documentation, and branding are owned by Things at Web Sweden AB and protected by copyright, trademark, and other intellectual property laws.
             </p>
             <div className="bg-blue-50/50 p-4 md:p-6 rounded-xl border border-blue-100 mt-6">
                <h4 className="font-bold text-[#2A74ED] mb-2 text-sm uppercase tracking-wide">Service Availability</h4>
                <ul className="space-y-2 text-gray-700 font-medium text-sm md:">
                   <li><strong>Uptime:</strong> We strive for 99.9% uptime but do not guarantee uninterrupted service.</li>
                   <li><strong>Support:</strong> Provided via email and documentation.</li>
                   <li><strong>Modifications:</strong> We may modify, suspend, or discontinue features with or without notice.</li>
                </ul>
             </div>
          </section>

          {/* 7. Liability */}
          <section id="liability" className={sectionStyle}>
             <h2 className={h2Style}>Disclaimers & Limitation of Liability</h2>
             
             <h3 className={h3Style}>"As Is" Basis</h3>
             <p className={pStyle}>Services are provided "as is" and "as available" without warranties of any kind (Merchantability, Fitness, Non-infringement, Accuracy).</p>

             <h3 className={h3Style}>Maximum Liability</h3>
             <p className={pStyle}>Our total liability is limited to the amount you paid in the 12 months preceding the claim.</p>

             <h3 className={h3Style}>Excluded Damages</h3>
             <p className={pStyle}>We are not liable for indirect, incidental, consequential, special, or punitive damages (Lost profits, data, business interruption).</p>
          </section>

          {/* 8. Disputes & Termination */}
          <section id="disputes" className={sectionStyle}>
             <div className="grid md:grid-cols-2 gap-10">
                <div>
                   <h2 className={h2Style}>Termination</h2>
                   <ul className={listStyle}>
                      <li><strong>By You:</strong> Contact support anytime.</li>
                      <li><strong>By Us:</strong> For violation of terms, fraud, abuse, or non-payment.</li>
                   </ul>
                   <p className="text-sm text-gray-500 italic mt-2">Access ends immediately upon termination.</p>
                </div>
                <div>
                   <h2 className={h2Style}>Dispute Resolution</h2>
                   <ul className={listStyle}>
                      <li><strong>Governing Law:</strong> Laws of Sweden.</li>
                      <li><strong>Arbitration:</strong> Binding arbitration in Lidköping, Sweden.</li>
                      <li><strong>Class Action Waiver:</strong> You agree to pursue claims individually.</li>
                   </ul>
                </div>
             </div>
          </section>

          {/* 9. Contact */}
          <section id="contact" className="mb-10 md:mb-16 scroll-mt-28 md:scroll-mt-32">
            <h2 className={h2Style}>Contact Us</h2>
            <p className={pStyle}>
               We may modify these Terms at any time. Changes are effective immediately upon posting.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8 p-6 md:p-8 bg-[#F8F9FC] rounded-2xl border border-gray-100">
               <div>
                  <h4 className="font-bold text-[#1A1A1A] text-xs md:text-sm uppercase tracking-wide mb-1">Company</h4>
                  <p className="text-[#2A74ED]  md:text-lg font-bold">Things at Web Sweden AB</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Sockerbruksgatan 7<br/>
                    531 40 Lidköping<br/>
                    Sweden
                  </p>
               </div>
               
               <div className="md:border-l md:border-gray-200 md:pl-8 flex flex-col justify-center pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <h4 className="font-bold text-[#1A1A1A] text-xs md:text-sm uppercase tracking-wide mb-2">Email Support</h4>
                  <a href="mailto:support@virtualtour360.ai" className="flex items-center gap-3 text-[#1A1A1A] font-medium hover:text-[#2A74ED] transition-colors text-sm md:">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                      <Mail size={16} className="text-[#2A74ED]" />
                    </div>
                    support@virtualtour360.ai
                  </a>
               </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}