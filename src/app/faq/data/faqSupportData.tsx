export type FaqItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

export const faqSupportData: FaqItem[] = [
  // =====================
  // GENERAL QUESTIONS
  // =====================
  {
    id: 1,
    category: "General",
    question: "Do I need a VR headset to build tours?",
    answer:
      "No. You build tours entirely in your web browser using our editor interface. A VR headset or Apple Vision Pro is only needed if you want to experience the Spatial Mode output yourself. Your viewers can access tours in regular Web View on any device or switch to Spatial Mode if they have compatible hardware. The builder works perfectly on standard desktop and laptop computers.",
  },
  {
    id: 2,
    category: "General",
    question: "What kind of 360 camera do I need?",
    answer:
      "Virtual Tour 360 works with images from any 360 camera or 3D rendering software that produces equirectangular panoramas. Popular options include Ricoh Theta, Insta360 One X2 or X3, GoPro Max, and professional rigs from Matterport or similar. You can also use rendered 360 images from Blender, Unreal Engine, 3ds Max, or other 3D software. Even smartphones with 360 apps work for simple projects.",
  },
  {
    id: 3,
    category: "General",
    question: "Can I use regular photos instead of 360 images?",
    answer:
      "The plugin is designed specifically for 360 equirectangular images. Regular flat photos will not work correctly because the viewer expects to be able to look around in all directions. If needed, photographers can stitch regular images into 360 panoramas using software like PTGui or Autopano.",
  },
  {
    id: 4,
    category: "General",
    question: "How long does it take to create a tour?",
    answer:
      "Most users publish their first tour within 30–45 minutes. After learning the workflow, a typical 5 scene tour takes 10–15 minutes. Complex tours with many hotspots may take 30–60 minutes. Capturing the 360 photography usually takes longer than building the tour.",
  },
  {
    id: 5,
    category: "General",
    question: "Is there a limit to how many people can view my tours?",
    answer:
      "No. There are no viewer limits on any plan. Tours can be viewed by unlimited people simultaneously. Bandwidth and infrastructure are fully managed and included in your subscription.",
  },
  {
    id: 6,
    category: "General",
    question: "Can I password protect my tours?",
    answer:
      "Tour access is controlled at the WordPress page level. If a tour is embedded on a password-protected page, only users with access can view it. Native tour-level password protection is planned for a future update.",
  },
  {
    id: 7,
    category: "General",
    question: "Can I white label tours for my clients?",
    answer:
      "Pro plan subscribers can customize brand colors, remove branding, and use custom domain names. The Standard plan includes default branding that displays “Powered by Virtual Tour 360.”",
  },

  // =====================
  // TECHNICAL QUESTIONS
  // =====================
  {
    id: 8,
    category: "Technical",
    question: "Will 360 images slow down my website?",
    answer:
      "No. Tours load progressively, showing the initial view in under 2 seconds while loading other scenes in the background. Images are compressed and delivered through a global CDN. Most tours add less than 500KB to initial page load.",
  },
  {
    id: 9,
    category: "Technical",
    question: "What WordPress version do I need?",
    answer:
      "Virtual Tour 360 requires WordPress 5.0 or higher. We recommend using the latest version for security and compatibility. The plugin is tested with every major WordPress release.",
  },
  {
    id: 10,
    category: "Technical",
    question: "Does it work with WordPress multisite?",
    answer:
      "Yes. The plugin is fully compatible with WordPress multisite. Each site counts toward your plan’s site limit.",
  },
  {
    id: 11,
    category: "Technical",
    question: "Will it conflict with my theme or other plugins?",
    answer:
      "Virtual Tour 360 follows WordPress coding standards and is compatible with popular themes and plugins including WooCommerce, Yoast SEO, and Contact Form 7. Support assists quickly if conflicts occur.",
  },
  {
    id: 12,
    category: "Technical",
    question: "Can I back up my tours?",
    answer:
      "Tour data is stored in your WordPress database and media library. Standard WordPress backup plugins can back up your tours. We also maintain automatic backups of tour configurations.",
  },
  {
    id: 13,
    category: "Technical",
    question: "What happens if I exceed my plan limits?",
    answer:
      "The system prevents creation beyond limits. Existing tours continue working. You can upgrade or delete older content to stay within limits.",
  },
  {
    id: 14,
    category: "Technical",
    question: "Can I export my tour data?",
    answer:
      "Full export is not currently available due to proprietary tour formats. If you cancel, embedded tours stop working, but your images remain in WordPress.",
  },

  // =====================
  // COMPATIBILITY
  // =====================
  {
    id: 15,
    category: "Compatibility",
    question: "Does it work with Elementor or Divi?",
    answer:
      "Yes. Tours use WordPress shortcodes and work with Elementor, Divi, Beaver Builder, WPBakery, Gutenberg, and more.",
  },
  {
    id: 16,
    category: "Compatibility",
    question: "Will tours work on mobile devices?",
    answer:
      "Yes. Tours are fully responsive and touch optimized for iOS and Android devices.",
  },
  {
    id: 17,
    category: "Compatibility",
    question: "What browsers are supported?",
    answer:
      "Chrome 90+, Safari 14+, Firefox 88+, Edge 90+, and Samsung Internet 14+. Internet Explorer is not supported.",
  },
  {
    id: 18,
    category: "Compatibility",
    question: "How does Apple Vision Pro support work?",
    answer:
      "Tours automatically detect visionOS browsers and activate Spatial Mode. No special exports or downloads are required.",
  },
  {
    id: 19,
    category: "Compatibility",
    question: "Does it work with Meta Quest headsets?",
    answer:
      "Yes. Meta Quest browsers automatically activate Spatial Mode when accessing tour URLs.",
  },
  {
    id: 20,
    category: "Compatibility",
    question: "Can I embed tours on non-WordPress sites?",
    answer:
      "Currently, Virtual Tour 360 is designed for WordPress. Standalone embed options are being explored.",
  },

  // =====================
  // BILLING
  // =====================
  {
    id: 21,
    category: "Billing",
    question: "When will I be charged after my trial?",
    answer:
      "Only a refundable $0.50 verification charge is applied at trial start. Subscription billing begins after the trial ends unless canceled.",
  },
  {
    id: 22,
    category: "Billing",
    question: "What happens if my payment fails?",
    answer:
      "Payments are retried three times over 10 days. Tours continue working during the grace period.",
  },
  {
    id: 23,
    category: "Billing",
    question: "Can I get an invoice for my subscription?",
    answer:
      "Yes. Invoices are emailed automatically and downloadable from your dashboard. VAT/GST details can be added.",
  },
  {
    id: 24,
    category: "Billing",
    question: "Do you offer discounts for nonprofits or education?",
    answer:
      "No. We do not currently offer nonprofit or educational discounts.",
  },
  {
    id: 25,
    category: "Billing",
    question: "Can I upgrade or downgrade mid-subscription?",
    answer:
      "Upgrades are instant with prorated billing. Downgrades take effect at the end of the billing period after content is reduced.",
  },

  // =====================
  // SUPPORT
  // =====================
  {
    id: 26,
    category: "Support",
    question: "How do I get help if I am stuck?",
    answer:
      "Support includes documentation, video tutorials, email support, and a community forum. Email responses are within 48 business hours.",
  },
  {
    id: 27,
    category: "Support",
    question: "Do you offer setup assistance?",
    answer:
      "Yes. Pro subscribers receive a complimentary 30-minute onboarding call. Standard users can book paid consultations.",
  },
  {
    id: 28,
    category: "Support",
    question: "Can you create tours for me?",
    answer:
      "Yes. Custom tour creation services are available on demand via the sales team.",
  },
  {
    id: 29,
    category: "Support",
    question: "How often do you release updates?",
    answer:
      "Minor updates are released monthly and major updates quarterly. All updates are free for active subscribers.",
  },
  {
    id: 30,
    category: "Support",
    question: "Can I request new features?",
    answer:
      "Yes. Feature requests are welcomed and Pro subscribers receive priority consideration.",
  },
];
