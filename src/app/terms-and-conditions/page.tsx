"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  FileCheck, Server, UserCheck, CreditCard, 
  Image, Ban, Copyright, Activity, 
  AlertTriangle, Scale, Mail, ShieldAlert
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

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="pt-32 pb-12 border-b border-gray-100">
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
          <nav className="sticky top-32 space-y-1 border-l border-gray-100">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-3 border-l-2 -ml-[1px] ${
                  activeSection === section.id 
                  ? "border-[#2A74ED] text-[#2A74ED] bg-blue-50/50" 
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* --- 3. TERMS CONTENT --- */}
        <div className="col-span-1 lg:col-span-9 text-gray-600 leading-relaxed">
          
          {/* Introduction */}
          <section id="acceptance" className="mb-16 scroll-mt-32">
             <p className="text-lg text-gray-700 mb-8">
              These Terms and Conditions (“Terms”) govern your use of Virtual Tour 360 services provided by Things at Web Sweden AB (“Company,” “we,” “our,” or “us”).
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <p className="mb-8 text-sm">
              By accessing or using Virtual Tour 360, you agree to be bound by these Terms. If you do not agree, do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">Service Description</h2>
            <p className="mb-4 text-sm">
              Virtual Tour 360 provides a software as a service (SaaS) platform for creating, hosting, and embedding 360 degree virtual tours. Services include:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
               {["Web based tour editor", "WordPress plugin for embedding", "Hosting and content delivery", "Spatial export capabilities", "Customer support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Server size={16} className="text-[#2A74ED]" /> {item}
                  </li>
               ))}
            </ul>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Account Registration */}
          <section id="account" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Registration</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide text-blue-600">Eligibility</h3>
                <p className="text-sm">You must be at least 18 years old and capable of forming binding contracts.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide text-blue-600">Account Responsibility</h3>
                <p className="mb-2 text-sm">You are responsible for:</p>
                <ul className="space-y-2 text-sm">
                   {["Maintaining account security", "All activities under your account", "Keeping login credentials confidential", "Notifying us of unauthorized access"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        {item}
                      </li>
                   ))}
                </ul>
              </div>
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Billing */}
          <section id="billing" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Subscription Plans and Billing</h2>
            
            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Plans & Free Trials</h4>
                  <p className="text-sm mb-2">We offer Standard and Pro subscription plans. New users receive trial periods (14 days Standard, 7 days Pro) with full feature access.</p>
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Billing Cycles & Auto-Renewal</h4>
                  <p className="text-sm mb-2">Subscriptions are billed monthly or annually via <strong>Razorpay</strong>. Subscriptions renew automatically unless cancelled before the renewal date.</p>
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Price Changes</h4>
                  <p className="text-sm mb-2">We may change subscription prices with 30 days notice. Price changes affect renewals but not current subscription periods.</p>
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Refunds & Failed Payments</h4>
                  <p className="text-sm mb-2">Subscriptions cannot be refunded mid term. If payment fails, we retry up to 3 times over 10 days before suspension.</p>
               </div>
               <div className="md:col-span-2">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Cancellation</h4>
                  <p className="text-sm mb-2">You may cancel anytime. Monthly subscriptions end at the next billing date. Annual subscriptions remain active until the end of the paid term.</p>
               </div>
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Content Rights */}
          <section id="content" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Content and Usage Rights</h2>
            
            <div className="pl-6 border-l-2 border-blue-100 mb-8">
               <h3 className="font-bold text-gray-900 mb-2 text-sm">Your Content</h3>
               <p className="text-sm">You retain ownership of all content you upload (360 images, text, etc.). You grant us a license to host, process, and deliver your content as necessary to provide services.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
               <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-blue-600">Content Responsibility</h3>
                  <p className="text-sm mb-3">You are solely responsible for:</p>
                  <ul className="space-y-2 text-sm">
                     {["Ensuring you have rights to uploaded content", "Compliance with applicable laws", "Accuracy of information in your tours", "Obtaining necessary permissions and releases"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                          {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-red-500">Prohibited Content</h3>
                  <p className="text-sm mb-3">You may not upload content that:</p>
                  <ul className="space-y-2 text-sm">
                     {["Violates intellectual property rights", "Contains malware or malicious code", "Depicts illegal activities", "Is defamatory, obscene, or hateful", "Violates privacy rights of others"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 italic">We reserve the right to remove content that violates these Terms or applicable laws.</p>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Restrictions & Plan Limits */}
          <section id="restrictions" className="mb-16 scroll-mt-32">
             <div className="grid md:grid-cols-2 gap-10">
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Restrictions</h2>
                   <p className="text-sm mb-3">You agree not to:</p>
                   <ul className="space-y-2 text-sm">
                      {["Reverse engineer or decompile software", "Resell or redistribute without authorization", "Use services for illegal purposes", "Attempt to gain unauthorized access", "Interfere with service operation", "Scrape or harvest data", "Upload excessive content to disrupt services", "Share account access"].map((item, i) => (
                         <li key={i} className="flex items-center gap-2">
                           <Ban size={14} className="text-gray-400" /> {item}
                         </li>
                      ))}
                   </ul>
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Limits</h2>
                   <p className="text-sm text-gray-700 leading-relaxed">
                     Your subscription plan includes limits on tours, scenes, hotspots, and sites. Exceeding limits requires upgrading to a higher plan.
                   </p>
                </div>
             </div>
             <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Intellectual Property & Service Availability */}
          <section id="ip" className="mb-16 scroll-mt-32">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
             <p className="text-sm mb-6">
               Virtual Tour 360 software, website, documentation, and branding are owned by Things at Web Sweden AB and protected by copyright, trademark, and other intellectual property laws.
             </p>
             <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-gray-50 p-6 rounded-none border-l-4 border-blue-200">
                   <h4 className="font-bold text-gray-900 mb-2">License Grant</h4>
                   <p>We grant you a limited, non exclusive, non transferable license to use our services according to these Terms.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-none border-l-4 border-gray-300">
                   <h4 className="font-bold text-gray-900 mb-2">Feedback</h4>
                   <p>Any feedback, suggestions, or ideas you provide become our property and may be used without compensation.</p>
                </div>
             </div>

             <div className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><Activity size={18} className="text-[#2A74ED]"/> Service Availability</h2>
                <ul className="space-y-3 text-sm">
                   <li><strong>Uptime:</strong> We strive for 99.9% uptime but do not guarantee uninterrupted service.</li>
                   <li><strong>Support:</strong> Provided via email and documentation. Response times vary by plan.</li>
                   <li><strong>Modifications:</strong> We may modify, suspend, or discontinue features with or without notice.</li>
                </ul>
             </div>
             <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Liability, Disclaimers, Indemnification */}
          <section id="liability" className="mb-16 scroll-mt-32">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers & Limitation of Liability</h2>
             
             <div className="mb-8">
                <h4 className="font-bold text-gray-900 text-sm uppercase mb-2">"As Is" Basis</h4>
                <p className="text-sm text-gray-600 mb-4">Services are provided "as is" and "as available" without warranties of any kind (Merchantability, Fitness, Non-infringement, Accuracy).</p>
             </div>

             <div className="pl-6 border-l-4 border-red-200 py-2 mb-8 bg-red-50/30">
                <h3 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-1">Maximum Liability</h3>
                <p className="text-base font-medium text-gray-800">Our total liability is limited to the amount you paid in the 12 months preceding the claim.</p>
             </div>

             <p className="text-sm mb-4"><strong>Excluded Damages:</strong> We are not liable for indirect, incidental, consequential, special, or punitive damages (Lost profits, data, business interruption).</p>
             
             <p className="text-sm"><strong>Indemnification:</strong> You agree to indemnify Things at Web Sweden AB from claims arising from your use of services, content, or violation of Terms.</p>
             
             <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Termination & Disputes */}
          <section id="disputes" className="mb-16 scroll-mt-32">
             <div className="grid md:grid-cols-2 gap-10">
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                   <ul className="space-y-3 text-sm">
                      <li className="flex gap-2"><span className="font-bold text-gray-900">By You:</span> Contact support anytime.</li>
                      <li className="flex gap-2"><span className="font-bold text-gray-900">By Us:</span> For violation of terms, fraud, abuse, or non-payment.</li>
                      <li className="block pt-2 text-gray-500 italic">Upon termination, access ends immediately and data may be deleted after 30 days.</li>
                   </ul>
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
                   <ul className="space-y-3 text-sm">
                      <li className="flex gap-2"><span className="font-bold text-gray-900">Governing Law:</span> Laws of Sweden.</li>
                      <li className="flex gap-2"><span className="font-bold text-gray-900">Arbitration:</span> Binding arbitration in Lidköping, Sweden.</li>
                      <li className="flex gap-2"><span className="font-bold text-gray-900">Class Action Waiver:</span> You agree to pursue claims individually.</li>
                   </ul>
                </div>
             </div>

             <div className="mt-10 bg-gray-50 p-6">
                <h4 className="font-bold text-gray-900 text-sm mb-2">General Provisions</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  These Terms constitute the entire agreement. If any provision is unenforceable, others remain in effect. You may not assign these Terms; we may. Failure to enforce does not constitute a waiver. We are not liable for force majeure events.
                </p>
             </div>
             <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Changes & Contact */}
          <section id="contact" className="mb-16 scroll-mt-32">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-sm mb-10">We may modify these Terms at any time. Changes are effective immediately upon posting. Continued use after changes constitutes acceptance.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Things at Web Sweden AB</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Sockerbruksgatan 7<br/>
                    531 40 Lidköping<br/>
                    Sweden
                  </p>
               </div>
               <div className="space-y-2">
                  <p className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} className="text-[#2A74ED]" /> 
                    <a href="mailto:support@virtualtour360.ai" className="hover:text-[#2A74ED] transition-colors">support@virtualtour360.ai</a>
                  </p>
      
               </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}