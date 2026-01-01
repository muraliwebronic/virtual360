import type { Metadata } from "next";

// --- PRIMARY SEO METADATA ---
export const metadata: Metadata = {
  title: "Features | Virtual Tour 360 - No-Code Builder & Vision Pro Support",
  description:
    "Explore Virtual Tour 360 features: no code builder, Apple Vision Pro support, interactive hotspots, live preview, one click WordPress embed, VR mode. Build immersive tours in minutes.",
  keywords: [
    "Virtual Tour Builder Features",
    "Apple Vision Pro WordPress Plugin",
    "No-Code 360 Tour Editor",
    "WebXR Virtual Reality Builder",
    "Interactive Hotspots for 360 Images",
    "Meta Quest WebVR Support",
    "WordPress Virtual Tour Embed",
  ],
  openGraph: {
    title: "Features | Virtual Tour 360",
    description: "The only no-code builder with native Apple Vision Pro & Meta Quest support. Create professional tours in minutes.",
    url: "https://wplicense.webronics.com/features",
    type: "website",
    images: ["/features-og-image.jpg"],
  },
};

// --- AI SEO: STRUCTURED DATA (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Virtual Tour 360 Features",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web, visionOS, Android, iOS",
  "description": "A comprehensive suite of tools for building 360-degree virtual tours with native support for Apple Vision Pro and Meta Quest.",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "No-Code 360 Builder",
      "description": "Drag and drop editor to build tours without technical skills."
    },
    {
      "@type": "CreativeWork",
      "name": "Apple Vision Pro Support",
      "description": "Native spatial computing support for immersive 3D viewing."
    }
  ]
};

export default function FeaturesLayout({
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