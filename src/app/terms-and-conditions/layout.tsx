import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Virtual Tour 360",
  description: "Read the Terms and Conditions for Virtual Tour 360. Understand your rights, subscription billing via Razorpay, and content ownership policies under Swedish law.",
  keywords: ["Virtual Tour 360 Terms", "SaaS Agreement Sweden", "Things at Web Legal", "Virtual Tour Subscription Rules"],
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - Virtual Tour 360",
    "description": "Standard terms of service for Things at Web Sweden AB software services.",
    "publisher": {
      "@type": "Organization",
      "name": "Things at Web Sweden AB",
      "location": "Lidköping, Sweden"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}