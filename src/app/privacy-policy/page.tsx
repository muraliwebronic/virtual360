"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  ShieldCheck, Lock, Eye, Share2, 
  UserCheck, Globe, Cookie, Mail, 
  FileText, ArrowRight
} from "lucide-react";

const sections = [
  { id: 'intro', title: 'Introduction', icon: <FileText size={18} /> },
  { id: 'collection', title: 'Information We Collect', icon: <Eye size={18} /> },
  { id: 'use', title: 'How We Use Info', icon: <UserCheck size={18} /> },
  { id: 'security', title: 'Storage & Security', icon: <Lock size={18} /> },
  { id: 'sharing', title: 'Sharing & Disclosure', icon: <Share2 size={18} /> },
  { id: 'rights', title: 'Your Rights', icon: <Globe size={18} /> },
  { id: 'cookies', title: 'Cookies & Tracking', icon: <Cookie size={18} /> },
  { id: 'compliance', title: 'Compliance', icon: <ShieldCheck size={18} /> },
  { id: 'contact', title: 'Contact', icon: <Mail size={18} /> },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro');

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


  const h2Style = "text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 md:mb-6 mt-2";
  const h3Style = "text-lg font-bold text-[#1A1A1A] mb-2 md:mb-3 mt-4 md:mt-6";
  const pStyle = "text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:";
  const listStyle = "space-y-2 mb-4 text-gray-600 list-disc pl-5 text-sm md:";
  const sectionStyle = "mb-10 md:mb-16 scroll-mt-28 md:scroll-mt-32 border-b border-gray-100 pb-8 md:pb-12";

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      
   
      <header className="pt-24 pb-8 md:pt-32 md:pb-16 border-b border-gray-100 bg-gray-50/50">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Privacy"
            highlight="Policy"
            description="We are committed to protecting your privacy and ensuring transparency in how we handle your data."
            size="large"
            gradient={true}
            align="left"
            className="mb-4 md:mb-6"
          />
          <p className="text-gray-500 font-medium text-xs md:text-sm">
             Effective Date: <span className="text-[#1A1A1A]">January 1, 2025</span>
          </p>
        </div>
      </header>

      {/* Main Grid: Reduced vertical padding on mobile (py-8) */}
      <div className="container max-w-7xl mx-auto px-6 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- SIDEBAR NAVIGATION (Hidden on Mobile) --- */}
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

        {/* --- MAIN CONTENT --- */}
        <div className="col-span-1 lg:col-span-9">
          
          {/* 1. Introduction */}
          <section id="intro" className={sectionStyle}>
             <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 md:mb-6">
               Things at Web Sweden AB (“we,” “our,” or “us”) operates <strong>Virtual Tour 360</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p className={pStyle}>
              By using our Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="collection" className={sectionStyle}>
            <h2 className={h2Style}>Information We Collect</h2>
            
            <h3 className={h3Style}>Personal Information</h3>
            <p className={pStyle}>When you register for Virtual Tour 360, we may collect personally identifiable information, including but not limited to:</p>
            <ul className={listStyle}>
              <li>Email address and Full Name</li>
              <li>Phone number (Optional)</li>
              <li>Billing Address and Company details</li>
              <li>Payment Information (Processed securely by Razorpay)</li>
            </ul>

            <h3 className={h3Style}>Usage Data</h3>
            <p className={pStyle}>We may also collect information that your browser sends whenever you visit our Service, such as:</p>
            <ul className={listStyle}>
              <li>Computer's Internet Protocol (IP) address</li>
              <li>Browser type and browser version</li>
              <li>The pages of our Service that you visit</li>
              <li>The time and date of your visit</li>
              <li>Time spent on those pages and other diagnostic data</li>
            </ul>
          </section>

          {/* 3. How We Use Info */}
          <section id="use" className={sectionStyle}>
            <h2 className={h2Style}>How We Use Your Information</h2>
            <p className={pStyle}>We use the collected data for various purposes:</p>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3 mt-4">
               {[
                 "To provide and maintain our Service",
                 "To notify you about changes to our Service",
                 "To allow you to participate in interactive features",
                 "To provide customer support",
                 "To gather analysis to improve our Service",
                 "To monitor the usage of our Service",
                 "To detect, prevent and address technical issues",
                 "To provide you with news and special offers"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:">
                   <span className="mt-1.5 w-1.5 h-1.5 bg-[#2A74ED] rounded-full shrink-0"></span>
                   {item}
                 </li>
               ))}
            </ul>
          </section>

          {/* 4. Storage & Security */}
          <section id="security" className={sectionStyle}>
            <h2 className={h2Style}>Data Storage and Security</h2>
            <p className={pStyle}>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <div className="bg-blue-50/50 p-4 md:p-6 rounded-xl border border-blue-100 mt-4 md:mt-6">
               <h4 className="font-bold text-[#2A74ED] mb-2 text-xs md:text-sm uppercase tracking-wide">Security Measures</h4>
               <ul className="space-y-2 text-gray-700 font-medium text-sm md:">
                 <li className="flex items-center gap-2"><Lock size={16} className="text-[#2A74ED]"/> SSL/TLS Encryption in transit</li>
                 <li className="flex items-center gap-2"><Lock size={16} className="text-[#2A74ED]"/> Secure database encryption at rest</li>
                 <li className="flex items-center gap-2"><Lock size={16} className="text-[#2A74ED]"/> Regular security audits and backups</li>
               </ul>
            </div>
          </section>

          {/* 5. Sharing */}
          <section id="sharing" className={sectionStyle}>
            <h2 className={h2Style}>Data Sharing and Disclosure</h2>
            <p className={pStyle}>
               We do not sell your personal data. We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used.
            </p>
            <p className={pStyle}>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h3 className={h3Style}>Legal Requirements</h3>
            <p className={pStyle}>
              We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Things at Web Sweden AB, or protect against legal liability.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section id="rights" className={sectionStyle}>
            <h2 className={h2Style}>Your Data Protection Rights</h2>
            <p className={pStyle}>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              {[
                "The right to access, update or to delete information.",
                "The right of rectification.",
                "The right to object.",
                "The right of restriction.",
                "The right to data portability.",
                "The right to withdraw consent."
              ].map((right, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-1 text-[#2A74ED]"><ArrowRight size={16}/></div>
                  <span className="text-gray-700 font-medium text-sm md:">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Cookies */}
          <section id="cookies" className={sectionStyle}>
            <h2 className={h2Style}>Cookies and Tracking</h2>
            <p className={pStyle}>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            </p>
            <ul className={listStyle}>
              <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
              <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences.</li>
              <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
            </ul>
            <p className="text-xs md:text-sm text-gray-500 mt-4 italic">
              You can instruct your browser to refuse all cookies. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          {/* 8. Compliance */}
          <section id="compliance" className={sectionStyle}>
             <h2 className={h2Style}>Compliance & International Transfers</h2>
             <p className={pStyle}>
               If you are located outside Sweden and choose to provide information to us, please note that we transfer the data, including Personal Data, to Sweden and process it there.
             </p>
             <div className="bg-gray-50 p-4 md:p-5 rounded-lg border-l-4 border-[#2A74ED] mt-4">
                <h3 className="font-bold text-[#1A1A1A] text-xs md:text-sm uppercase mb-2">GDPR & CCPA</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  We are committed to complying with the General Data Protection Regulation (GDPR) for EU users and the California Consumer Privacy Act (CCPA) for California residents.
                </p>
             </div>
          </section>

          {/* 9. Contact */}
          <section id="contact" className="mb-10 md:mb-16 scroll-mt-28 md:scroll-mt-32">
            <h2 className={h2Style}>Contact Us</h2>
            <p className={pStyle}>
              If you have any questions about this Privacy Policy, please contact us:
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