import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { featureGatingService } from "@/lib/services/feature-gating";
import { BookingStatus } from "@prisma/client";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = await prisma.booking.findMany({
      where: { organizationId: session.currentOrgId },
      orderBy: { startTime: "desc" },
      include: { customer: true },
    });

    return NextResponse.json({ success: true, data: bookings });
  } catch (error) {
    console.error("Get bookings error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const canCreate = await featureGatingService.checkUsageLimit(
      session.currentOrgId,
      "bookings"
    );

    if (!canCreate) {
      return NextResponse.json(
        { error: "Booking limit reached. Upgrade your plan." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { customerName, service, startTime, endTime, notes } = body;

    // Find or create customer
    let customer = await prisma.customer.findFirst({
      where: {
        organizationId: session.currentOrgId,
        name: customerName,
      },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          organizationId: session.currentOrgId,
          name: customerName,
        },
      });
    }

    const booking = await prisma.booking.create({
      data: {
        organizationId: session.currentOrgId,
        customerId: customer.id,
        customerName,
        service,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        status: BookingStatus.SCHEDULED,
        notes,
      },
    });

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error) {
    console.error("Create booking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}