import { PrismaClient, Role } from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create demo users
  const hashedPassword = await bcrypt.hash('password123', 10)

  const user1 = await prisma.user.upsert({
    where: { email: 'admin@emeraldai.com' },
    update: {},
    create: {
      email: 'admin@emeraldai.com',
      name: 'Admin User',
      hashedPassword,
    },
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'agent@emeraldai.com' },
    update: {},
    create: {
      email: 'agent@emeraldai.com',
      name: 'Agent User',
      hashedPassword,
    },
  })

  const user3 = await prisma.user.upsert({
    where: { email: 'test@emeraldai.com' },
    update: {},
    create: {
      email: 'test@emeraldai.com',
      name: 'Test User',
      hashedPassword,
    },
  })

  // Create demo organization
  const org = await prisma.organization.upsert({
    where: { id: 'org-demo-1' },
    update: {},
    create: {
      id: 'org-demo-1',
      name: 'Emerald AI Demo',
      industry: 'OTHER',
      country: 'UAE',
      timezone: 'Asia/Dubai',
      primaryLanguage: 'en',
      onboardingCompleted: true,
    },
  })

  // Create memberships (linking users to organization with roles)
  await prisma.membership.upsert({
    where: {
      userId_organizationId: {
        userId: user1.id,
        organizationId: org.id,
      },
    },
    update: {},
    create: {
      userId: user1.id,
      organizationId: org.id,
      role: Role.OWNER,
    },
  })

  await prisma.membership.upsert({
    where: {
      userId_organizationId: {
        userId: user2.id,
        organizationId: org.id,
      },
    },
    update: {},
    create: {
      userId: user2.id,
      organizationId: org.id,
      role: Role.ADMIN,
    },
  })

  await prisma.membership.upsert({
    where: {
      userId_organizationId: {
        userId: user3.id,
        organizationId: org.id,
      },
    },
    update: {},
    create: {
      userId: user3.id,
      organizationId: org.id,
      role: Role.STAFF,
    },
  })

  // Create demo customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      tags: ['lead', 'interested'],
      organizationId: org.id,
    },
  })

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+0987654321',
      tags: ['customer', 'vip'],
      organizationId: org.id,
    },
  })

  // Create demo leads
  await prisma.lead.create({
    data: {
      name: 'Michael Johnson',
      email: 'michael@example.com',
      phone: '+1122334455',
      source: 'Website',
      stage: 'NEW',
      valueEstimation: 5000,
      tags: ['hot-lead'],
      organizationId: org.id,
      customerId: customer1.id,
    },
  })

  // Create demo conversations
  const conversation1 = await prisma.conversation.create({
    data: {
      customerId: customer1.id,
      source: 'WHATSAPP',
      subject: 'Product Inquiry',
      organizationId: org.id,
    },
  })

  const conversation2 = await prisma.conversation.create({
    data: {
      customerId: customer2.id,
      source: 'EMAIL',
      subject: 'Support Request',
      isResolved: true,
      organizationId: org.id,
    },
  })

  // Create demo messages
  await prisma.message.createMany({
    data: [
      {
        conversationId: conversation1.id,
        content: 'Hello! I am interested in your services.',
        role: 'CUSTOMER',
        senderName: 'John Doe',
        organizationId: org.id,
      },
      {
        conversationId: conversation1.id,
        content: 'Thank you for reaching out! How can we help you today?',
        role: 'AI',
        senderName: 'Emerald Assistant',
        organizationId: org.id,
      },
      {
        conversationId: conversation2.id,
        content: 'I would like to schedule a demo.',
        role: 'CUSTOMER',
        senderName: 'Jane Smith',
        organizationId: org.id,
      },
      {
        conversationId: conversation2.id,
        content: 'Sure! Let me help you schedule that.',
        role: 'AGENT',
        senderName: 'Agent User',
        organizationId: org.id,
      },
    ],
  })

  // Create demo bookings
  await prisma.booking.create({
    data: {
      customerId: customer1.id,
      customerName: customer1.name,
      service: 'Product Demo',
      startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), // 1 hour duration
      status: 'SCHEDULED',
      organizationId: org.id,
    },
  })

  // Create demo templates
  await prisma.template.createMany({
    data: [
      {
        name: 'Welcome Message',
        type: 'whatsapp',
        content: 'Hello {{name}}! Welcome to Emerald AI. How can we assist you today?',
        variables: { fields: ['name'] },
        organizationId: org.id,
      },
      {
        name: 'Follow Up Email',
        type: 'email',
        content: 'Hi {{name}}, just following up on our previous conversation. Let me know if you have any questions!',
        variables: { fields: ['name'] },
        organizationId: org.id,
      },
      {
        name: 'Booking Confirmation',
        type: 'sms',
        content: 'Your booking for {{service}} on {{date}} has been confirmed. See you then!',
        variables: { fields: ['service', 'date'] },
        organizationId: org.id,
      },
    ],
  })

  // Create demo subscription
  await prisma.subscription.create({
    data: {
      organizationId: org.id,
      stripeCustomerId: 'cus_demo_' + org.id,
      plan: 'GROWTH',
      status: 'ACTIVE',
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
  })

  // Create demo workflow
  await prisma.workflow.create({
    data: {
      name: 'Auto-respond to new leads',
      description: 'Automatically send welcome message to new leads',
      trigger: 'lead_created',
      actions: {
        steps: [
          { type: 'send_message', template: 'Welcome Message' },
          { type: 'assign_to', userId: user2.id },
        ],
      },
      isActive: true,
      organizationId: org.id,
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log('📧 Demo users:')
  console.log('   - admin@emeraldai.com (password: password123) - Role: OWNER')
  console.log('   - agent@emeraldai.com (password: password123) - Role: ADMIN')
  console.log('   - test@emeraldai.com (password: password123) - Role: STAFF')
  console.log('🏢 Demo organization: Emerald AI Demo')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })