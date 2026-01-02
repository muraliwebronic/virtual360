"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  ShieldCheck, Lock, Eye, Share2, 
  UserCheck, Globe, Cookie, Mail, 
  FileText, Server, AlertTriangle, Layers
} from "lucide-react";

const sections = [
  { id: 'intro', title: 'Introduction', icon: <FileText size={18} /> },
  { id: 'collection', title: 'Information We Collect', icon: <Eye size={18} /> },
  { id: 'use', title: 'How We Use Info', icon: <UserCheck size={18} /> },
  { id: 'security', title: 'Storage & Security', icon: <Lock size={18} /> },
  { id: 'sharing', title: 'Sharing & Disclosure', icon: <Share2 size={18} /> },
  { id: 'rights', title: 'Your Rights', icon: <Globe size={18} /> },
  { id: 'cookies', title: 'Cookies & Tracking', icon: <Cookie size={18} /> },
  { id: 'compliance', title: 'GDPR & CCPA', icon: <ShieldCheck size={18} /> },
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

  return (
    <main className="min-h-screen bg-white font-['Poppins']">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="pt-32 pb-12 border-b border-gray-100">
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

        {/* --- 3. POLICY CONTENT --- */}
        <div className="col-span-1 lg:col-span-9 text-gray-600 leading-relaxed">
          
          {/* Introduction */}
          <section id="intro" className="mb-16 scroll-mt-32">
             <p className="text-lg text-gray-700">
              Things at Web Sweden AB (“we,” “our,” or “us”) operates <strong>Virtual Tour 360</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section id="collection" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              Information We Collect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-blue-600">Personal Information</h3>
                <p className="mb-3 text-sm">When you register for Virtual Tour 360, we collect:</p>
                <ul className="space-y-2 text-sm">
                  {["Name and email address", "Company name (optional)", "Billing address", "Payment information (processed by Razorpay, not stored on our servers)", "Phone number (optional)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-blue-600">Usage Information</h3>
                <p className="mb-3 text-sm">We automatically collect:</p>
                <ul className="space-y-2 text-sm">
                  {["IP address and geographic location", "Browser type and version", "Device information", "Pages visited and features used", "Time and date of visits", "Referring website", "Tour creation and viewing statistics"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide text-blue-600">Content You Upload</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  {["360 degree images", "Tour names and descriptions", "Hotspot content (text and images)", "Custom styling settings"].map((item, i) => (
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

          {/* How We Use Your Information */}
          <section id="use" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Provide and maintain our services",
                "Process your subscriptions and payments",
                "Send service related communications",
                "Provide customer support",
                "Improve our products and services",
                "Send marketing communications (with your consent)",
                "Comply with legal obligations",
                "Prevent fraud and abuse"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Data Storage and Security */}
          <section id="security" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Storage and Security</h2>
            <div className="pl-6 border-l-2 border-blue-100">
              <p className="mb-6">
                Your data is stored on secure servers provided by industry leading hosting services. We implement:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-6 text-sm font-medium text-gray-800">
                 {["Encryption in transit (SSL/TLS)", "Encryption at rest for sensitive data", "Regular security audits", "Access controls and authentication", "Backup and disaster recovery systems"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <ShieldCheck size={16} className="text-[#2A74ED]" /> {item}
                    </li>
                 ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                We retain your data for as long as your account is active or as needed to provide services. Backup copies may persist up to 90 days after deletion.
              </p>
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Data Sharing and Disclosure */}
          <section id="sharing" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
            <p className="mb-6 font-medium text-gray-900">We do not sell your personal information. We share data only in these circumstances:</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Service Providers</h4>
                <div className="flex flex-wrap gap-2">
                  {["Payment processing (Razorpay)", "Hosting services", "Email services", "Analytics (Google Analytics)", "Customer support tools"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 text-sm">Legal Requirements</h4>
                   <p className="text-sm">We may disclose information if required by law, court order, or government request.</p>
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 mb-2 text-sm">Business Transfers</h4>
                   <p className="text-sm">In the event of merger, acquisition, or sale, your information may be transferred to the new owner.</p>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Your Rights */}
          <section id="rights" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights including:</p>
            <ul className="space-y-3 mb-6">
               {["Access your personal information", "Correct inaccurate information", "Delete your information (right to be forgotten)", "Export your data (data portability)", "Opt out of marketing communications", "Withdraw consent"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    {item}
                 </li>
               ))}
            </ul>
            <p className="text-sm font-medium">
               To exercise these rights, contact <a href="mailto:legal@thingsatweb.com" className="text-[#2A74ED] hover:underline">legal@thingsatweb.com</a>.
            </p>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Cookies, Third Party, Children */}
          <section id="cookies" className="mb-16 scroll-mt-32">
             <div className="grid md:grid-cols-2 gap-10">
                <div>
                   <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                   <p className="text-sm mb-3">We use cookies and similar technologies for:</p>
                   <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Authentication and security</li>
                      <li>• User preferences</li>
                      <li>• Analytics and performance monitoring</li>
                      <li>• Marketing and advertising</li>
                   </ul>
                   <p className="text-xs text-gray-500">You can control cookies through your browser settings. Blocking cookies may limit functionality.</p>
                </div>
                <div className="space-y-8">
                   <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Third Party Links</h2>
                      <p className="text-sm">Our services may contain links to third party websites. We are not responsible for the privacy practices of these external sites.</p>
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4">Children’s Privacy</h2>
                      <p className="text-sm">Virtual Tour 360 is not intended for users under 16 years old. We do not knowingly collect information from children.</p>
                   </div>
                </div>
             </div>
             <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Compliance & International */}
          <section id="compliance" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Compliance & International</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2"><Globe size={16} className="text-blue-500"/> GDPR Compliance (EU Users)</h3>
                <p className="text-sm mb-2 text-gray-600">If you are located in the European Economic Area, we comply with GDPR requirements:</p>
                <ul className="space-y-2 text-sm">
                   <li>• Legal basis: Contract performance, legitimate interests, consent</li>
                   <li>• Data protection officer: legal@thingsatweb.com</li>
                   <li>• Right to lodge complaints with supervisory authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2"><Layers size={16} className="text-blue-500"/> CCPA Compliance (California)</h3>
                <p className="text-sm mb-2 text-gray-600">California residents have additional rights under CCPA:</p>
                <ul className="space-y-2 text-sm">
                   <li>• Right to know what personal information is collected</li>
                   <li>• Right to deletion</li>
                   <li>• Right to opt out of sale (we do not sell personal information)</li>
                   <li>• Right to non discrimination</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-none border-l-4 border-blue-200">
               <h3 className="font-bold text-gray-900 mb-2 text-sm">International Data Transfers</h3>
               <p className="text-sm text-gray-600">We are based in Sweden. If you access our services from outside Sweden, your data may be transferred internationally. We ensure adequate safeguards for such transfers.</p>
            </div>
            
            <div className="mt-8">
               <h3 className="font-bold text-gray-900 mb-2 text-sm">Changes to This Policy</h3>
               <p className="text-sm text-gray-600">We may update this Privacy Policy periodically. Changes are effective immediately upon posting. We will notify you of significant changes via email or prominent website notice.</p>
            </div>
            <div className="w-full h-px bg-gray-100 mt-12"></div>
          </section>

          {/* Contact Information */}
          <section id="contact" className="mb-16 scroll-mt-32">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
               <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Data Protection Officer</h4>
                  <p className="text-gray-900 text-sm font-semibold">Things at Web Sweden AB</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Sockerbruksgatan 7<br/>
                    531 40 Lidköping<br/>
                    Sweden
                  </p>
               </div>
               <div className="space-y-2">
                  <p className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} className="text-[#2A74ED]" /> 
                    <a href="mailto:legal@thingsatweb.com" className="hover:text-[#2A74ED] transition-colors">legal@thingsatweb.com</a>
                  </p>
                  <p className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-bold text-[#2A74ED]">Phone:</span> 
                    +46 70 777 07 27
                  </p>
               </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}