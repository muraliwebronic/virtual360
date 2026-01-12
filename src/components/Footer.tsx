"use client";
import React from "react";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Home", href: "/" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/Virtual Tour 360.pdf" },
    ],
    company: [
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    // REDUCED SPACING: Changed pt-24 pb-12 to pt-10 pb-6
    <footer className="bg-white font-['Poppins'] text-[#1A1A1A] pt-10 pb-6 relative overflow-hidden border-t border-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-br from-blue-50 to-transparent opacity-50 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        {/* REDUCED SPACING: Changed pb-16 mb-16 to pb-8 mb-8 */}
        <div className="flex flex-col lg:flex-row justify-between  items-start lg:items-center gap-6 border-b border-gray-100 pb-8 mb-8">
          <div className="max-w-xl">
            {/* REDUCED SPACING: text-2xl and mb-2 */}
            <h3 className="text-2xl font-bold mb-2 tracking-tight">
              Ready to build your first tour?
            </h3>
            <p className="text-gray-500 ">
              Join 5,000+ agencies and creators bridging the gap between
              WordPress, Meta Quest and Apple Vision Pro
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              href={"/pricing#plans"}
              // REDUCED BUTTON SIZE: px-6 py-3
              className="px-6 py-3 bg-[#2A74ED] rounded-xl font-bold text-white hover:bg-[#1a5fc7] transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group text-sm"
            >
              Get Started Free
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/Virtual Tour 360.pdf"
              target="_blank"
              // REDUCED BUTTON SIZE: px-6 py-3
              className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-[#1A1A1A] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-center text-sm"
            >
              View Documentation
            </Link>
          </div>
        </div>

        {/* Middle Section: FLEXBOX LAYOUT (Left vs Right) */}
        {/* REDUCED SPACING: gap-8 instead of gap-20, mb-8 instead of mb-20 */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          
          {/* LEFT SIDE: Brand & Socials */}
          <div className="lg:max-w-xs shrink-0">
            <Link
              href="/"
              className="flex items-center gap-1.5 group select-none mb-3" // Reduced mb-6 to mb-3
              aria-label="Virtual Tour 360 Home"
            >
              <span className="text-grad-primary font-bold text-xl tracking-tight group-hover:opacity-90 transition-opacity">
                Virtual Tour
              </span>
              <span className="font-extrabold text-xl">360</span>
            </Link>
            {/* Reduced mb-8 to mb-4 */}
            <p className="text-gray-500 mb-4 leading-normal text-sm">
              The only WordPress plugin designed for the Spatial Web. Build
              once, deploy to Mobile, Desktop, and Apple Vision Pro
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/thingsatweb",
                },
                { Icon: Youtube, link: "https://www.youtube.com/@thingsatweb" },
                {
                  Icon: Instagram,
                  link: "https://www.instagram.com/thingsatweb/",
                },
                {
                  Icon: Linkedin,
                  link: "https://www.linkedin.com/company/thingsatweb",
                },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#2A74ED] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Links Grid */}
          {/* REDUCED SPACING: gap-6 instead of gap-12 */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* 1. Product */}
            {/* REDUCED SPACING: gap-2 instead of gap-4 */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#1A1A1A] mb-1 ">
                Product
              </h4>
              {footerLinks.product.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 2. Resources */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#1A1A1A] mb-1 ">
                Resources
              </h4>
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                  className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 3. Company */}
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2">
              <h4 className="font-bold text-[#1A1A1A] mb-1 ">
                Company
              </h4>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 4. Get in Touch */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#1A1A1A] mb-1 ">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/48QZzSupjJBGrUvv7"
                  className="flex items-start gap-2 hover:text-[#2A74ED] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#2A74ED] shrink-0 mt-0.5" />
                  <address className="not-italic leading-relaxed">
                    Sockerbruksgatan
                    <br />
                    753140 Lidköping
                  </address>
                </Link>

                <a
                  href="mailto:support@virtualtour360.ai"
                  className="flex items-center gap-2 hover:text-[#2A74ED] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2A74ED] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>support@virtualtour360.ai</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-gray-400">
            © {currentYear} Things at Web Sweden AB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;