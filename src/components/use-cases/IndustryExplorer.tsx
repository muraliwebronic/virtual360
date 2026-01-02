"use client";
import React, { useState, useEffect } from "react";
import { industriesData } from "@/app/use-cases/data/industriesData";
import {
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Play,
  Share2,
  Check,
  Link as LinkIcon,
  X,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Copy,
} from "lucide-react";

const IndustryExplorer = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Share Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Helper to find active data
  const activeData =
    industriesData.find((item) => item.id === activeTab) || industriesData[0];

  // --- FIX: Construct the specific URL for the active tab ---
  // This ensures we share ".../use-cases#retail" instead of just ".../use-cases"
  const shareableUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}#${activeTab}`
      : "";

  // Handle Tab Switching
  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setIsTransitioning(true);
    setIframeLoaded(false);

    // Update URL Hash visually without scrolling
    window.history.replaceState(null, "", `#${id}`);

    setTimeout(() => {
      setActiveTab(id);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 200);
  };

  // Handle Copy Link using the specific shareableUrl
  const handleCopyLink = () => {
    if (!shareableUrl) return;
    navigator.clipboard.writeText(shareableUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Social Share Generators using shareableUrl
  const getShareUrl = (platform: string) => {
    if (!shareableUrl) return "#";
    const url = encodeURIComponent(shareableUrl);
    const text = encodeURIComponent(
      `Check out how ${activeData.title} uses Virtual Tours:`
    );

    switch (platform) {
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "email":
        return `mailto:?subject=${text}&body=${url}`;
      default:
        return "#";
    }
  };

  // Handle Hash Navigation on Initial Load
  useEffect(() => {
    // Remove the '#' to get the ID
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = industriesData.find((i) => i.id === hash);
      if (found) {
        setActiveTab(found.id); // Set tab immediately without animation delay on first load
      }
    }
  }, []);

  return (
    <section
      className="bg-white py-16 mt-10 md:mt-20 font-['Poppins']"
      id="industry-use-cases"
    >
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Virtual Tours for{" "}
            <span className="text-[#2A74ED]">Every Industry</span>
          </h1>
          <p className="text-gray-600 text-lg">
            From real estate to education, discover how immersive 360°
            experiences drive engagement, ROI, and customer trust.
          </p>
        </div>

        {/* --- Layout Split --- */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 relative">
          {/* ================= LEFT: Navigation Sidebar ================= */}
          <nav
            className="w-full lg:w-64 lg:shrink-0"
            aria-label="Industry Categories"
          >
            <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1 pb-4 lg:pb-0 no-scrollbar snap-x snap-mandatory">
              {industriesData.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`
                      group flex items-center gap-3 px-3 py-2.5 rounded-lg text-left w-full min-w-[max-content] lg:min-w-0 transition-colors duration-200 snap-start
                      ${
                        isActive
                          ? "bg-blue-50 text-[#2A74ED] font-semibold"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
                      }
                    `}
                  >
                    <span
                      className={`shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "text-[#2A74ED]"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-[13px] tracking-tight">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* ================= RIGHT: Content Area ================= */}
          <main className="w-full lg:w-3/4 min-h-[600px] lg:pl-8">
            <div
              className={`transition-all duration-500 ease-out transform ${
                isTransitioning
                  ? "opacity-50 translate-y-2 blur-[2px]"
                  : "opacity-100 translate-y-0 blur-0"
              }`}
            >
              <article>
                {/* 1. Header Info with SHARE Button */}
                <header className="mb-10">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                    {/* Tag */}
                    <span className="inline-flex items-center  max-md:mr-auto px-2.5 md:py-0.5 rounded-md py-2 md:rounded-full bg-blue-50 text-[#2A74ED] text-[11px] font-bold uppercase tracking-wider border border-blue-100">
                      Use Case: {activeData.title}
                    </span>

                    {/* Trigger Share Modal */}
                    <button
                      onClick={() => setIsShareModalOpen(true)}
                      className="group mt-3 flex items-center max-md:mr-auto gap-2 text-xs font-medium text-gray-400 hover:text-[#1A1A1A] transition-colors py-1 px-2 rounded-md hover:bg-gray-50"
                    >
                      <Share2
                        size={14}
                        className="group-hover:text-[#2A74ED] transition-colors"
                      />
                      <span>Share</span>
                    </button>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4 leading-tight tracking-tight">
                    {activeData.headline}
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">
                    {activeData.description}
                  </p>
                </header>

                {/* 2. LIVE DEMO VIEWER */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-sm mb-10 group">
                  {/* Loader */}
                  {(!iframeLoaded || isTransitioning) && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                      <div className="flex gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 bg-[#2A74ED] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2.5 h-2.5 bg-[#93C5FD] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2.5 h-2.5 bg-[#2A74ED] rounded-full animate-bounce"></div>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                        Loading Demo
                      </span>
                    </div>
                  )}

                  {/* Interaction Hint */}
                  <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#111827]/90 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                      <Play size={10} className="fill-white" /> Interactive
                      Preview
                    </div>
                  </div>

                  <iframe
                    key={activeTab}
                    src={activeData.embedUrl}
                    title={`${activeData.title} Virtual Tour Demo`}
                    className={`w-full h-full border-0 transition-opacity duration-700 ${
                      iframeLoaded && !isTransitioning
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                    onLoad={() => setIframeLoaded(true)}
                  />
                </div>

                {/* 3. BUSINESS STATS */}
                <div className="border-y border-gray-100 py-8 mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Vertical Divider (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2"></div>

                    {/* Impact Section */}
                    <div className="flex flex-row items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#2A74ED]">
                          <TrendingUp size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          Business Impact
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {activeData.impact}
                        </p>
                      </div>
                    </div>

                    {/* ROI Section */}
                    <div className="flex flex-row items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                          <BarChart3 size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          Typical ROI
                        </h3>
                        <p className="text-gray-600   leading-relaxed">
                          {activeData.roi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. APPLICATIONS */}
                <div className="  p-8">
                  <h3 className=" font-bold text-[#111827] mb-6 flex items-center gap-2">
                    Specific Applications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
                    {activeData.applications.map((app: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 text-[#2A74ED]">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="text-[15px] text-gray-600 leading-snug">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </main>
        </div>

        {/* ================= SHARE MODAL ================= */}
        {isShareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
              onClick={() => setIsShareModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">
                  Share this use case
                </h3>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Social Grid */}
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  Share to social media
                </p>
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <a
                    href={getShareUrl("linkedin")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300">
                      <Linkedin size={20} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href={getShareUrl("twitter")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Twitter size={20} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      X / Twitter
                    </span>
                  </a>

                  <a
                    href={getShareUrl("facebook")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300">
                      <Facebook size={20} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      Facebook
                    </span>
                  </a>

                  <a
                    href={getShareUrl("email")}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                      <Mail size={20} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      Email
                    </span>
                  </a>
                </div>

                {/* Copy Link Section */}
                <p className="text-sm text-gray-500 mb-2 font-medium">
                  Page Link
                </p>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 pl-4">
                  <LinkIcon size={16} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    readOnly
                    value={shareableUrl}
                    className="bg-transparent border-none text-sm text-gray-600 w-full focus:ring-0 truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`
                      shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2
                      ${
                        copied
                          ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                          : "bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                      }
                    `}
                  >
                    {copied ? (
                      <>
                        <Check size={14} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryExplorer;
