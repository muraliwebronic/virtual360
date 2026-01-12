import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases | Virtual Tour 360 for Real Estate, Retail & More",
  description:
    "Virtual Tour 360 serves every industry: real estate, hospitality, retail, architecture, education. Explore specific use cases, business impact, and ROI examples.",
  keywords: [
    "Virtual Tours for Real Estate",
    "Hospitality 360 Tours",
    "Retail Virtual Showrooms",
    "Education Campus Tours",
    "Construction Site Documentation",
    "Automotive Virtual Dealership",
  ],
  openGraph: {
    title: "Virtual Tours for Every Industry | Virtual Tour 360",
    description: "See how professionals in Real Estate, Retail, and Hospitality use 360 tours to grow business.",
    url: "https://virtualtour360.ai/use-cases",
    type: "article",
    images: ["/use-cases-og.jpg"],
  },
};

// --- AI SEO: ItemList Schema (Great for list-based pages) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Virtual Tour Industry Use Cases",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Real Estate" },
    { "@type": "ListItem", "position": 2, "name": "Hospitality & Hotels" },
    { "@type": "ListItem", "position": 3, "name": "Retail & Showrooms" },
    { "@type": "ListItem", "position": 4, "name": "Education & Campuses" }
  ]
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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