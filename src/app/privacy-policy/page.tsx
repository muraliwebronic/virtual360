"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  ShieldCheck, Lock, Eye, Share2, 
  UserCheck, Globe, Cookie, Mail, 
  CheckCircle2
} from "lucide-react";

const sections = [
  { id: 'intro', title: 'Introduction', icon: <ShieldCheck size={18} /> },
  { id: 'collection', title: 'Information We Collect', icon: <Eye size={18} /> },
  { id: 'usage', title: 'How We Use Information', icon: <UserCheck size={18} /> },
  { id: 'security', title: 'Storage & Security', icon: <Lock size={18} /> },
  { id: 'sharing', title: 'Data Sharing', icon: <Share2 size={18} /> },
  { id: 'rights', title: 'Your Rights', icon: <Globe size={18} /> },
  { id: 'cookies', title: 'Cookies & Tracking', icon: <Cookie size={18} /> },
  { id: 'contact', title: 'Contact Information', icon: <Mail size={18} /> },
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

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      {/* --- 1. HERO SECTION --- */}
      <header className="pt-32 pb-16 bg-base shadow-inner border-b border-gray-100">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Privacy"
            highlight="Policy"
            description="Effective Date: January 1, 2025 | Last Updated: January 1, 2025"
            size="large"
            gradient={true}
            className="text-left mb-0"
          />
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- 2. SIDEBAR NAVIGATION --- */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-32 space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-4">Legal Directory</p>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full text-left px-5 py-3.5 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeSection === section.id 
                  ? "bg-[#2A74ED] text-white shadow-lg shadow-blue-500/20 translate-x-1" 
                  : "bg-transparent text-gray-500 hover:bg-gray-50"
                }`}
              >
                {section.icon}
                <span className="text-sm">{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* --- 3. POLICY CONTENT --- */}
        <div className="col-span-1 lg:col-span-9 space-y-20 pb-24">
          
          <section id="intro" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Introduction</h2>
            <div className="prose prose-blue text-gray-600 leading-relaxed max-w-none">
              <p>
                Things at Web Sweden AB (“we,” “our,” or “us”) operates <strong>Virtual Tour 360</strong>. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </div>
          </section>

          <section id="collection" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <h3 className="font-bold text-[#1A1A1A] mb-4">Personal Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Name and email address</li>
                  <li>• Company name (optional)</li>
                  <li>• Billing address</li>
                  <li>• Payment info (processed by Razorpay)</li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <h3 className="font-bold text-[#1A1A1A] mb-4">Content You Upload</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 360 degree images</li>
                  <li>• Tour names and descriptions</li>
                  <li>• Hotspot content (text and images)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="usage" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">How We Use Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Provide and maintain services",
                "Process subscriptions",
                "Customer support",
                "Prevent fraud and abuse",
                "Comply with legal obligations",
                "Product improvements"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl">
                  <div className="w-2 h-2 rounded-full bg-[#2A74ED]" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

         <section id="security" className="scroll-mt-32">
  {/* Clean Light Card */}
  <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden">
    
    {/* Subtle Background Gradient (Top Right) */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10">
      {/* Header with Icon */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2A74ED]">
          <ShieldCheck size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
          Data Storage & Security
        </h2>
      </div>

      <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-2xl">
        Your data is stored on secure servers provided by industry leading hosting services, ensuring your information remains protected at all times.
      </p>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-500 shrink-0" />
            <span className="text-gray-700 font-medium">Encryption in transit (SSL/TLS)</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-500 shrink-0" />
            <span className="text-gray-700 font-medium">Encryption at rest for sensitive data</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-500 shrink-0" />
            <span className="text-gray-700 font-medium">Regular security audits</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-500 shrink-0" />
            <span className="text-gray-700 font-medium">Backup and recovery systems</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          <section id="rights" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-8">Depending on location, you may have rights to:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
               {["Access", "Correction", "Deletion", "Portability", "Opt-out", "Withdrawal"].map(right => (
                 <div key={right} className="p-6 bg-base rounded-3xl border border-gray-100">
                    <span className="font-bold text-[#1A1A1A]">{right}</span>
                 </div>
               ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <div className="p-10 bg-gray-50 border border-gray-100 rounded-[2.5rem]">
               <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Contact Information</h2>
               <div className="grid md:grid-cols-2 gap-10">
                 <div className="space-y-4">
                   <p className="font-bold text-[#1A1A1A]">Data Protection Officer</p>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Things at Web Sweden AB<br/>
                     Sockerbruksgatan 7<br/>
                     531 40 Lidköping, Sweden
                   </p>
                 </div>
                 <div className="space-y-4">
                   <p className="text-sm text-gray-600">
                     <strong>Email:</strong> legal@thingsatweb.com<br/>
                     <strong>Phone:</strong> +46 70 777 07 27
                   </p>
                 </div>
               </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}