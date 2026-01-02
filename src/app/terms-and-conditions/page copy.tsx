'use client';

import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'intro', title: '1. Introduction' },
  { id: 'communications', title: '2. Communications' },
  { id: 'contests', title: '3. Contests & Promos' },
  { id: 'content', title: '4. Content' },
  { id: 'prohibited', title: '8. Prohibited Uses' }, // Kept numbering as provided
  { id: 'analytics', title: '6. Analytics' },
  { id: 'minors', title: '6. No Use By Minors' }, // Duplicate 6 as provided
  { id: 'ip', title: '7. Intellectual Property' },
  { id: 'dmca', title: '10. DMCA Notice' },
  { id: 'feedback', title: '11. Error Reporting' },
  { id: 'links', title: '12. Links to Sites' },
  { id: 'warranty', title: '13. Disclaimer' },
  { id: 'liability', title: '14. Limitation of Liability' },
  { id: 'termination', title: '15. Termination' },
  { id: 'governing', title: '16. Governing Law' },
  { id: 'changes', title: '17. Changes to Service' },
  { id: 'amendments', title: '21. Amendments' },
  { id: 'waiver', title: '22. Waiver' },
  { id: 'acknowledge', title: '23. Acknowledgement' },
  { id: 'contact', title: '24. Contact Us' },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('intro');

  // Smooth scroll active state observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, id:string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white pb-24">
      
      {/* --- Header --- */}
      <header className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-gray-100 bg-cream/30">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-sm tracking-widest uppercase text-gray-500 mb-4 animate-fade-up">
            Legal Documentation
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg font-sans">
            Last Updated: <span className="text-foreground font-medium">June 14, 2021</span>
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* --- Sidebar Navigation (Desktop) --- */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar pr-4">
            <ul className="space-y-1 border-l border-gray-200">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`block py-2 pl-4 text-sm transition-all duration-300 border-l-2 -ml-[2px] ${
                      activeSection === section.id
                        ? 'border-primary text-primary font-medium'
                        : 'border-transparent text-gray-500 hover:text-foreground'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* --- Main Content --- */}
        <div className="col-span-1 lg:col-span-9 space-y-20">
          
          {/* 1. Introduction */}
          <section id="intro" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">1. Introduction</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Welcome to <strong>Thingsatweb Sweden AB</strong> (“Company”, “us”, “we”, or “our”)!
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <a href="https://thingsatweb.se" className="text-primary underline">https://thingsatweb.se/</a> (together or individually “Service”) operated by Thingsatweb Sweden AB.
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
            </p>
            <div className="bg-surface p-6 rounded-lg border-l-4 border-primary mt-6">
              <p className="text-sm text-gray-800 italic">
                If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <a href="mailto:support@virtualtour360.ai" className="font-bold">support@virtualtour360.ai</a> so we can try to find a solution.
              </p>
            </div>
          </section>

          {/* 2. Communications */}
          <section id="communications" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">2. Communications</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials, and other information we may send. However, you may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <a href="mailto:support@virtualtour360.ai" className="text-primary hover:underline">support@virtualtour360.ai</a>.
            </p>
          </section>

          {/* 3. Contests */}
          <section id="contests" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">3. Contests, Sweepstakes, and Promotions</h2>
            <p className="text-gray-700 leading-relaxed">
              Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
            </p>
          </section>

          {/* 4. Content */}
          <section id="content" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">4. Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Content found on or through this Service are the property of Thingsatweb Sweden AB or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
            </p>
          </section>

          {/* 8. Prohibited Uses */}
          <section id="prohibited" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">8. Prohibited Uses</h2>
            <p className="mb-4 text-gray-700">You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
            
            <div className="bg-surface p-8 rounded-xl space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-4 text-gray-900">General Prohibitions</h3>
                <ul className="space-y-3 text-sm text-gray-700 list-disc pl-4">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.</li>
                  <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                  <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service.</li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-serif text-xl mb-4 text-gray-900">Technical Prohibitions</h3>
                <ul className="space-y-3 text-sm text-gray-700 list-disc pl-4">
                  <li>Use Service in any manner that could disable, overburden, damage, or impair Service.</li>
                  <li>Use any robot, spider, or another automatic device, process, or means to access Service for any purpose.</li>
                  <li>Use any manual process to monitor or copy any of the material on Service without our prior written consent.</li>
                  <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
                  <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service.</li>
                  <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Analytics & Minors */}
          <div className="grid md:grid-cols-2 gap-8">
            <section id="analytics" className="scroll-mt-32 bg-cream p-8 rounded-xl border border-beige-muted">
              <h2 className="font-serif text-2xl mb-4">6. Analytics</h2>
              <p className="text-gray-700 text-sm">
                We may use third-party Service Providers to monitor and analyze the use of our Service.
              </p>
            </section>

            <section id="minors" className="scroll-mt-32 bg-cream p-8 rounded-xl border border-beige-muted">
              <h2 className="font-serif text-2xl mb-4">6. No Use By Minors</h2>
              <p className="text-gray-700 text-sm">
                Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant that you are at least 18 years of age.
              </p>
            </section>
          </div>

          {/* 7. Intellectual Property */}
          <section id="ip" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-8">
              Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Thingsatweb Sweden AB and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries.
            </p>
            
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-xl font-bold mb-3">Copyright Policy</h3>
              <p className="text-gray-600 text-sm mb-4">
                We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.
              </p>
              <p className="text-gray-600 text-sm">
                Submit claims via email to <a href="mailto:support@virtualtour360.ai" className="text-primary underline">support@virtualtour360.ai</a> with the subject line: “Copyright Infringement”.
              </p>
            </div>
          </section>

          {/* 10. DMCA */}
          <section id="dmca" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">10. DMCA Notice</h2>
            <div className="bg-surface p-8 rounded-xl">
              <p className="mb-4 text-sm text-gray-700">You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing:</p>
              <ul className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                <li>Electronic or physical signature of the authorized person.</li>
                <li>Description of the copyrighted work claimed to have been infringed.</li>
                <li>Identification of the URL where the infringing material is located.</li>
                <li>Your address, telephone number, and email address.</li>
                <li>A statement of good faith belief that the use is not authorized.</li>
                <li>A statement made under penalty of perjury that the information is accurate.</li>
              </ul>
              <p className="mt-6 text-sm font-bold">Contact Copyright Agent: <a href="mailto:support@virtualtour360.ai" className="text-primary">support@virtualtour360.ai</a></p>
            </div>
          </section>

          {/* 11. Error Reporting */}
          <section id="feedback" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">11. Error Reporting and Feedback</h2>
            <p className="text-gray-700 mb-4">
              You may provide us with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”).
            </p>
            <p className="text-sm text-gray-500 italic">
              By submitting Feedback, you grant Company an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited, and perpetual right to use said Feedback in any manner.
            </p>
          </section>

          {/* 12. Links */}
          <section id="links" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">12. Links To Other Web Sites</h2>
            <p className="text-gray-700 mb-4">
              Our Service may contain links to third-party websites or services that are not owned or controlled by Thingsatweb Sweden AB. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.
            </p>
            <p className="font-bold text-gray-900">We strongly advise you to read the terms of service and privacy policies of any third-party websites or services that you visit.</p>
          </section>

          {/* 13 & 14 Disclaimers - Grouped for Visual Impact */}
          <div className="bg-cream/50 border border-beige-deep p-8 md:p-12 rounded-xl space-y-12">
            <section id="warranty">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-gray-900">13. Disclaimer Of Warranty</h2>
              <div className="text-sm text-gray-600 space-y-4 uppercase tracking-wide leading-relaxed">
                <p>THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN.</p>
                <p>NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.</p>
              </div>
            </section>

            <section id="liability" className="pt-8 border-t border-gray-200">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-gray-900">14. Limitation Of Liability</h2>
              <div className="text-sm text-gray-600 space-y-4 uppercase tracking-wide leading-relaxed">
                <p>EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE.</p>
                <p>IF THERE IS LIABILITY FOUND ON THE PART OF THE COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.</p>
              </div>
            </section>
          </div>

          {/* 15, 16, 17, 21, 22 Group */}
          <div className="space-y-12">
            <section id="termination" className="scroll-mt-32">
              <h2 className="font-serif text-2xl mb-4">15. Termination</h2>
              <p className="text-gray-700">We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.</p>
            </section>

            <section id="governing" className="scroll-mt-32">
              <h2 className="font-serif text-2xl mb-4">16. Governing Law</h2>
              <p className="text-gray-700">These Terms shall be governed and construed in accordance with the laws of <strong>Sweden</strong>, which governing law applies to an agreement without regard to its conflict of law provisions.</p>
            </section>

            <section id="changes" className="scroll-mt-32">
              <h2 className="font-serif text-2xl mb-4">17. Changes To Service</h2>
              <p className="text-gray-700">We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice.</p>
            </section>

            <section id="amendments" className="scroll-mt-32">
              <h2 className="font-serif text-2xl mb-4">21. Amendments To Terms</h2>
              <p className="text-gray-700">We may amend Terms at any time by posting the amended terms on this site. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.</p>
            </section>

             <section id="waiver" className="scroll-mt-32">
              <h2 className="font-serif text-2xl mb-4">22. Waiver And Severability</h2>
              <p className="text-gray-700">No waiver by Company of any term or condition shall be deemed a further or continuing waiver. If any provision of Terms is held to be invalid, such provision shall be eliminated or limited to the minimum extent.</p>
            </section>
          </div>

          {/* 23. Acknowledgement */}
          <section id="acknowledge" className="scroll-mt-32 bg-surface p-8 rounded-xl text-center">
            <h2 className="font-serif text-2xl mb-4">23. Acknowledgement</h2>
            <p className="text-gray-800 font-medium">By using service or other services provided by us, you acknowledge that you have read these terms of service and agree to be bound by them.</p>
          </section>

          {/* 24. Contact */}
          <section id="contact" className="scroll-mt-32 mb-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">24. Contact Us</h2>
            <div className="bg-primary text-white p-10 rounded-xl shadow-lg">
                <p className="mb-6 text-lg">Please send your feedback, comments, and requests for technical support by email:</p>
                <a href="mailto:support@virtualtour360.ai" className="font-serif text-3xl md:text-4xl hover:text-green-200 transition-colors">support@virtualtour360.ai</a>
            </div>
          </section>

          <footer className="text-center text-gray-400 text-sm pt-12 border-t border-gray-100">
            <p>Thingsatweb Sweden AB</p>
            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </footer>

        </div>
      </div>
    </main>
  );
}