export const PLANS = [
  {
    id: "basic",
    name: "Paraplex Basic",
    price: "Free",
    period: "",
    description: "Ideal for trying LexBot with limited daily research.",
    highlights: [
      "Unlimited AI Powered Research",
      "Unlimited Judgement File Downloads",
      "Supreme Court Files",
      "Instant Case Summaries",
      "Bookmark Answers",
      "Email Support",
    ],
    cta: "Start free",
    emphasis: false,
  },
  {
    id: "supreme",
    name: "Paraplex Supreme",
    price: "₹399",
    period: "/ month",
    description: "For active practitioners who need fast, deep research.",
    highlights: [
      "Unlimited AI Powered Research",
      "Unlimited Judgement File Downloads",
      "Supreme Court Files",
      "High Court Judgements",
      "Tribunals",
      "Instant Case Summaries",
      "Bookmark Answers",
      "Priority Call Support",
    ],
    cta: "Go Supreme",
    emphasis: true,
  },
  {
    id: "ultra",
    name: "Paraplex Ultra",
    price: "₹999",
    period: "/ month",
    description: "For firms and in-house teams that need collaboration.",
    highlights: [
      "Team Workspaces",
      "Centralised Billing",
      "Dedicated Onboarding",
      "Custom Integration",
    ],
    cta: "Upgrade to Ultra",
    emphasis: false,
  },
];

const WHATSAPP_NUMBER = "919999191961";

export const buildWhatsappLink = (planName: string) => {
  const message = `Hi, I want to buy the ${planName} plan on Paraplex. Please assist me with the upgrade process.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};
