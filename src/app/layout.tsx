import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://app.virtualtour360.ai/";

export const viewport: Viewport = {
  themeColor: "#e7f6f26e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Virtual Tour 360 | No-Code 360° Builder for WordPress , Vision Pro & Meta Quest",
    template: "%s | Virtual Tour 360",
  },
  description:
    "The ultimate no-code 360° virtual tour builder. Create immersive tours for WordPress, Web, and Spatial Computing. Export ready-to-use assets for Apple Vision Pro and Meta Quest without writing code.",
  
  keywords: [
    "Virtual Tour Builder",
    "360 Tour Software",
    "WordPress Virtual Tour Plugin",
    "Apple Vision Pro WebXR",
    "Meta Quest",
    "No-Code VR Builder",
    "Spatial Computing Web",
    "Real Estate Virtual Tours",
  ],
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Build VR Tours for Vision Pro & Web - No Code Required",
    description: "Create professional virtual tours in WordPress instantly. Native support for Apple Vision Pro and Meta Quest.",
    siteName: "Virtual Tour 360",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Virtual Tour 360 Dashboard Preview",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Virtual Tour 360 | The No-Code Spatial Builder",
    description: "Build immersive 360 tours for the web and Apple Vision Pro in minutes.",
    images: ["/og-image.jpg"], 
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Virtual Tour 360",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web, visionOS, Oculus Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Start Building Free"
  },
  "description": "A no-code builder for creating 360-degree virtual tours compatible with WordPress, Apple Vision Pro, and Meta Quest.",
  "featureList": [
    "Unlimited Tours",
    "Interactive Hotspots",
    "VR & Spatial Mode",
    "Apple Vision Pro Support",
    "Meta Quest Support",
    "WordPress Integration"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Real Estate Agents, Web Developers, Photographers"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}