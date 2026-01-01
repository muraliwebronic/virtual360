import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Virtual Tour 360 - Support & Sales",
  description:
    "Get in touch with Virtual Tour 360. Contact our Swedish headquarters for technical support, sales inquiries, or custom enterprise solutions.Contact Virtual Tour 360: Email kontakt@thingsatweb.se, Phone +46 70 777 07 27. Support, sales, partnerships. Office in Lidköping, Sweden. Response within 48 business hours.",
  keywords: [
    "Contact Virtual Tour 360",
    "Things at Web Sweden AB",
    "WordPress VR Support",
    "Spatial Web Sales",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Virtual Tour 360",
    url: "https://wplicense.webronics.com/contact",
    logo: "https://wplicense.webronics.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+46 70 777 07 27",
        contactType: "customer service",
        email: "support-360@thingsatweb.com",
        areaServed: "Worldwide",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sockerbruksgatan 7",
      addressLocality: "Lidköping",
      postalCode: "531 40",
      addressCountry: "SE",
    },
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
