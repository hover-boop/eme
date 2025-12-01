import { SubscriptionPlan } from "@prisma/client"

export const APP_NAME = "Emerald AI Suite"
export const APP_DESCRIPTION = "AI Business Automation Platform for UAE SMEs"

export const PLAN_NAMES = {
  STARTER: "Starter",
  GROWTH: "Growth",
  PREMIUM: "Premium",
  AGENCY: "Agency",
}

export const PLAN_PRICES = {
  STARTER: 49,
  GROWTH: 99,
  PREMIUM: 199,
  AGENCY: 499,
}

export const PLAN_FEATURES: Record<SubscriptionPlan, {
  voiceReceptionist: boolean
  whatsappAutopilot: boolean
  chatWidget: boolean
  workflows: boolean
  apiAccess: boolean
  whiteLabel: boolean
  maxLeads: number
  maxBookings: number
  maxDocuments: number
  maxContentGenerations: number
}> = {
  STARTER: {
    voiceReceptionist: false,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: false,
    apiAccess: false,
    whiteLabel: false,
    maxLeads: 200,
    maxBookings: 100,
    maxDocuments: 50,
    maxContentGenerations: 20,
  },
  GROWTH: {
    voiceReceptionist: false,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: false,
    whiteLabel: false,
    maxLeads: 1000,
    maxBookings: 500,
    maxDocuments: 200,
    maxContentGenerations: 100,
  },
  PREMIUM: {
    voiceReceptionist: true,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: true,
    whiteLabel: false,
    maxLeads: 5000,
    maxBookings: 2000,
    maxDocuments: 1000,
    maxContentGenerations: 500,
  },
  AGENCY: {
    voiceReceptionist: true,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: true,
    whiteLabel: true,
    maxLeads: -1, // Unlimited
    maxBookings: -1,
    maxDocuments: -1,
    maxContentGenerations: -1,
  },
}

export const INDUSTRIES = [
  { value: "SALON", label: "Salon & Spa" },
  { value: "CLINIC", label: "Clinic / Health" },
  { value: "REAL_ESTATE", label: "Real Estate" },
  { value: "RESTAURANT", label: "Restaurant / Café" },
  { value: "CAR_RENTAL", label: "Car Rental / Services" },
  { value: "ECOMMERCE", label: "E-commerce" },
  { value: "OTHER", label: "Other" },
]

export const LEAD_STAGES = [
  { value: "NEW", label: "New", color: "bg-gray-500" },
  { value: "CONTACTED", label: "Contacted", color: "bg-blue-500" },
  { value: "QUALIFIED", label: "Qualified", color: "bg-purple-500" },
  { value: "BOOKED", label: "Booked", color: "bg-yellow-500" },
  { value: "WON", label: "Won", color: "bg-green-500" },
  { value: "LOST", label: "Lost", color: "bg-red-500" },
]

export const BOOKING_STATUSES = [
  { value: "SCHEDULED", label: "Scheduled", color: "bg-blue-500" },
  { value: "CONFIRMED", label: "Confirmed", color: "bg-green-500" },
  { value: "COMPLETED", label: "Completed", color: "bg-gray-500" },
  { value: "CANCELLED", label: "Cancelled", color: "bg-red-500" },
  { value: "NO_SHOW", label: "No Show", color: "bg-orange-500" },
]

export const CONVERSATION_SOURCES = [
  { value: "WHATSAPP", label: "WhatsApp", icon: "MessageCircle" },
  { value: "EMAIL", label: "Email", icon: "Mail" },
  { value: "INSTAGRAM", label: "Instagram", icon: "Instagram" },
  { value: "FACEBOOK", label: "Facebook", icon: "Facebook" },
  { value: "CHAT_WIDGET", label: "Chat Widget", icon: "MessageSquare" },
  { value: "VOICE", label: "Voice", icon: "Phone" },
]