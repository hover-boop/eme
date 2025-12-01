import { prisma } from "@/lib/db"
import { PLAN_FEATURES } from "@/lib/constants"
import { SubscriptionPlan } from "@prisma/client"

export interface UsageLimits {
  leads: { current: number; max: number }
  bookings: { current: number; max: number }
  documents: { current: number; max: number }
  contentGenerations: { current: number; max: number }
}

export class FeatureGatingService {
  async checkPlanCapability(
    orgId: string,
    feature: keyof typeof PLAN_FEATURES.STARTER
  ): Promise<boolean> {
    const subscription = await prisma.subscription.findUnique({
      where: { organizationId: orgId }
    })

    if (!subscription || subscription.status !== "ACTIVE") {
      return false
    }

    const features = PLAN_FEATURES[subscription.plan]
    return !!features[feature]
  }

  async getUsageLimits(orgId: string): Promise<UsageLimits> {
    const subscription = await prisma.subscription.findUnique({
      where: { organizationId: orgId }
    })

    const plan = subscription?.plan || SubscriptionPlan.STARTER
    const features = PLAN_FEATURES[plan]

    const [leadsCount, bookingsCount, documentsCount, contentCount] =
      await Promise.all([
        prisma.lead.count({ where: { organizationId: orgId } }),
        prisma.booking.count({ where: { organizationId: orgId } }),
        prisma.document.count({ where: { organizationId: orgId } }),
        prisma.contentDraft.count({ where: { organizationId: orgId } })
      ])

    return {
      leads: { current: leadsCount, max: features.maxLeads },
      bookings: { current: bookingsCount, max: features.maxBookings },
      documents: { current: documentsCount, max: features.maxDocuments },
      contentGenerations: { current: contentCount, max: features.maxContentGenerations }
    }
  }

  async canAccessFeature(
    orgId: string,
    feature: keyof typeof PLAN_FEATURES.STARTER
  ): Promise<boolean> {
    return this.checkPlanCapability(orgId, feature)
  }

  async checkUsageLimit(
    orgId: string,
    metric: "leads" | "bookings" | "documents" | "contentGenerations"
  ): Promise<boolean> {
    const limits = await this.getUsageLimits(orgId)
    const usage = limits[metric]

    if (usage.max === -1) return true // Unlimited

    return usage.current < usage.max
  }
}

export const featureGatingService = new FeatureGatingService()