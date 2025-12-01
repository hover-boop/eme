# Emerald AI Suite

A production-ready multi-tenant SaaS web application for UAE-based SMEs. An AI Business Automation Platform featuring AI receptionist, WhatsApp autopilot, booking system, CRM, and content generator.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth v5 with email/password
- **Billing**: Stripe subscriptions
- **i18n**: next-intl (English + Arabic with RTL support)
- **State Management**: React Query + Server Actions
- **Form Validation**: React Hook Form + Zod

## 📋 Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database (Supabase, Railway, or Neon recommended)
- Stripe account for billing
- Git

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd emerald-ai-suite
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- Stripe Price IDs for each plan (create products in Stripe Dashboard)

4. **Set up the database**
```bash
# Generate Prisma client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Seed the database with demo data
pnpm db:seed
```

5. **Run the development server**
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Demo Accounts

After seeding, you can log in with these accounts:

- **Salon Owner**: owner@salon.com / password123
- **Clinic Admin**: admin@clinic.com / password123
- **Salon Staff**: staff@salon.com / password123

## 📦 Project Structure

```
emerald-ai-suite/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public marketing pages
│   ├── auth/              # Authentication pages
│   ├── onboarding/        # 3-step onboarding wizard
│   ├── (app)/             # Protected app pages
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── public/           # Public page components
│   ├── auth/             # Auth components
│   ├── app/              # App-specific components
│   └── shared/           # Shared components
├── lib/                   # Utility libraries
│   ├── db.ts             # Prisma client
│   ├── auth.ts           # NextAuth config
│   ├── stripe.ts         # Stripe client
│   ├── validations/      # Zod schemas
│   ├── services/         # Business logic
│   └── hooks/            # Custom React hooks
├── prisma/               # Database schema & migrations
├── types/                # TypeScript types
├── messages/             # i18n translations
└── docs/                 # Documentation
```

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm db:push      # Push schema changes to database
pnpm db:migrate   # Create and run migrations
pnpm db:seed      # Seed database with demo data
pnpm db:studio    # Open Prisma Studio
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Database Setup

**Option 1: Supabase**
1. Create project at [supabase.com](https://supabase.com)
2. Get connection string from Settings > Database
3. Add to `DATABASE_URL` in environment variables
4. Run migrations: `pnpm prisma migrate deploy`

**Option 2: Railway**
1. Create PostgreSQL service at [railway.app](https://railway.app)
2. Copy `DATABASE_URL` from service
3. Add to environment variables
4. Run migrations: `pnpm prisma migrate deploy`

**Option 3: Neon**
1. Create project at [neon.tech](https://neon.tech)
2. Get connection string
3. Add to environment variables
4. Run migrations: `pnpm prisma migrate deploy`

### Stripe Setup

1. Create products in Stripe Dashboard:
   - Starter ($49/month)
   - Growth ($99/month)
   - Premium ($199/month)
   - Agency ($499/month)

2. Copy Price IDs to environment variables

3. Set up webhook endpoint:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
   - Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

## 🎨 Features

### Public Marketing Website
- Home page with hero, features, testimonials
- Pricing page with plan comparison
- Features page
- Industries page (Salons, Clinics, Real Estate, etc.)
- Legal pages (Privacy Policy, Terms)

### Authentication & Onboarding
- Email/password authentication
- 3-step onboarding wizard
- Organization creation
- Multi-tenant support

### Dashboard Modules
1. **Dashboard**: Metrics, charts, recent activity
2. **AI Receptionist**: Voice + chat configuration
3. **WhatsApp Autopilot**: Auto-reply rules and templates
4. **Chat Widget**: Customizable website chat
5. **Bookings**: Calendar view and management
6. **CRM**: Kanban board for lead pipeline
7. **Inbox**: Multi-channel conversations
8. **Documents**: AI-powered document generation
9. **Content**: AI content generator for social media
10. **Workflows**: Automation rules
11. **Settings**: Business profile, team, API keys
12. **Billing**: Subscription management with Stripe

### Feature Gating
- Plan-based access control
- Usage limits (leads, bookings, documents, content)
- Upgrade prompts

### i18n Support
- English and Arabic translations
- RTL layout for Arabic
- Language switcher

## 🔐 Security

- NextAuth for authentication
- Role-based access control (OWNER, ADMIN, STAFF)
- Multi-tenant data isolation
- Secure password hashing with bcrypt
- CSRF protection
- Environment variable validation

## 📝 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth handlers

### Organizations
- `GET /api/organizations` - List user's organizations
- `POST /api/organizations` - Create organization
- `GET /api/organizations/[orgId]` - Get organization
- `PATCH /api/organizations/[orgId]` - Update organization

### Leads
- `GET /api/leads` - List leads
- `POST /api/leads` - Create lead
- `GET /api/leads/[leadId]` - Get lead
- `PATCH /api/leads/[leadId]` - Update lead
- `DELETE /api/leads/[leadId]` - Delete lead

### Billing
- `POST /api/billing/checkout` - Create Stripe checkout session
- `POST /api/billing/portal` - Create Stripe portal session
- `POST /api/webhooks/stripe` - Stripe webhook handler

## 🚧 Stub Services (For Future Integration)

The following services are stubbed with proper interfaces:

- **AI Service** (`lib/services/ai-service.ts`): OpenAI/Anthropic integration
- **WhatsApp Service** (`lib/services/whatsapp-service.ts`): Meta Cloud API
- **Voice Service** (`lib/services/voice-service.ts`): Twilio integration
- **Email Service** (`lib/services/email-service.ts`): SendGrid/Resend
- **PDF Service** (`lib/services/pdf-service.ts`): Puppeteer/PDFKit

## 🤝 Contributing

This is a production-ready application. For modifications:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

For support, email support@emeraldai.ae or open an issue in the repository.

## 🎯 Roadmap

- [ ] Real AI/LLM integration
- [ ] WhatsApp Cloud API integration
- [ ] Twilio voice integration
- [ ] Email service integration
- [ ] PDF generation service
- [ ] OAuth providers (Google, Microsoft)
- [ ] Mobile apps (React Native)
- [ ] Advanced analytics
- [ ] White-label customization
- [ ] API documentation portal
- [ ] Webhook system for third-party integrations