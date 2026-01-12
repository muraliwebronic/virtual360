import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | Virtual Tour 360 Hub",
  description: "Master 360 virtual tours for WordPress, Meta Quest and Apple Vision Pro. Explore professional tutorials, industry ROI case studies, and photography best practices.",
  keywords: [
    "virtual tour tutorial", 
    "real estate virtual tour guide", 
    "spatial web WordPress", 
    "360 image optimization", 
    "Apple Vision Pro, Meta Quest web content"
  ],
  openGraph: {
    title: "Virtual Tour 360: Resources, Tutorials & Case Studies",
    description: "The ultimate hub for spatial web creators and real estate professionals.",
    url: "https://app.virtualtour360.ai/resources",
    type: "website",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Virtual Tour 360 Resources Hub",
    "description": "Comprehensive library for virtual tour creation, spatial computing, and industry-specific 360 marketing.",
    "hasPart": [
      {
        "@type": "CreativeWorkSeries",
        "name": "Video Tutorial Library",
        "description": "5-minute to 8-minute guides on WordPress integration and VR setup."
      },
      {
        "@type": "Blog",
        "name": "Virtual Tour 360 Insights",
        "blogPost": [
          { "@type": "BlogPosting", "headline": "Real Estate Virtual Tours 2025" },
          { "@type": "BlogPosting", "headline": "WordPress Meets Apple Vision Pro, Meta Quest" }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}