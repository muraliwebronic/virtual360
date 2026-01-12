"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Product", 
      href: "#", 
      subLinks: [
        { name: "Features", href: "/features" },
        { name: "Use Cases", href: "/use-cases" },
        { name: "How It Works", href: "/how-it-works" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { 
      name: "Support", 
      href: "#",
      subLinks: [
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
      ] 
    },
  ];

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

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
        >
          <span className="text-grad-primary font-bold text-2xl tracking-tight group-hover:opacity-90 transition-opacity">
            Virtual Tour
          </span>
          <span className="font-extrabold text-2xl ">
            360
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;
            
            // Logic: Is this link active? OR is one of its children active?
            const isParentActive = hasSubLinks 
              ? link.subLinks?.some(sub => pathname === sub.href)
              : pathname === link.href;

            return (
              <li key={link.name} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  
                  {/* Link Text */}
                  {hasSubLinks ? (
                    <span
                      className={`text-base font-semibold transition-all duration-300 flex items-center gap-1 ${
                        isParentActive
                          ? "text-grad-primary" 
                          : "text-foreground/70 group-hover:text-primary" 
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 group-hover:rotate-180 ${isParentActive ? "text-grad-primary" : ""}`} />
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base font-semibold transition-all duration-300 ${
                        isParentActive
                          ? "text-grad-primary" 
                          : "text-foreground/70 hover:text-primary" 
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* ACTIVE UNDERLINE (Works for both single links and dropdown parents) */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2.5px] rounded-full grad-primary transition-all duration-300 ${
                      isParentActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>

                {/* Dropdown Menu */}
                {hasSubLinks && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100/50 p-2 min-w-[200px] overflow-hidden">
                      {link.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            pathname === subLink.href
                              ? "bg-primary/5 text-primary"
                              : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* --- Buttons / Mobile Menu (Unchanged) --- */}
        <div className="hidden md:block">
          <a href="https://app.virtualtour360.ai/login-360/">
            <button className="grad-primary hover:grad-secondary text-white px-7 py-2.5 rounded-lg font-medium transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Log in
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden ${isScrolled ? "bg-white " : "bg-white/95 backdrop-blur-xl"} absolute top-full left-0 w-full border-t border-gray-100/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-6 gap-1 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => {
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;
            const isParentActive = hasSubLinks 
              ? link.subLinks?.some(sub => pathname === sub.href)
              : pathname === link.href;

            return (
              <li key={link.name} className="border-b border-gray-50 last:border-0">
                {hasSubLinks ? (
                  <div className="flex flex-col">
                    <button 
                      onClick={() => toggleMobileDropdown(link.name)}
                      className={`flex items-center justify-between w-full text-lg font-medium px-4 py-3 hover:text-primary ${isParentActive ? "text-primary" : "text-foreground/80"}`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${activeMobileDropdown === link.name ? "rotate-180 text-primary" : ""}`} 
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === link.name ? "max-h-64 opacity-100 mb-2" : "max-h-0 opacity-0"}`}>
                      <ul className="flex flex-col gap-1 pl-4 pr-4 bg-gray-50/50 rounded-lg">
                        {link.subLinks?.map((subLink) => (
                           <Link
                             key={subLink.name}
                             href={subLink.href}
                             onClick={() => setMobileMenuOpen(false)}
                             className={`block text-base font-medium px-4 py-2.5 rounded-md transition-colors ${
                               pathname === subLink.href
                                 ? "text-primary bg-white shadow-sm"
                                 : "text-gray-500 hover:text-primary"
                             }`}
                           >
                             {subLink.name}
                           </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                      isParentActive
                        ? "bg-primary/10 text-primary" 
                        : "text-foreground/80 hover:bg-base hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
          
          <li className="pt-4 mt-2">
             <a href="https://app.virtualtour360.ai/login-360/" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full grad-primary hover:grad-secondary text-white py-3.5 rounded-lg font-bold shadow-md active:scale-95 transition-transform">
                Log in
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}