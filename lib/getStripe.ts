import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripe: Stripe | null;

export const getStripe = async () => {
  if (!stripe) {
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
  }

  return stripe;
};
