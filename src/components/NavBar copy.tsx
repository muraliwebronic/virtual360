"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-base/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* --- Logo --- */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 group select-none" 
          aria-label="Virtual Tour 360 Home"
        >
          {/* Virtual Tour: Uses theme primary color */}
          <span className="text-grad-primary font-bold text-2xl tracking-tight group-hover:opacity-90 transition-opacity">
            Virtual Tour
          </span>
          {/* 360: Uses your custom gradient text utility */}
          <span className="font-extrabold text-2xl ">
            360
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative group py-2"
                >
                  {/* Text Layer */}
                  <span
                    className={`text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-grad-primary" // Active: Custom Gradient Utility
                        : "text-foreground/70 hover:text-primary" // Inactive: Theme Foreground -> Theme Primary
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Underline Animation (Using custom grad-primary) */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2.5px] rounded-full grad-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* --- CTA Button (Desktop) --- */}
        <div className="hidden md:block">
          <Link href="/login">
            <button className="grad-primary hover:grad-secondary text-white px-7 py-2.5 rounded-lg font-medium transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Log in
            </button>
          </Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`md:hidden ${isScrolled? "bg-white ": ""} absolute top-full left-0 w-full  backdrop-blur-xl border-t border-gray-100/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary" // Active mobile style using theme colors
                      : "text-foreground/80 hover:bg-base hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="pt-4 mt-2 border-t border-foreground/5">
             <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              {/* Mobile Button using Gradient */}
              <button className="w-full grad-primary hover:grad-secondary text-white py-3.5 rounded-lg font-bold shadow-md active:scale-95 transition-transform">
                Log in
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}