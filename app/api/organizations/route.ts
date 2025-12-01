import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { Industry, SubscriptionPlan, SubscriptionStatus, Role } from "@prisma/client";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const memberships = await prisma.membership.findMany({
      where: { userId: session.user.id },
      include: {
        organization: {
          include: {
            subscription: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: memberships.map((m) => ({
        ...m.organization,
        role: m.role,
      })),
    });
  } catch (error) {
    console.error("Get organizations error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, industry, country, primaryLanguage, secondaryLanguage, plan } = body;

    // Validate input
    if (!name || !industry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Stripe customer
    const stripeCustomer = await stripe.customers.create({
      email: session.user.email!,
      name: session.user.name || undefined,
      metadata: {
        userId: session.user.id,
      },
    });

    // Create organization with subscription
    const organization = await prisma.organization.create({
      data: {
        name,
        industry: industry as Industry,
        country: country || "UAE",
        primaryLanguage: primaryLanguage || "en",
        secondaryLanguage: secondaryLanguage || null,
        onboardingCompleted: true,
        memberships: {
          create: {
            userId: session.user.id,
            role: Role.OWNER,
          },
        },
        subscription: {
          create: {
            stripeCustomerId: stripeCustomer.id,
            plan: (plan as SubscriptionPlan) || SubscriptionPlan.STARTER,
            status: SubscriptionStatus.TRIALING,
            currentPeriodStart: new Date(),
            currentPeriodEnd: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
          },
        },
      },
      include: {
        subscription: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: organization,
    }, { status: 201 });
  } catch (error) {
    console.error("Create organization error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}