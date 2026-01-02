import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, category, date, slug }: BlogCardProps) => (
  <div className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all duration-500 h-full">
    <div className="flex justify-between items-center mb-6">
      <span className="px-4 py-1.5 rounded-full text-[#2A74ED] text-xs font-bold uppercase tracking-widest ">
        {category}
      </span>
      <div className="flex items-center gap-2 text-gray-400 text-xs">
        <Clock size={14} />
        {date}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#2A74ED] transition-colors leading-tight">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
      {excerpt}
    </p>
    
    {/* <div className="flex items-center gap-2 text-[#2A74ED] font-bold text-sm">
      Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </div> */}
  </div>
);

export default BlogCard;