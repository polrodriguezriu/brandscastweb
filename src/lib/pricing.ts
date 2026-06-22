export const TRIAL_COPY =
  "30 day free trial · No credit card required · Cancel anytime";

export const PRICING_PLANS = [
  {
    slug: "starter",
    name: "Starter",
    monthlyPrice: 39,
    yearlyPrice: 29,
    members: 75,
    users: "Up to 3 users",
    aiToolsMinutes: 60,
    support: "Email support",
  },
  {
    slug: "growth",
    name: "Growth",
    monthlyPrice: 89,
    yearlyPrice: 69,
    members: 250,
    users: "Up to 10 users",
    aiToolsMinutes: 180,
    support: "Email support",
  },
  {
    slug: "pro",
    name: "Pro",
    monthlyPrice: 149,
    yearlyPrice: 119,
    members: 500,
    users: "Unlimited users",
    aiToolsMinutes: 360,
    support: "Priority support",
  },
] as const;
