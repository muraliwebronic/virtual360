export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "How do free trials work?",
    answer:
      "Both plans include risk-free trial periods. Standard offers 14 days, Pro offers 7 days. A valid payment method is required to start your trial. We will place a refundable $0.50 authorization charge to verify your card, which will be refunded within 5–7 business days. You will not be charged the subscription fee during your trial period. Create real tours, test all features, and embed on your website. If you love it (and we are confident you will), your subscription begins automatically when your trial ends.",
  },
  {
    id: 2,
    question: "What happens when I hit plan limits?",
    answer:
      "When you approach your plan limits (tours, scenes, or hotspots), the dashboard shows a friendly notification. You can upgrade to Pro at any time to remove limits or selectively delete old content to make room for new projects. Your existing embedded tours continue working even if you pause your subscription.",
  },
  {
    id: 3,
    question: "Can I switch between plans?",
    answer:
      "Absolutely. Upgrade from Standard to Pro instantly at any time. Downgrading from Pro to Standard is also available but requires you to select which tour and which 5 scenes to keep within Standard limits. The process is guided and takes only a few clicks.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards through our secure payment processor Razorpay. International cards work seamlessly. We do not store your card information on our servers.",
  },
  {
    id: 5,
    question: "Are there any setup fees or hidden costs?",
    answer:
      "Never. The price you see is the complete cost. No setup fees, no per-tour fees, no surprise charges, and no bandwidth overages. Your subscription includes unlimited bandwidth for embedded tours.",
  },
  {
    id: 6,
    question: "Do prices include VAT or GST?",
    answer:
      "Prices shown are in USD before applicable taxes. VAT, GST, or sales tax will be calculated and added at checkout based on your billing location, in compliance with local tax regulations.",
  },
  {
    id: 7,
    question: "What is your refund policy?",
    answer:
      "All sales are final. We do not offer refunds on subscriptions. If you cancel your subscription, you will retain access to the service until the end of your current billing period, but no refund will be issued. We encourage you to take advantage of our free trial periods (14 days for Standard, 7 days for Pro) to fully evaluate the service before purchasing.",
  },
  {
    id: 8,
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription at any time. Monthly subscriptions will not be charged again after cancellation. Annual subscriptions will not renew at the end of your billing period. No refunds are provided for remaining time on your subscription, but your tours remain accessible until your current billing period ends.",
  },
  {
    id: 9,
    question: "How do I calculate my return on investment?",
    answer:
      "Use our ROI Calculator section to estimate how quickly your subscription pays for itself based on the number of client projects, property listings, or bookings generated using virtual tours.",
  },
];