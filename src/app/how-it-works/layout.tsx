import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Create 360 Virtual Tours in 3 Steps",
  description:
    "Learn how to create professional virtual tours in 3 easy steps: upload 360 images, add interactive hotspots, publish to WordPress with VR support. No coding required. Try demo now.",
  keywords: [
    "Virtual Tour Tutorial",
    "How to make 360 tours",
    "WordPress Virtual Tour Guide",
    "Apple Vision Pro Tour Creation",
    "No-Code VR Workflow",
  ],
  openGraph: {
    title: "Create 360 Virtual Tours in 3 Simple Steps",
    description: "Upload images, add hotspots, and publish to WordPress & Vision Pro, Meta Quest instantly.",
    url: "https://app.virtualtour360.ai/how-it-works",
    type: "website",
    images: ["/how-it-works-og.jpg"],
  },
};

// --- AI SEO: HowTo Schema ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Create a Virtual Tour in 3 Steps",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload 360 Images",
      "text": "Upload equirectangular panoramas or images up to 16K resolution.",
      "image": "https://app.virtualtour360.ai/step1-upload.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Add Scenes & Hotspots",
      "text": "Connect scenes with navigation hotspots and add informational pins.",
      "image": "https://app.virtualtour360.ai/step2-hotspots.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Publish Everywhere",
      "text": "Generate a WordPress shortcode or direct link for Web and VR.",
      "image": "https://app.virtualtour360.ai/step3-publish.jpg"
    }
  ]
};

export default function HowItWorksLayout({
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