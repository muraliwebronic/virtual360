"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  Scale, FileCheck, CreditCard, ShieldAlert, 
  Hammer, Globe, AlertCircle, Mail, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const legalSections = [
  { id: 'acceptance', title: 'Acceptance', icon: <FileCheck size={18} /> },
  { id: 'billing', title: 'Billing & Plans', icon: <CreditCard size={18} /> },
  { id: 'content', title: 'Content Rights', icon: <ShieldAlert size={18} /> },
  { id: 'usage', title: 'Restrictions', icon: <Hammer size={18} /> },
  { id: 'liability', title: 'Liability', icon: <AlertCircle size={18} /> },
  { id: 'disputes', title: 'Dispute Resolution', icon: <Scale size={18} /> },
  { id: 'contact', title: 'Contact', icon: <Mail size={18} /> },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    legalSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      {/* --- 1. HERO SECTION --- */}
      <header className="pt-32 pb-16 bg-base shadow-inner border-b border-gray-100">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Terms &"
            highlight="Conditions"
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
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4 mb-4">Legal Framework</p>
            {legalSections.map((section) => (
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

        {/* --- 3. TERMS CONTENT --- */}
        <div className="col-span-1 lg:col-span-9 space-y-20 pb-24 text-gray-600 leading-relaxed">
          
          <section id="acceptance" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">1. Acceptance & Description</h2>
            <div className="space-y-4">
              <p>These Terms govern your use of <strong>Virtual Tour 360</strong> services provided by Things at Web Sweden AB. By using our platform, you agree to be bound by these Terms.</p>
              <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 mt-6">
                <h4 className="font-bold text-[#1A1A1A] mb-3">Service Scope:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li>• Web-based tour editor</li>
                  <li>• WordPress plugin</li>
                  <li>• Spatial export capabilities</li>
                  <li>• Hosting & content delivery</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="billing" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">2. Subscription & Billing</h2>
            <p className="mb-6">Subscriptions are billed monthly or annually via <strong>Razorpay</strong>. Subscriptions renew automatically unless cancelled before the renewal date.</p>
            <div className="grid md:grid-cols-3 gap-4">
               {[
                 { label: "Refunds", val: "No mid-term refunds" },
                 { label: "Trials", val: "14-day Standard / 7-day Pro" },
                 { label: "Changes", val: "30-day notice for price updates" }
               ].map((item, i) => (
                 <div key={i} className="p-4 bg-base border border-gray-100 rounded-2xl text-center">
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-[#1A1A1A]">{item.val}</p>
                 </div>
               ))}
            </div>
          </section>

          <section id="content" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">3. Content Ownership & Responsibility</h2>
            <p className="mb-4">You retain ownership of all content you upload (360 images, text, etc.). You grant us a license to host and process your content to provide services.</p>
            <div className="p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100">
               <h4 className="font-bold text-[#2A74ED] mb-3">Prohibited Content Includes:</h4>
               <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span>•</span> IP violations & malware</li>
                  <li className="flex gap-2"><span>•</span> Illegal, defamatory, or hateful depictions</li>
                  <li className="flex gap-2"><span>•</span> Infringement on privacy or third-party rights</li>
               </ul>
            </div>
          </section>

          <section id="liability" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">4. Limitation of Liability</h2>
            <p className="italic text-sm mb-4">Services are provided "as is" and "as available" without warranties of any kind.</p>
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem]">
               <h3 className="font-bold text-[#1A1A1A] mb-2 uppercase text-xs tracking-widest">Maximum Liability</h3>
               <p className="text-lg font-semibold text-[#1A1A1A]">Our total liability is limited to the amount you paid in the 12 months preceding the claim.</p>
            </div>
          </section>

          <section id="disputes" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">5. Dispute Resolution</h2>
            <p className="mb-4">These Terms are governed by the laws of <strong>Sweden</strong>. Disputes shall be resolved through binding arbitration in <strong>Lidköping, Sweden</strong>.</p>
            <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100 text-sm font-medium">
               <AlertCircle size={20} />
               <span>You agree to pursue claims individually, not as part of class actions.</span>
            </div>
          </section>

          <section id="contact" className="scroll-mt-32">
            <div className="p-10 bg-base border border-gray-100 rounded-[2.5rem]">
               <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Contact Legal Department</h2>
               <div className="space-y-2 text-sm">
                  <p><strong>Things at Web Sweden AB</strong></p>
                  <p>Sockerbruksgatan 7, 531 40 Lidköping, Sweden</p>
                  <p>Email: legal@thingsatweb.com</p>
                  <p>Phone: +46 70 777 07 27</p>
               </div>
            </div>
          </section>

        </div>
      </div>

      {/* --- 4. FINAL CTA --- */}
      <section className="py-24 bg-base shadow-inner border-t border-gray-100 text-center">
        <div className="container max-w-4xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Ready to Start?</h2>
           <p className="text-gray-500 mb-10">By creating an account, you agree to the terms outlined above.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/pricing" className="px-10 py-5 bg-[#2A74ED] text-white rounded-[2rem] font-bold hover:bg-[#1a5fc7] shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
                Accept & Start Trial <ArrowRight size={20} />
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
}