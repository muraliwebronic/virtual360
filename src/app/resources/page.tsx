"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/resources/BlogCard";
import {
  Mail,
  Video,
  BookOpen,
  Download,
  Users,
  CheckCircle2,
  Play,
  FileText,
  Globe,
  Share2,
} from "lucide-react";
import Link from "next/link";
import {
  blogPosts,
  resourceCategories,
  videoTutorials,
  freeResources,
  communityLinks,
} from "@/app/resources/data/blog-resources-data";
import FinalResourcesCTA from "@/components/resources/FinalResourcesCTA";

export default function ResourcesPage() {
  return (
    <main className="w-full bg-white font-['Poppins']">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto text-center">
          <SectionHeading
            title="Virtual Tour"
            highlight="Resources & Insights"
            description="Tutorials, industry insights, and best practices for creating immersive 360 experiences."
            size="large"
            gradient={true}
            className="mb-8"
          />
        </div>
      </section>

      {/* 2. FEATURED BLOG POSTS (Optimized for Article SEO) */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Latest Insights
            </h2>
            <p className="text-gray-500">
              Expert guides on the future of the spatial web.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.metaDescription}
              category={post.id % 2 === 0 ? "Spatial Web" : "Real Estate"}
              date="2025 Update"
              slug={`blog-${post.id}`}
            />
          ))}
        </div>
      </section>

      {/* 3. VIDEO TUTORIAL LIBRARY (Watch and Learn) */}
      <section className="py-24 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Video"
            highlight="Tutorial Library"
            size="medium"
            className="mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-[2rem] border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-[#2A74ED]">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">{video.title}</h4>
                  <p className="text-xs text-[#2A74ED] font-semibold mb-2">
                    {video.duration}
                  </p>
                  <p className="text-sm text-gray-500">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESOURCE CATEGORIES & CASE STUDIES */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {resourceCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#2A74ED] rounded-full" />
                {cat.category}
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                    <FileText
                      size={18}
                      className="text-gray-300 group-hover:text-[#2A74ED]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DOWNLOADABLE TOOLS (Checklists & Templates) */}
      <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden rounded-[4rem] mx-4 mb-24">
        <div className="container max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Free Tools & <br />
                <span className="text-[#2A74ED]">Templates</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Download our professional checklists and planning worksheets to
                streamline your virtual tour business.
              </p>
              <div className="space-y-4">
                {[
                  "Photography Checklists",
                  "Tour Planning Templates",
                  "ROI Spreadsheets",
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#2A74ED]" size={20} />
                    <span className="font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freeResources.marketingMaterials.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <Download size={24} className="mb-4 text-[#2A74ED]" />
                  <p className="font-bold text-sm group-hover:text-blue-400 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER & COMMUNITY */}
      <section className="py-24 bg-base shadow-inner">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Newsletter (Left) */}
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm">
            <Mail className="text-[#2A74ED] mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-500 mb-8">
              Get monthly insights, tutorials, and industry news delivered to
              your inbox.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-[#2A74ED] outline-none"
              />
              <button className="w-full py-4 bg-[#2A74ED] text-white rounded-2xl font-bold hover:bg-[#1a5fc7] transition-all">
                Subscribe
              </button>
            </form>
          </div>

          {/* Community (Right) */}
          <div className="space-y-8 py-4">
            <h3 className="text-2xl font-bold">Join the Community</h3>
            <div className="grid grid-cols-1 gap-6">
              {communityLinks.map((link, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                    <Share2 size={18} className="text-[#2A74ED]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{link.name}</h4>
                    <p className="text-xs text-gray-500">{link.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
     <FinalResourcesCTA />
    </main>
  );
}
