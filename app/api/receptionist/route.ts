import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const config = await prisma.receptionistConfig.findUnique({
      where: { organizationId: session.currentOrgId },
    });

    return NextResponse.json({ success: true, data: config });
  } catch (error) {
    console.error("Get receptionist config error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.currentOrgId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { displayName, tone, primaryLanguages, businessInfo, enableVoice, enableChat, twilioPhoneNumber } = body;

    const config = await prisma.receptionistConfig.upsert({
      where: { organizationId: session.currentOrgId },
      update: {
        displayName,
        tone,
        primaryLanguages,
        businessInfo,
        enableVoice,
        enableChat,
        twilioPhoneNumber,
      },
      create: {
        organizationId: session.currentOrgId,
        displayName,
        tone,
        primaryLanguages,
        businessInfo,
        enableVoice,
        enableChat,
        twilioPhoneNumber,
      },
    });

    return NextResponse.json({ success: true, data: config });
  } catch (error) {
    console.error("Save receptionist config error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}