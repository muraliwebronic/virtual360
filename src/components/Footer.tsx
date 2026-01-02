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
      { name: "Documentation", href: "#" },
      // { name: "API Reference", href: "#" },
    ],
    company: [
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-white font-['Poppins'] text-[#1A1A1A] pt-24 pb-12 relative overflow-hidden border-t border-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-br from-blue-50 to-transparent opacity-50 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-gray-100 pb-16 mb-16">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">
              Ready to build your first tour?
            </h3>
            <p className="text-gray-500 text-lg">
              Join 5,000+ agencies and creators bridging the gap between
              WordPress and Apple Vision Pro
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link href={"/pricing#plans"} className="px-8 py-4 bg-[#2A74ED] rounded-xl font-bold text-white hover:bg-[#1a5fc7] transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
              Get Started Free
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link href={"#"} className="px-8 py-4 bg-white border border-gray-200 rounded-xl font-bold text-[#1A1A1A] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-center">
              View Documentation
            </Link>
          </div>
        </div>

        {/* Middle Section: Links Grid - UPDATED GRID LOGIC */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 group select-none mb-6"
              aria-label="Virtual Tour 360 Home"
            >
              <span className="text-grad-primary font-bold text-2xl tracking-tight group-hover:opacity-90 transition-opacity">
                Virtual Tour
              </span>
              <span className="font-extrabold text-2xl ">360</span>
            </Link>
            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed text-sm">
              The only WordPress plugin designed for the Spatial Web. Build
              once, deploy to Mobile, Desktop, and Apple Vision Pro
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#2A74ED] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Product</h4>
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

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-[#2A74ED] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Company</h4>
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

          {/* Contact Info - FIXED FOR MOBILE */}
          <div className="flex flex-col gap-4  ">
            <h4 className="font-bold text-[#1A1A1A] mb-2">Get in Touch</h4>
            <div className="flex flex-col gap-5 text-sm text-gray-500">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2A74ED] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Sockerbruksgatan<br /> 
                  753140 Lidköping
                </address>
              </div>

              {/* Email */}
              <a 
                href="mailto:kontakt@thingsatweb.se" 
                className="flex items-center gap-3 hover:text-[#2A74ED] transition-colors "
              >
                <Mail className=" text-[#2A74ED] shrink-0 group-hover:scale-110 transition-transform" />
                <span>kontakt@thingsatweb.se</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+46707770727" 
                className="flex items-center gap-3 hover:text-[#2A74ED] transition-colors group"
              >
                <Phone className=" text-[#2A74ED] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+46 70 777 07 27</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-400">
            © {currentYear} Things at Web Sweden AB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;