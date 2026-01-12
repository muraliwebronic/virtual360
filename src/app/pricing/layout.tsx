import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Virtual Tour 360 - Affordable Spatial Web Builder",
  description:
    "Virtual Tour 360 pricing: Standard plan $19.99/year, Pro plan $69.99/year. Free trials, no setup fees, cancel anytime. ROI Calculator shows plans pay for themselves with one project.",
  keywords: [
    "Virtual Tour Plugin Pricing",
    "WordPress 360 Builder Cost",
    "Cheap Apple Vision Pro Builder",
    "Cheap Meta Quest Builder",
    "No-Code VR Software Trial",
    "Spatial Web Pricing Plans",
  ],
  openGraph: {
    title: "Pricing Plans | Virtual Tour 360",
    description: "Start your 14-day free trial. Build immersive tours for WordPress and Vision Pro at the best price.",
    url: "https://virtualtour360.ai/pricing",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  "name": "Virtual Tour 360 Subscription",
  "offers": [
    {
      "@type": "Offer",
      "name": "Standard Plan",
      "price": "19.99",
      "priceCurrency": "USD",
      "description": "14-day free trial, no setup fees."
    },
    {
      "@type": "Offer",
      "name": "Pro Plan",
      "price": "69.99",
      "priceCurrency": "USD",
      "description": "7-day free trial, high-capacity projects."
    }
  ]
};

export default function PricingLayout({
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