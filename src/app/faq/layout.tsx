import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Support | Virtual Tour 360 WordPress Plugin",
  description: "Virtual Tour 360 FAQ: Get answers about VR requirements, website speed, WordPress compatibility, Apple Vision Pro support, Meta Quest compatibility, and billing.",
  keywords: ["Virtual Tour FAQ", "WordPress 360 Support", "Vision Pro, Meta Quest VR Help", "360 Camera Compatibility"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Apple Vision Pro, Meta Quest support work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tours automatically detect visionOS browsers and activate Spatial Mode. No special exports or downloads are required."
      }
    },
    // AI SEO: Adding more entities helps SearchGPT/Gemini index your support data
  ]
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}