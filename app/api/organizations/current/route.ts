import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const organization = await prisma.organization.findUnique({
      where: { id: session.currentOrgId },
      include: { subscription: true },
    });

    return NextResponse.json({ success: true, data: organization });
  } catch (error) {
    console.error("Get organization error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, industry, country, primaryLanguage, secondaryLanguage } = body;

    const organization = await prisma.organization.update({
      where: { id: session.currentOrgId },
      data: {
        ...(name && { name }),
        ...(industry && { industry }),
        ...(country && { country }),
        ...(primaryLanguage && { primaryLanguage }),
        ...(secondaryLanguage !== undefined && { secondaryLanguage }),
      },
    });

    return NextResponse.json({ success: true, data: organization });
  } catch (error) {
    console.error("Update organization error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}