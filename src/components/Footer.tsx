"use client";
import React from "react";
import { Twitter, Linkedin, Github, Mail, Globe, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
      // { name: "Showcase", href: "#" },
      // { name: "Spatial Mode", href: "#" },
      // { name: "Changelog", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      // { name: "Community", href: "#" },
      // { name: "Academy", href: "#" },
      // { name: "Help Center", href: "#" },
    ],
    company: [
      // { name: "About", href: "#" },
      // { name: "Blog", href: "#" },
      // { name: "Partners", href: "#" },
      { name: "Legal", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  };

  return (
    <footer className="bg-white font-['Poppins'] text-[#1A1A1A] pt-24 pb-12 relative overflow-hidden border-t border-gray-100">
      
      {/* Background Decor (Subtle Blue Gradient) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-transparent opacity-50 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-gray-100 pb-16 mb-16">
            <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Ready to build your first tour?</h3>
                <p className="text-gray-500 text-lg">
                    Join 5,000+ agencies and creators bridging the gap between WordPress and Apple Vision Pro.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button className="px-8 py-4 bg-[#2A74ED] rounded-xl font-bold text-white hover:bg-[#1a5fc7] transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
                    Get Started Free
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-gray-200 rounded-xl font-bold text-[#1A1A1A] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                    View Documentation
                </button>
            </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
             {/* Logo Placeholder */}
             <div className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#1A1A1A]">
                <span className="w-8 h-8 bg-[#2A74ED] rounded-lg flex items-center justify-center text-white">
                    <Globe size={20} />
                </span>
                Webronic 360
             </div>
             <p className="text-gray-500 mb-8 max-w-sm leading-relaxed text-sm">
                The only WordPress plugin designed for the Spatial Web. 
                Build once, deploy to Mobile, Desktop, and Apple Vision Pro.
             </p>
             
             {/* Social Icons */}
             <div className="flex gap-4">
                {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#2A74ED] transition-all duration-300">
                        <Icon size={18} />
                    </a>
                ))}
             </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Product</h4>
            {footerLinks.product.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors">
                    {link.name}
                </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Resources</h4>
            {footerLinks.resources.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors">
                    {link.name}
                </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Company</h4>
            {footerLinks.company.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors">
                    {link.name}
                </a>
            ))}
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
                © {currentYear} Webronic Inc. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                System Status: Operational
            </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;