import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing required environment variables:');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗');
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '✓' : '✗');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupDatabase() {
  console.log('🚀 Starting database setup...');
  console.log('📍 Supabase URL:', supabaseUrl);

  const sql = `
    -- Enable UUID extension
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    -- User table
    CREATE TABLE IF NOT EXISTS "User" (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT,
      image TEXT,
      role TEXT NOT NULL DEFAULT 'user',
      "organizationId" TEXT,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Organization table
    CREATE TABLE IF NOT EXISTS "Organization" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name TEXT NOT NULL,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Contact table
    CREATE TABLE IF NOT EXISTS "Contact" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      "whatsappNumber" TEXT,
      tags TEXT[] DEFAULT ARRAY[]::TEXT[],
      "customFields" JSONB DEFAULT '{}'::jsonb,
      "organizationId" TEXT NOT NULL,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Conversation table
    CREATE TABLE IF NOT EXISTS "Conversation" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      "contactId" TEXT NOT NULL,
      channel TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'open',
      "assignedToId" TEXT,
      "organizationId" TEXT NOT NULL,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Message table
    CREATE TABLE IF NOT EXISTS "Message" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      "conversationId" TEXT NOT NULL,
      content TEXT NOT NULL,
      direction TEXT NOT NULL,
      channel TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'sent',
      metadata JSONB DEFAULT '{}'::jsonb,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Campaign table
    CREATE TABLE IF NOT EXISTS "Campaign" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'draft',
      "templateId" TEXT,
      "scheduledFor" TIMESTAMP(3),
      "organizationId" TEXT NOT NULL,
      "createdById" TEXT NOT NULL,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Template table
    CREATE TABLE IF NOT EXISTS "Template" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      content TEXT NOT NULL,
      variables TEXT[] DEFAULT ARRAY[]::TEXT[],
      "organizationId" TEXT NOT NULL,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Subscription table
    CREATE TABLE IF NOT EXISTS "Subscription" (
      id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
      "organizationId" TEXT UNIQUE NOT NULL,
      plan TEXT NOT NULL DEFAULT 'free',
      status TEXT NOT NULL DEFAULT 'active',
      "currentPeriodStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "currentPeriodEnd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP + INTERVAL '30 days',
      "stripeCustomerId" TEXT,
      "stripeSubscriptionId" TEXT,
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Add foreign key constraints
    ALTER TABLE "User" DROP CONSTRAINT IF EXISTS "User_organizationId_fkey";
    ALTER TABLE "User" ADD CONSTRAINT "User_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE SET NULL ON UPDATE CASCADE;

    ALTER TABLE "Contact" DROP CONSTRAINT IF EXISTS "Contact_organizationId_fkey";
    ALTER TABLE "Contact" ADD CONSTRAINT "Contact_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Conversation" DROP CONSTRAINT IF EXISTS "Conversation_contactId_fkey";
    ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_contactId_fkey" 
      FOREIGN KEY ("contactId") REFERENCES "Contact"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Conversation" DROP CONSTRAINT IF EXISTS "Conversation_assignedToId_fkey";
    ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_assignedToId_fkey" 
      FOREIGN KEY ("assignedToId") REFERENCES "User"(id) ON DELETE SET NULL ON UPDATE CASCADE;

    ALTER TABLE "Conversation" DROP CONSTRAINT IF EXISTS "Conversation_organizationId_fkey";
    ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Message" DROP CONSTRAINT IF EXISTS "Message_conversationId_fkey";
    ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" 
      FOREIGN KEY ("conversationId") REFERENCES "Conversation"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Campaign" DROP CONSTRAINT IF EXISTS "Campaign_templateId_fkey";
    ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_templateId_fkey" 
      FOREIGN KEY ("templateId") REFERENCES "Template"(id) ON DELETE SET NULL ON UPDATE CASCADE;

    ALTER TABLE "Campaign" DROP CONSTRAINT IF EXISTS "Campaign_organizationId_fkey";
    ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Campaign" DROP CONSTRAINT IF EXISTS "Campaign_createdById_fkey";
    ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_createdById_fkey" 
      FOREIGN KEY ("createdById") REFERENCES "User"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Template" DROP CONSTRAINT IF EXISTS "Template_organizationId_fkey";
    ALTER TABLE "Template" ADD CONSTRAINT "Template_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    ALTER TABLE "Subscription" DROP CONSTRAINT IF EXISTS "Subscription_organizationId_fkey";
    ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_organizationId_fkey" 
      FOREIGN KEY ("organizationId") REFERENCES "Organization"(id) ON DELETE RESTRICT ON UPDATE CASCADE;

    -- Create indexes
    CREATE INDEX IF NOT EXISTS "User_email_idx" ON "User"(email);
    CREATE INDEX IF NOT EXISTS "User_organizationId_idx" ON "User"("organizationId");
    CREATE INDEX IF NOT EXISTS "Contact_organizationId_idx" ON "Contact"("organizationId");
    CREATE INDEX IF NOT EXISTS "Contact_email_idx" ON "Contact"(email);
    CREATE INDEX IF NOT EXISTS "Contact_phone_idx" ON "Contact"(phone);
    CREATE INDEX IF NOT EXISTS "Conversation_contactId_idx" ON "Conversation"("contactId");
    CREATE INDEX IF NOT EXISTS "Conversation_organizationId_idx" ON "Conversation"("organizationId");
    CREATE INDEX IF NOT EXISTS "Conversation_status_idx" ON "Conversation"(status);
    CREATE INDEX IF NOT EXISTS "Message_conversationId_idx" ON "Message"("conversationId");
    CREATE INDEX IF NOT EXISTS "Campaign_organizationId_idx" ON "Campaign"("organizationId");
    CREATE INDEX IF NOT EXISTS "Template_organizationId_idx" ON "Template"("organizationId");
  `;

  try {
    // Use Prisma to execute the SQL since we already have DATABASE_URL configured
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    
    console.log('📝 Executing SQL to create tables...');
    await prisma.$executeRawUnsafe(sql);
    
    console.log('✅ Database tables created successfully!');
    console.log('📊 Created tables: User, Organization, Contact, Conversation, Message, Campaign, Template, Subscription');
    
    await prisma.$disconnect();
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();