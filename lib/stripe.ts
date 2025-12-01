import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia" as any,
  typescript: true,
})

export const STRIPE_PRICE_IDS = {
  STARTER: process.env.STRIPE_PRICE_STARTER || "",
  GROWTH: process.env.STRIPE_PRICE_GROWTH || "",
  PREMIUM: process.env.STRIPE_PRICE_PREMIUM || "",
  AGENCY: process.env.STRIPE_PRICE_AGENCY || "",
}