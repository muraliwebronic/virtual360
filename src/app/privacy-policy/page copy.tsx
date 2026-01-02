'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'intro', title: '1. Introduction' },
  { id: 'services', title: '2. Services & Roles' },
  { id: 'collection', title: '3. Data Collection' },
  { id: 'methods', title: '4. Collection Methods' },
  { id: 'usage', title: '5. Data Usage' },
  { id: 'sharing', title: '6. Data Sharing' },
  { id: 'international', title: '7. International Transfers' },
  { id: 'security', title: '8. Data Security' },
  { id: 'retention', title: '9. Data Retention' },
  { id: 'rights', title: '10. Your Legal Rights' },
  { id: 'cookies', title: '11. Cookies' },
  { id: 'links', title: '12. Third-Party Links' },
  { id: 'children', title: '13. Children’s Privacy' },
  { id: 'changes', title: '14. Changes to Policy' },
  { id: 'contact', title: '15. Contact Info' },
  { id: 'glossary', title: '16. Glossary' },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro');

  // smooth scroll active state observer
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg font-sans">
            Last Updated: <span className="text-foreground font-medium">December 2, 2025</span>
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
            <p className="mb-6 leading-relaxed text-gray-700">
              Welcome to <strong>Thingsatweb Sweden AB’s</strong> Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our services and tell you about your privacy rights and how the law protects you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface p-8 rounded-xl">
                <h3 className="font-serif text-xl mb-4">1.1 Controller Information</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Thingsatweb Sweden AB is the controller and responsible for your personal data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Address:</strong> Sockerbruksgatan 7, 531 40 Lidköping, Sweden</li>
                  <li><strong>Email:</strong> <a href="mailto:support@virtualtour360.ai" className="text-primary hover:underline">support@virtualtour360.ai</a></li>
                  <li><strong>Website:</strong> <a href="https://www.thingsatweb.se" className="text-primary hover:underline">thingsatweb.se</a></li>
                </ul>
              </div>

              <div className="bg-cream p-8 rounded-xl">
                <h3 className="font-serif text-xl mb-4">1.2 Data Protection Officer</h3>
                <p className="text-sm text-gray-600 mb-4">
                   responsible for overseeing questions in relation to this privacy policy.
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Contact:</strong> Data Protection Officer</li>
                  <li><strong>Email:</strong> <a href="mailto:dpo@thingsatweb.se" className="text-primary hover:underline">dpo@thingsatweb.se</a></li>
                  <li><strong>Postal:</strong> DPO, Thingsatweb Sweden AB, Sockerbruksgatan 7, 531 40 Lidköping, Sweden</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <h3 className="text-lg font-bold mb-2">1.3 Changes to This Policy</h3>
               <p className="text-gray-600 text-sm">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the “Last Updated” date.</p>
            </div>
          </section>

          {/* 2. Services & Roles */}
          <section id="services" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">2. Our Services and Data Processing Roles</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">2.1 Services We Provide</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                {['Web Development & Design', 'Mobile App Development (iOS/Android)', 'IoT Solutions', 'Digital Marketing', 'Domain & Hosting Services', 'Cloud Infrastructure Management'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-8 rounded-xl">
               <h3 className="text-xl font-bold mb-4">2.2 Our Data Processing Roles</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-2">As Data Controller</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>For our own business operations</li>
                      <li>For direct client relationships</li>
                      <li>Recruitment and employment data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-primary mb-2">As Data Processor</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>Providing technology services to clients</li>
                      <li>Managing cloud infrastructure</li>
                      <li>Developing applications handling end-user data</li>
                    </ul>
                  </div>
               </div>
            </div>
          </section>

          {/* 3. Personal Data We Collect */}
          <section id="collection" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">3. Personal Data We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">3.1 Data We Collect as Controller</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Identity Data", desc: "Name, Company, Org number" },
                    { title: "Contact Data", desc: "Email, Phone, Address" },
                    { title: "Technical Data", desc: "IP, Browser, OS, Time zone" },
                    { title: "Usage Data", desc: "Pages visited, referral source" },
                    { title: "Marketing Data", desc: "Preferences for communication" },
                  ].map((item, i) => (
                    <li key={i} className="border border-gray-100 p-4 rounded-lg">
                      <span className="block font-bold text-sm text-gray-900">{item.title}</span>
                      <span className="block text-sm text-gray-500">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream/50 p-6 rounded-lg border border-beige-muted">
                <h3 className="text-xl font-bold mb-3">3.2 Data We Process as Processor</h3>
                <p className="text-sm text-gray-700 mb-3">When providing services to clients, we may process: End-user accounts, Transaction data, Analytics, and Location data.</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Important</p>
                <p className="text-sm italic">When we act as a processor, our clients (the data controllers) are responsible for informing their users about data collection. We process this data only according to our clients’ documented instructions.</p>
              </div>
            </div>
          </section>

          {/* 4. Collection Methods */}
          <section id="methods" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">4. How We Collect Data</h2>
            <div className="grid gap-6 md:grid-cols-3">
               <div className="p-6 bg-surface rounded-xl">
                 <h3 className="font-bold mb-2">4.1 Direct</h3>
                 <p className="text-sm text-gray-600">Forms, service requests, newsletters, emails, phone calls.</p>
               </div>
               <div className="p-6 bg-surface rounded-xl">
                 <h3 className="font-bold mb-2">4.2 Automated</h3>
                 <p className="text-sm text-gray-600">Cookies, server logs, analytics tools (Google Analytics).</p>
               </div>
               <div className="p-6 bg-surface rounded-xl">
                 <h3 className="font-bold mb-2">4.3 Third Parties</h3>
                 <p className="text-sm text-gray-600">Partners, analytics providers, public registries.</p>
               </div>
            </div>
          </section>

          {/* 5. How We Use Data */}
          <section id="usage" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">5. How We Use Your Data</h2>
            <p className="mb-4 text-gray-700">We rely on Contract Performance, Legal Obligation, Legitimate Interests, and Consent as our legal bases.</p>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface border-b border-gray-200">
                  <tr>
                    <th className="p-4 font-bold text-gray-900">Purpose</th>
                    <th className="p-4 font-bold text-gray-900">Data Categories</th>
                    <th className="p-4 font-bold text-gray-900">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4">Service delivery</td>
                    <td className="p-4 text-gray-600">Identity, Contact, Technical</td>
                    <td className="p-4 text-primary">Contract Performance</td>
                  </tr>
                  <tr>
                    <td className="p-4">Customer support</td>
                    <td className="p-4 text-gray-600">Identity, Contact</td>
                    <td className="p-4 text-primary">Contract, Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="p-4">Marketing</td>
                    <td className="p-4 text-gray-600">Contact, Marketing</td>
                    <td className="p-4 text-primary">Consent, Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="p-4">Analytics & Security</td>
                    <td className="p-4 text-gray-600">Technical, Usage</td>
                    <td className="p-4 text-primary">Legitimate Interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Who We Share With */}
          <section id="sharing" className="scroll-mt-32">
             <h2 className="font-serif text-3xl md:text-4xl mb-6">6. Who We Share Data With</h2>
             
             <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">6.1 Service Providers (Processors)</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {[
                        { name: "AWS", loc: "Stockholm", role: "Cloud Hosting", safe: "ISO 27001, AWS DPA" },
                        { name: "Google Cloud", loc: "Finland", role: "Backup/Recovery", safe: "ISO 27001, DPA" },
                        { name: "Google Analytics", loc: "USA (EU Processing)", role: "Analytics", safe: "IP Anonymization" },
                        { name: "Email Providers", loc: "EU/EEA", role: "Communication", safe: "GDPR Compliance" },
                    ].map((provider, i) => (
                        <div key={i} className="bg-surface p-5 rounded-lg">
                            <h4 className="font-bold">{provider.name}</h4>
                            <p className="text-xs text-gray-500 mb-2">{provider.loc}</p>
                            <div className="flex justify-between text-sm mt-2">
                                <span>{provider.role}</span>
                                <span className="text-primary">{provider.safe}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
             
             <p className="text-sm text-gray-600 italic">
                All processors sign DPAs ensuring they process data only on instructions, implement security, and assist with GDPR.
             </p>
          </section>

          {/* 7. International Transfers */}
          <section id="international" className="scroll-mt-32">
             <h2 className="font-serif text-3xl md:text-4xl mb-6">7. International Data Transfers</h2>
             <div className="bg-cream p-8 rounded-xl border border-beige-deep">
                <div className="mb-6">
                    <h3 className="font-bold mb-2">7.1 Primary Location (EEA)</h3>
                    <ul className="text-sm space-y-2">
                        <li><strong>Primary:</strong> AWS eu-north-1 (Stockholm, Sweden)</li>
                        <li><strong>Backup:</strong> Google Cloud europe-north1 (Hamina, Finland)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">7.2 Transfers Outside EEA</h3>
                    <p className="text-sm text-gray-700 mb-2">We ensure safeguards via SCCs, EU-US Data Privacy Framework, or Adequacy Decisions. You can request copies of our safeguards by contacting <a href="mailto:dpo@thingsatweb.se" className="text-primary underline">dpo@thingsatweb.se</a>.</p>
                </div>
             </div>
          </section>

          {/* 8. Data Security */}
          <section id="security" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">8. Data Security</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-3 border-b border-gray-200 pb-2">Technical Measures</h3>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
                        <li>Encryption in transit (TLS 1.3) & at rest (AES-256)</li>
                        <li>Multi-factor authentication</li>
                        <li>Regular security audits</li>
                        <li>Firewalls & intrusion detection</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-3 border-b border-gray-200 pb-2">Organizational Measures</h3>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
                        <li>Access on need-to-know basis</li>
                        <li>Employee confidentiality agreements</li>
                        <li>Regular data protection training</li>
                        <li>Incident response procedures</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 bg-surface p-4 rounded-lg text-sm">
                <strong>Breach Response:</strong> We notify Integritetsskyddsmyndigheten within 72 hours of a breach and affected individuals if high risk exists.
            </div>
          </section>

          {/* 9. Retention */}
          <section id="retention" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">9. Data Retention</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    { l: "Client Data", r: "Relationship + 3 years" },
                    { l: "Financial", r: "7 years (Accounting Act)" },
                    { l: "Marketing", r: "Until withdrawn" },
                    { l: "Analytics", r: "14 months" },
                    { l: "Support Logs", r: "3 years" },
                ].map((item, i) => (
                    <div key={i} className="p-4 border border-gray-200 rounded-lg text-center">
                        <span className="block text-xs uppercase text-gray-500">{item.l}</span>
                        <span className="block font-bold text-primary">{item.r}</span>
                    </div>
                ))}
            </div>
          </section>

          {/* 10. Your Legal Rights */}
          <section id="rights" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">10. Your Legal Rights (GDPR)</h2>
            <div className="space-y-6">
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                    {[
                        "Right to Access (Article 15)",
                        "Right to Rectification (Article 16)",
                        "Right to Erasure (Article 17)",
                        "Right to Restriction (Article 18)",
                        "Right to Data Portability (Article 20)",
                        "Right to Object (Article 21)",
                        "No Automated Decision-Making (Article 22)",
                    ].map((right, i) => (
                        <li key={i} className="bg-surface p-3 rounded flex items-center">
                             <span className="text-primary mr-2">✓</span> {right}
                        </li>
                    ))}
                </ul>

                <div className="bg-cream p-6 rounded-xl border border-beige-muted">
                    <h3 className="font-serif text-xl mb-4">Exercise Your Rights</h3>
                    <p className="mb-4 text-sm">Contact our Data Protection Officer at <a href="mailto:dpo@thingsatweb.se" className="font-bold underline">dpo@thingsatweb.se</a>.</p>
                    <div className="text-sm grid md:grid-cols-2 gap-4">
                        <div>
                            <strong>Timeline:</strong> Response within 30 days.
                        </div>
                        <div>
                            <strong>Complaint:</strong> Right to complain to Integritetsskyddsmyndigheten (IMY) at imy.se.
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* 11. Cookies */}
          <section id="cookies" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">11. Cookies & Similar Tech</h2>
            <p className="mb-4 text-gray-700">We use cookies to improve experience.</p>
            <ul className="space-y-4">
                <li>
                    <strong>Essential Cookies:</strong> Required for functionality and security.
                </li>
                <li>
                    <strong>Analytics Cookies:</strong> Google Analytics (with consent).
                </li>
                <li>
                    <strong>Marketing Cookies:</strong> Campaign tracking (with consent).
                </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">Manage via our cookie banner or browser settings.</p>
          </section>

          {/* 12, 13, 14 grouped for brevity visually */}
          <div className="space-y-16">
            <section id="links" className="scroll-mt-32">
                <h2 className="font-serif text-2xl mb-4">12. Third-Party Links</h2>
                <p className="text-gray-700">Our site may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </section>

            <section id="children" className="scroll-mt-32">
                <h2 className="font-serif text-2xl mb-4">13. Children's Privacy</h2>
                <p className="text-gray-700">Services are B2B and not for children under 16. We do not knowingly collect child data.</p>
            </section>

            <section id="changes" className="scroll-mt-32">
                <h2 className="font-serif text-2xl mb-4">14. Changes to Policy</h2>
                <p className="text-gray-700">Material changes will be notified via email or website notice. Check the "Last Updated" date at the top.</p>
            </section>
          </div>

          {/* 15. Contact */}
          <section id="contact" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">15. Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                    <h3 className="font-serif text-2xl mb-6">General Inquiries</h3>
                    <address className="not-italic space-y-4 text-sm">
                        <p className="font-bold text-lg">Thingsatweb Sweden AB</p>
                        <p>Sockerbruksgatan 7,<br/>531 40 Lidköping, Sweden</p>
                        <p><a href="mailto:support@virtualtour360.ai" className="underline hover:text-green-200">support@virtualtour360.ai</a></p>
                    </address>
                </div>
                <div className="bg-surface border border-gray-200 p-8 rounded-xl">
                    <h3 className="font-serif text-2xl mb-6 text-primary">Data Protection Officer</h3>
                     <address className="not-italic space-y-4 text-sm text-gray-700">
                        <p className="font-bold text-lg text-foreground">DPO</p>
                        <p>Sockerbruksgatan 7,<br/>531 40 Lidköping, Sweden</p>
                        <p><a href="mailto:dpo@thingsatweb.se" className="text-primary font-bold hover:underline">dpo@thingsatweb.se</a></p>
                    </address>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Supervisory Authority</p>
                        <p className="font-bold">Integritetsskyddsmyndigheten (IMY)</p>
                        <a href="https://www.imy.se" className="text-sm hover:underline">www.imy.se</a>
                    </div>
                </div>
            </div>
          </section>

           {/* 16. Glossary */}
           <section id="glossary" className="scroll-mt-32 border-t border-gray-100 pt-12">
            <h2 className="font-serif text-2xl mb-6">16. Glossary</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                    <dt className="font-bold">Controller</dt>
                    <dd className="text-gray-600">Organization determining purposes of processing.</dd>
                </div>
                <div>
                    <dt className="font-bold">Processor</dt>
                    <dd className="text-gray-600">Organization processing data on controller’s behalf.</dd>
                </div>
                <div>
                    <dt className="font-bold">Personal Data</dt>
                    <dd className="text-gray-600">Information relating to an identified person.</dd>
                </div>
                <div>
                    <dt className="font-bold">GDPR</dt>
                    <dd className="text-gray-600">General Data Protection Regulation (EU) 2016/679.</dd>
                </div>
            </dl>
          </section>

          <footer className="text-center text-gray-400 text-sm pt-12">
            <p>End of Privacy Policy.</p>
            <p>Thank you for trusting Thingsatweb Sweden AB.</p>
          </footer>

        </div>
      </div>
    </main>
  );
}