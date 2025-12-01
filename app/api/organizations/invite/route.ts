import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { emailService } from "@/lib/services/email-service";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { email, role } = body;

    // Check if user exists
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      // Check if already a member
      const existingMembership = await prisma.membership.findUnique({
        where: {
          userId_organizationId: {
            userId: user.id,
            organizationId: session.currentOrgId,
          },
        },
      });

      if (existingMembership) {
        return NextResponse.json(
          { error: "User is already a member" },
          { status: 400 }
        );
      }

      // Add as member
      await prisma.membership.create({
        data: {
          userId: user.id,
          organizationId: session.currentOrgId,
          role,
        },
      });
    }

    // Get organization details for email
    const organization = await prisma.organization.findUnique({
      where: { id: session.currentOrgId },
    });

    // Send invitation email (stub)
    await emailService.sendTeamInvitation(
      email,
      session.user.name || "Team member",
      organization?.name || "Organization"
    );

    return NextResponse.json({
      success: true,
      message: user ? "Member added successfully" : "Invitation sent",
    });
  } catch (error) {
    console.error("Invite member error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}