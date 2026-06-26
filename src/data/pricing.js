const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for individuals and startups beginning their AI journey.",

    monthlyPrice: {
      USD: 19,
      EUR: 17,
      INR: 1599,
    },

    popular: false,

    buttonText: "Get Started",

    features: [
      "AI Workflow Automation",
      "Real-time Analytics",
      "5 Team Members",
      "10 GB Cloud Storage",
      "Email Support",
    ],
  },

  {
    id: 2,
    name: "Pro",
    description: "Ideal for growing businesses that rely on AI every day.",

    monthlyPrice: {
      USD: 49,
      EUR: 45,
      INR: 4199,
    },

    popular: true,

    buttonText: "Start Free Trial",

    features: [
      "Everything in Starter",
      "Unlimited AI Workflows",
      "Advanced Analytics",
      "Unlimited Team Members",
      "API Access",
      "Priority Support",
    ],
  },

  {
    id: 3,
    name: "Enterprise",
    description: "Enterprise-grade AI platform with dedicated infrastructure.",

    monthlyPrice: {
      USD: 99,
      EUR: 89,
      INR: 8499,
    },

    popular: false,

    buttonText: "Contact Sales",

    features: [
      "Everything in Pro",
      "Dedicated Infrastructure",
      "Unlimited Storage",
      "Single Sign-On",
      "Custom AI Models",
      "24×7 Premium Support",
    ],
  },
];

export default pricingPlans;