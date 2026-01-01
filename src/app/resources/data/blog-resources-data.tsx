import React from "react";

/* =========================
   Types
========================= */

export type BlogPost = {
  id: number;
  title: string;
  subtitle: string;
  outline: string[];
  targetKeywords: string[];
  metaDescription: string;
};

export type ResourceCategory = {
  category: string;
  items: string[];
};

export type VideoTutorial = {
  title: string;
  duration: string;
  description: string;
};

export type FaqItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

/* =========================
   Blog Posts
========================= */

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Create a Virtual Tour for Real Estate in 2025",
    subtitle: "The Complete Guide to Real Estate Virtual Tours",
    outline: [
      "Why virtual tours are essential for modern real estate marketing",
      "Equipment recommendations for 360 photography (budget to professional)",
      "Best practices for shooting real estate properties (time of day, staging, lighting)",
      "Step by step tour building process using Virtual Tour 360",
      "Optimizing tours for lead generation and conversion",
      "Embedding tours in MLS listings and property websites",
      "Measuring virtual tour performance and ROI",
    ],
    targetKeywords: [
      "real estate virtual tour",
      "property 360 tour",
      "real estate photography 360",
      "virtual home tour",
      "real estate marketing",
    ],
    metaDescription:
      "Learn how to create professional real estate virtual tours in 2025. Complete guide covering equipment, photography tips, tour building, and lead generation strategies.",
  },
  {
    id: 2,
    title: "The Future of Spatial Web: WordPress Meets Apple Vision Pro",
    subtitle: "How Spatial Computing is Transforming Web Content",
    outline: [
      "Introduction to spatial computing and Apple Vision Pro",
      "The evolution from flat web to spatial web experiences",
      "Why WordPress creators need to prepare for spatial content now",
      "Technical breakdown of how Virtual Tour 360 bridges WordPress and visionOS",
      "Use cases for spatial content beyond virtual tours",
      "Predictions for spatial web adoption timelines",
      "Action steps for early adopters and innovators",
    ],
    targetKeywords: [
      "spatial web",
      "Apple Vision Pro WordPress",
      "visionOS web content",
      "spatial computing",
      "immersive web experiences",
    ],
    metaDescription:
      "Discover how Apple Vision Pro and spatial computing are transforming WordPress websites. Learn why spatial web content matters and how to prepare your site for the future.",
  },
  {
    id: 3,
    title: "5 Industries Revolutionized by 360 Virtual Tours",
    subtitle: "From Real Estate to Education: Virtual Tours Transform Business",
    outline: [
      "Overview of virtual tour technology adoption across industries",
      "Real Estate: Property showcasing and remote buyer engagement",
      "Hospitality: Hotel bookings and guest confidence",
      "Retail: Virtual showrooms and product discovery",
      "Education: Campus tours and distance learning",
      "Healthcare: Facility tours reducing patient anxiety",
      "ROI data and case studies from each industry",
      "Implementation tips for industry specific applications",
    ],
    targetKeywords: [
      "virtual tour industries",
      "360 tour business applications",
      "virtual tour ROI",
      "immersive technology business",
    ],
    metaDescription:
      "See how 5 industries use 360 virtual tours to increase conversions, reach more customers, and improve user experiences. ROI data and real world case studies included.",
  },
  {
    id: 4,
    title: "Optimizing 360 Images for Web and VR Performance",
    subtitle: "Technical Guide to 360 Image Optimization",
    outline: [
      "Understanding equirectangular format and resolution requirements",
      "Balancing image quality and file size for web delivery",
      "Compression techniques that preserve visual quality",
      "Resolution recommendations for different viewing platforms",
      "Preparing images for both web view and VR headsets",
      "Tools for batch processing and optimization",
      "Testing performance across devices",
      "Common mistakes and how to avoid them",
    ],
    targetKeywords: [
      "360 image optimization",
      "equirectangular images",
      "360 photo file size",
      "VR image quality",
      "360 photography tips",
    ],
    metaDescription:
      "Master 360 image optimization for web and VR. Technical guide covering resolution, compression, file size, and quality across viewing platforms.",
  },
  {
    id: 5,
    title: "Building Your First Virtual Tour: Beginner’s Guide",
    subtitle: "From Zero to Published Tour in Under an Hour",
    outline: [
      "What you need to get started (equipment and software)",
      "Capturing your first 360 images",
      "Creating a Virtual Tour 360 account",
      "Uploading images and creating scenes",
      "Adding navigation and information hotspots",
      "Customizing tour appearance",
      "Publishing and embedding in WordPress",
      "Sharing your tour and measuring engagement",
      "Common beginner mistakes to avoid",
    ],
    targetKeywords: [
      "virtual tour tutorial",
      "create 360 tour",
      "beginner virtual tour guide",
      "WordPress virtual tour",
    ],
    metaDescription:
      "Complete beginner’s guide to creating virtual tours. Learn to capture 360 images, build tours, and publish to your WordPress site in under an hour.",
  },
  {
    id: 6,
    title: "Virtual Tour Best Practices for Maximum Engagement",
    subtitle: "Design Principles for Immersive User Experiences",
    outline: [
      "Understanding user expectations in virtual environments",
      "Navigation design best practices (hotspot placement, flow)",
      "Information architecture for multi scene tours",
      "Visual design principles (composition, lighting, staging)",
      "Accessibility considerations for diverse audiences",
      "Mobile optimization strategies",
      "Performance optimization for smooth experiences",
      "A/B testing strategies for conversion optimization",
      "Analytics and engagement metrics to track",
    ],
    targetKeywords: [
      "virtual tour best practices",
      "360 tour design",
      "immersive UX",
      "virtual tour engagement",
    ],
    metaDescription:
      "Learn virtual tour best practices for maximum engagement. Design principles, navigation strategies, accessibility, and conversion optimization tactics.",
  },
];

/* =========================
   Resource Categories
========================= */

export const resourceCategories: ResourceCategory[] = [
  {
    category: "Tutorials & Guides",
    items: [
      "Getting Started with Virtual Tour 360",
      "Advanced Hotspot Techniques",
      "WordPress Integration Guide",
      "VR & Spatial Mode Tutorial",
      "Troubleshooting Common Issues",
    ],
  },
  {
    category: "Industry Insights",
    items: [
      "Real Estate Marketing Trends",
      "Hospitality Technology Adoption",
      "Retail Innovation Reports",
      "Educational Technology Updates",
      "Construction Documentation Standards",
    ],
  },
  {
    category: "Technical Documentation",
    items: [
      "API Reference",
      "Shortcode Parameters",
      "Webhook Integration",
      "Custom Styling Guide",
      "Performance Optimization",
    ],
  },
  {
    category: "Case Studies",
    items: [
      "How [Real Estate Agency] Increased Sales 40%",
      "[Hotel Chain] Reduces Booking Abandonment",
      "[Architecture Firm] Wins More Proposals with Virtual Tours",
      "[University] Attracts International Students",
      "[Museum] Expands Reach 500% with Virtual Exhibits",
    ],
  },
];

/* =========================
   Video Tutorials
========================= */

export const videoTutorials: VideoTutorial[] = [
  {
    title: "Getting Started",
    duration: "5 min",
    description: "Account setup and first tour creation",
  },
  {
    title: "Advanced Features",
    duration: "8 min",
    description: "Custom branding, hotspot mastery, spatial mode",
  },
  {
    title: "WordPress Integration",
    duration: "4 min",
    description: "Embedding tours in pages and posts",
  },
  {
    title: "VR & Spatial Mode",
    duration: "6 min",
    description: "Creating and testing immersive experiences",
  },
  {
    title: "Optimization Tips",
    duration: "7 min",
    description: "Performance and mobile best practices",
  },
];

/* =========================
   Newsletter
========================= */

export const newsletterData = {
  title: "Stay Updated on Virtual Tour Trends",
  benefits: [
    "Early access to new features and beta programs",
    "Exclusive tutorials and advanced techniques",
    "Industry research and trend reports",
    "Special subscriber only promotions",
    "Community spotlight and user showcases",
  ],
  disclaimer: "We respect your privacy. Unsubscribe anytime.",
};

/* =========================
   Community & Support
========================= */

export const communityLinks = [
  {
    name: "Community Forum",
    description:
      "Connect with other creators, share your tours, get feedback, and learn from experienced users.",
  },
  {
    name: "Facebook Group",
    description:
      "Join our private Facebook community for daily tips, inspiration, and direct access to our team.",
  },
  {
    name: "YouTube Channel",
    description:
      "Subscribe for video tutorials, feature announcements, and user showcase videos.",
  },
  {
    name: "Twitter Updates",
    description:
      "Follow @VirtualTour360 for quick tips, industry news, and platform updates.",
  },
];

/* =========================
   Free Resources
========================= */

export const freeResources = {
  photographyChecklists: [
    "Real estate property shoot checklist",
    "Hospitality facility photography guide",
    "Retail showroom capture workflow",
    "Event venue documentation template",
  ],
  planningTemplates: [
    "Scene flow diagram templates",
    "Hotspot content planning worksheets",
    "Client presentation templates",
    "Pricing calculator for tour services",
  ],
  marketingMaterials: [
    "Client proposal templates",
    "Virtual tour benefits one pagers",
    "ROI calculator spreadsheets",
    "Social media graphics pack",
  ],
};
