# Emerald AI Suite - System Design Document

## 1. Implementation Approach

### 1.1 Core Technology Decisions

We will implement **Emerald AI Suite** as a modern, production-ready multi-tenant SaaS application using:

- **Next.js 14 App Router** with TypeScript for type safety and modern React patterns
- **PostgreSQL + Prisma ORM** for robust relational data management with type-safe queries
- **NextAuth v5** for authentication with session management and OAuth extensibility
- **Stripe** for subscription billing with webhook-driven state updates
- **Tailwind CSS + shadcn/ui** for consistent, accessible UI components
- **React Hook Form + Zod** for client and server-side validation
- **next-intl** for internationalization (English/Arabic with RTL support)

### 1.2 Architectural Principles

1. **Multi-tenancy First**: All data operations scoped by `organizationId` with middleware enforcement
2. **Server-First Architecture**: Leverage Next.js Server Components and Server Actions for optimal performance
3. **Feature Gating**: Plan-based capability checks before any premium feature access
4. **Progressive Enhancement**: Core features work without JavaScript; enhanced with client-side interactivity
5. **API-Ready**: RESTful API routes under `/api` for future mobile apps or integrations
6. **Modular Design**: Clear separation between public pages, auth flows, and authenticated app

### 1.3 Critical Implementation Tasks

1. **Database Schema & Migrations**
   - Design complete Prisma schema with 17+ models
   - Implement multi-tenant isolation patterns
   - Add performance indexes on high-query columns
   - Set up migration workflow

2. **Authentication System**
   - Configure NextAuth with email/password provider
   - Implement 3-step onboarding wizard
   - Create middleware for route protection and org context
   - Build organization switching mechanism

3. **Billing Integration**
   - Set up Stripe products and prices for 4 plans
   - Implement checkout session creation
   - Build webhook handlers for subscription lifecycle
   - Create feature gating service

4. **Core Modules** (MVP features for each):
   - Dashboard: Metrics cards and activity feed
   - AI Receptionist: Configuration UI (stub AI integration)
   - WhatsApp: Connection setup and rule builder
   - Bookings: Calendar view and CRUD operations
   - CRM: Kanban board with drag-and-drop
   - Inbox: Conversation list and message view
   - Documents: Template selection and generation
   - Content: AI content generation (stub LLM calls)
   - Workflows: Simple trigger-action builder

5. **i18n Implementation**
   - Set up next-intl with English and Arabic locales
   - Implement RTL CSS for Arabic
   - Create language switcher component
   - Translate key UI strings

### 1.4 External Service Stubs

For MVP, the following integrations will be **stubbed** with placeholder functions:

- **AI/LLM calls** (OpenAI, Anthropic): Return mock responses
- **WhatsApp Cloud API**: Mock webhook handlers
- **Twilio Voice**: Placeholder configuration
- **Email sending**: Console log for now
- **PDF generation**: HTML preview only initially

These stubs will have proper interfaces so real implementations can be swapped in later.

---

## 2. Main User-UI Interaction Patterns

### 2.1 New User Journey

1. **Discovery**: User lands on public home page, explores features/pricing
2. **Registration**: Clicks "Start Free Trial" → fills registration form → email verification (optional)
3. **Onboarding**:
   - Step 1: Enter business name, select industry, choose country
   - Step 2: Select primary language (English/Arabic)
   - Step 3: View plan comparison, select starter plan (trial mode)
4. **First Login**: Redirected to `/app` dashboard with welcome tour (optional)
5. **Exploration**: User navigates through modules via sidebar, configures settings
6. **Upgrade**: User goes to Billing, clicks "Upgrade", completes Stripe checkout

### 2.2 Daily Usage Patterns

**Business Owner/Admin**:
- Checks dashboard for daily metrics (inquiries, leads, bookings)
- Reviews inbox for new customer conversations
- Manages bookings in calendar view
- Moves leads through CRM pipeline
- Generates documents (invoices, proposals)
- Adjusts AI receptionist settings based on feedback

**Staff Member**:
- Views assigned leads in CRM
- Responds to customer messages in inbox
- Creates/updates bookings
- Limited access to settings

### 2.3 Key Interactions

1. **Lead Creation**:
   - User clicks "Add Lead" in CRM
   - Fills form (name, contact, source)
   - Lead appears in "New" column of kanban
   - Automated workflow triggers (e.g., send WhatsApp welcome)

2. **Booking Management**:
   - User clicks time slot in calendar
   - Fills booking form (customer, service, time)
   - System finds/creates customer record
   - Confirmation sent via WhatsApp (if configured)
   - Reminder scheduled automatically

3. **AI Content Generation**:
   - User selects content type (e.g., Facebook ad)
   - Fills form (product name, audience, tone)
   - Clicks "Generate"
   - AI generates content (stub for MVP)
   - User edits and saves to drafts

4. **Organization Switching**:
   - User clicks org dropdown in header
   - Sees list of organizations they belong to
   - Selects different org
   - Page reloads with new org context
   - All data now scoped to new org

5. **Subscription Upgrade**:
   - User navigates to Billing
   - Clicks "Upgrade to Growth"
   - Redirected to Stripe Checkout
   - Completes payment
   - Webhook updates subscription in DB
   - User redirected back, sees updated plan
   - New features unlocked immediately

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Public Pages │  │  Auth Pages  │  │  App Pages   │      │
│  │   (/, /pricing)│  │ (/auth/*)    │  │  (/app/*)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js 14 App Router                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Middleware Layer                         │  │
│  │  - Auth Check  - Org Context  - Rate Limiting        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Server       │  │ API Routes   │  │ Server       │    │
│  │ Components   │  │ (/api/*)     │  │ Actions      │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Business Logic Layer                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  NextAuth    │  │ Prisma ORM   │  │ Feature Gate │    │
│  │  (Auth)      │  │ (Data Access)│  │ (Plan Checks)│    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Validation   │  │ i18n         │  │ Services     │    │
│  │ (Zod)        │  │ (next-intl)  │  │ (Business)   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL Database                       │
│  - User, Organization, Membership                           │
│  - Subscription, Lead, Customer, Booking                    │
│  - Conversation, Message, Workflow, Template                │
│  - Document, ContentDraft, Configs, ApiKey                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   External Services                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ Stripe API   │  │ AI Service   │  │ WhatsApp API │    │
│  │ (Billing)    │  │ (Stub)       │  │ (Stub)       │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Folder Structure

```
emerald-ai-suite/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes (no auth)
│   │   ├── page.tsx              # Home page
│   │   ├── pricing/
│   │   ├── features/
│   │   ├── industries/
│   │   ├── privacy-policy/
│   │   └── terms/
│   ├── auth/                     # Auth pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   ├── onboarding/               # Onboarding wizard
│   │   ├── step-1/
│   │   ├── step-2/
│   │   └── step-3/
│   ├── (app)/                    # Protected app routes
│   │   ├── layout.tsx            # App layout with sidebar
│   │   ├── page.tsx              # Dashboard
│   │   ├── receptionist/
│   │   ├── whatsapp/
│   │   ├── chat-widget/
│   │   ├── bookings/
│   │   ├── crm/
│   │   ├── inbox/
│   │   ├── documents/
│   │   ├── content/
│   │   ├── workflows/
│   │   ├── settings/
│   │   └── billing/
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   ├── organizations/
│   │   ├── leads/
│   │   ├── bookings/
│   │   ├── conversations/
│   │   ├── documents/
│   │   ├── content/
│   │   ├── workflows/
│   │   ├── billing/
│   │   └── webhooks/
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── public/                   # Public page components
│   ├── auth/                     # Auth components
│   ├── app/                      # App page components
│   └── shared/                   # Shared components
├── lib/                          # Utility libraries
│   ├── db.ts                     # Prisma client
│   ├── auth.ts                   # NextAuth config
│   ├── stripe.ts                 # Stripe client
│   ├── validations/              # Zod schemas
│   ├── services/                 # Business logic services
│   ├── utils.ts                  # Helper functions
│   └── constants.ts              # App constants
├── prisma/
│   ├── schema.prisma             # Database schema
│   └── migrations/               # DB migrations
├── types/                        # TypeScript types
│   ├── models.ts                 # Prisma model types
│   ├── api.ts                    # API types
│   └── index.ts                  # Exported types
├── middleware.ts                 # Next.js middleware
├── messages/                     # i18n translations
│   ├── en.json
│   └── ar.json
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## 4. UI Navigation Flow

See `ui_navigation.plantuml` for detailed state diagram.

**Key Navigation Principles**:

1. **Depth Limit**: Maximum 3 levels deep (e.g., Dashboard → CRM → Lead Details)
2. **Clear Back Navigation**: Every page has obvious way back (breadcrumbs, back button)
3. **Persistent Sidebar**: Always visible in app, shows current module
4. **High-Frequency Actions**: Dashboard shows quick actions for common tasks
5. **Organization Switcher**: Available in header on all app pages

**Navigation Hierarchy**:

```
Public Site (Level 0)
├── Home
├── Pricing
├── Features
├── Industries
└── Legal Pages

Auth (Level 0)
├── Login
├── Register
└── Password Reset

Onboarding (Level 0)
├── Step 1
├── Step 2
└── Step 3

App (Level 1)
├── Dashboard (Level 1)
├── AI Receptionist (Level 1)
├── WhatsApp (Level 1)
├── Chat Widget (Level 1)
├── Bookings (Level 1)
│   ├── Calendar View (Level 2)
│   ├── Booking List (Level 2)
│   └── Booking Details (Level 3)
├── CRM (Level 1)
│   ├── Lead Kanban (Level 2)
│   └── Lead Details (Level 3)
├── Inbox (Level 1)
│   └── Conversation View (Level 2)
├── Documents (Level 1)
│   ├── Templates (Level 2)
│   └── Document Preview (Level 3)
├── Content (Level 1)
│   └── Content Drafts (Level 2)
├── Workflows (Level 1)
│   └── Workflow Details (Level 2)
├── Settings (Level 1)
│   ├── Business Profile (Level 2)
│   ├── User Management (Level 2)
│   └── API Keys (Level 2)
└── Billing (Level 1)
    ├── Subscription Overview (Level 2)
    └── Billing History (Level 2)
```

---

## 5. Data Structures and Interfaces

See `class_diagram.plantuml` for complete class diagram with all models, enums, and services.

### 5.1 Core Enums

```typescript
enum Role {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  STAFF = "STAFF"
}

enum SubscriptionPlan {
  STARTER = "STARTER",
  GROWTH = "GROWTH",
  PREMIUM = "PREMIUM",
  AGENCY = "AGENCY"
}

enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  PAST_DUE = "PAST_DUE",
  TRIALING = "TRIALING"
}

enum BookingStatus {
  SCHEDULED = "SCHEDULED",
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  NO_SHOW = "NO_SHOW"
}

enum LeadStage {
  NEW = "NEW",
  CONTACTED = "CONTACTED",
  QUALIFIED = "QUALIFIED",
  BOOKED = "BOOKED",
  WON = "WON",
  LOST = "LOST"
}

enum ConversationSource {
  WHATSAPP = "WHATSAPP",
  EMAIL = "EMAIL",
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
  CHAT_WIDGET = "CHAT_WIDGET",
  VOICE = "VOICE"
}

enum MessageRole {
  CUSTOMER = "CUSTOMER",
  AGENT = "AGENT",
  AI = "AI"
}

enum Industry {
  SALON = "SALON",
  CLINIC = "CLINIC",
  REAL_ESTATE = "REAL_ESTATE",
  RESTAURANT = "RESTAURANT",
  CAR_RENTAL = "CAR_RENTAL",
  ECOMMERCE = "ECOMMERCE",
  OTHER = "OTHER"
}
```

### 5.2 Key Interfaces

```typescript
// Auth
interface Session {
  user: {
    id: string;
    email: string;
    name: string;
  };
  currentOrgId: string;
  role: Role;
}

// API Responses
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Feature Gating
interface UsageLimits {
  leads: { current: number; max: number };
  bookings: { current: number; max: number };
  documents: { current: number; max: number };
  contentGenerations: { current: number; max: number };
}

interface PlanFeatures {
  voiceReceptionist: boolean;
  whatsappAutopilot: boolean;
  chatWidget: boolean;
  workflows: boolean;
  apiAccess: boolean;
  whiteLabel: boolean;
  maxLeads: number;
  maxBookings: number;
  maxDocuments: number;
  maxContentGenerations: number;
}

// Service Interfaces
interface IAuthService {
  signUp(email: string, password: string, name: string): Promise<User>;
  signIn(email: string, password: string): Promise<Session>;
  signOut(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  verifyEmail(token: string): Promise<boolean>;
}

interface IOrganizationService {
  createOrganization(data: CreateOrgInput, userId: string): Promise<Organization>;
  getOrganization(orgId: string): Promise<Organization>;
  updateOrganization(orgId: string, data: UpdateOrgInput): Promise<Organization>;
  switchOrganization(userId: string, orgId: string): Promise<void>;
  inviteMember(orgId: string, email: string, role: Role): Promise<Membership>;
  removeMember(orgId: string, userId: string): Promise<void>;
}

interface IFeatureGatingService {
  checkPlanCapability(orgId: string, feature: string): Promise<boolean>;
  getUsageLimits(orgId: string): Promise<UsageLimits>;
  incrementUsage(orgId: string, metric: string): Promise<void>;
  canAccessFeature(orgId: string, feature: string): Promise<boolean>;
}
```

---

## 6. Program Call Flow

See `sequence_diagram.plantuml` for detailed sequence diagrams covering:

1. **User Registration and Onboarding** (3-step wizard)
2. **Lead Creation** (with feature gating and workflow triggers)
3. **Booking Creation** (with customer lookup/creation)
4. **Stripe Subscription Flow** (checkout + webhook handling)
5. **AI Content Generation** (with usage tracking)
6. **Multi-tenant Organization Switching**

### 6.1 Key Flow Patterns

**Multi-tenant Query Pattern**:
```typescript
// All queries MUST include organizationId
const leads = await prisma.lead.findMany({
  where: {
    organizationId: session.currentOrgId, // Always scoped
    stage: "NEW"
  }
});
```

**Feature Gating Pattern**:
```typescript
// Before accessing premium feature
const canAccess = await featureGatingService.checkPlanCapability(
  orgId,
  "voice_receptionist"
);

if (!canAccess) {
  return { error: "Upgrade to Premium to access Voice Receptionist" };
}
```

**Webhook Pattern**:
```typescript
// Stripe webhook handler
export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  
  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutComplete(event.data.object);
      break;
    case "customer.subscription.updated":
      await handleSubscriptionUpdate(event.data.object);
      break;
    case "customer.subscription.deleted":
      await handleSubscriptionCancel(event.data.object);
      break;
  }
  
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
```

---

## 7. Database ER Diagram

See `er_diagram.plantuml` for complete entity-relationship diagram.

### 7.1 Multi-tenant Isolation Strategy

**All tables** (except `User`) include `organizationId` foreign key:

```sql
-- Example: Lead table with multi-tenant isolation
CREATE TABLE "Lead" (
  "id" UUID PRIMARY KEY,
  "organizationId" UUID NOT NULL REFERENCES "Organization"("id"),
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255),
  "phone" VARCHAR(50),
  "stage" VARCHAR(50) NOT NULL,
  -- ... other columns
  
  -- Critical indexes for performance
  INDEX "idx_lead_org" ("organizationId"),
  INDEX "idx_lead_stage" ("organizationId", "stage"),
  INDEX "idx_lead_created" ("organizationId", "createdAt" DESC)
);
```

**Prisma Middleware** enforces organization scoping:

```typescript
prisma.$use(async (params, next) => {
  // Get current org from context
  const orgId = getCurrentOrgId();
  
  // For findMany, findFirst, count, etc.
  if (params.action.startsWith("find") || params.action === "count") {
    params.args.where = {
      ...params.args.where,
      organizationId: orgId
    };
  }
  
  // For create, update, etc.
  if (params.action === "create") {
    params.args.data = {
      ...params.args.data,
      organizationId: orgId
    };
  }
  
  return next(params);
});
```

### 7.2 Key Relationships

- **User ↔ Organization**: Many-to-many via `Membership` (with role)
- **Organization → Subscription**: One-to-one
- **Organization → Leads/Customers/Bookings**: One-to-many
- **Customer → Bookings**: One-to-many
- **Conversation → Messages**: One-to-many
- **Lead/Customer → Conversations**: One-to-many (polymorphic)

### 7.3 Performance Indexes

Critical indexes for common queries:

```prisma
model Lead {
  // ... fields
  
  @@index([organizationId])
  @@index([organizationId, stage])
  @@index([organizationId, createdAt(sort: Desc)])
  @@index([assignedTo])
}

model Booking {
  // ... fields
  
  @@index([organizationId])
  @@index([customerId])
  @@index([organizationId, startTime])
  @@index([organizationId, status])
}

model Conversation {
  // ... fields
  
  @@index([organizationId])
  @@index([customerId])
  @@index([leadId])
  @@index([organizationId, source])
  @@index([organizationId, lastMessageAt(sort: Desc)])
}
```

---

## 8. Authentication Architecture

### 8.1 NextAuth Configuration

```typescript
// lib/auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            memberships: {
              include: { organization: true }
            }
          }
        });
        
        if (!user || !user.hashedPassword) return null;
        
        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        
        if (!isValid) return null;
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          currentOrgId: user.memberships[0]?.organizationId
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.currentOrgId = user.currentOrgId;
      }
      
      // Handle organization switching
      if (trigger === "update" && session?.currentOrgId) {
        token.currentOrgId = session.currentOrgId;
      }
      
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.currentOrgId = token.currentOrgId;
      
      // Get user's role in current org
      const membership = await prisma.membership.findFirst({
        where: {
          userId: token.id,
          organizationId: token.currentOrgId
        }
      });
      
      session.role = membership?.role;
      
      return session;
    }
  }
});
```

### 8.2 Middleware for Route Protection

```typescript
// middleware.ts
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  
  // Public routes
  const isPublicRoute = pathname === "/" || 
                        pathname.startsWith("/pricing") ||
                        pathname.startsWith("/features") ||
                        pathname.startsWith("/industries") ||
                        pathname.startsWith("/privacy-policy") ||
                        pathname.startsWith("/terms");
  
  // Auth routes
  const isAuthRoute = pathname.startsWith("/auth");
  
  // Protected app routes
  const isAppRoute = pathname.startsWith("/app") || 
                     pathname.startsWith("/onboarding");
  
  // Redirect logged-in users away from auth pages
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/app", req.url));
  }
  
  // Redirect non-logged-in users to login
  if (!isLoggedIn && isAppRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  
  // Check if user has completed onboarding
  if (isLoggedIn && isAppRoute && !pathname.startsWith("/onboarding")) {
    // Check if user's current org exists
    if (!req.auth.currentOrgId) {
      return NextResponse.redirect(new URL("/onboarding/step-1", req.url));
    }
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
```

### 8.3 Role-Based Access Control

```typescript
// lib/rbac.ts
import { Role } from "@prisma/client";

const permissions = {
  [Role.OWNER]: [
    "organization:update",
    "organization:delete",
    "members:invite",
    "members:remove",
    "members:update_role",
    "billing:manage",
    "settings:update",
    "leads:*",
    "bookings:*",
    "conversations:*",
    "documents:*",
    "content:*",
    "workflows:*"
  ],
  [Role.ADMIN]: [
    "members:invite",
    "settings:update",
    "leads:*",
    "bookings:*",
    "conversations:*",
    "documents:*",
    "content:*",
    "workflows:*"
  ],
  [Role.STAFF]: [
    "leads:read",
    "leads:update",
    "bookings:read",
    "bookings:create",
    "bookings:update",
    "conversations:read",
    "conversations:reply"
  ]
};

export function hasPermission(role: Role, permission: string): boolean {
  const rolePermissions = permissions[role];
  
  return rolePermissions.some(p => {
    if (p.endsWith(":*")) {
      return permission.startsWith(p.replace(":*", ""));
    }
    return p === permission;
  });
}

// Middleware for API routes
export function requirePermission(permission: string) {
  return async (req: Request, context: any) => {
    const session = await auth();
    
    if (!session || !hasPermission(session.role, permission)) {
      return new Response("Forbidden", { status: 403 });
    }
    
    return context.next();
  };
}
```

---

## 9. API Structure

### 9.1 API Route Organization

```
/api/
├── auth/
│   ├── register/route.ts          # POST - User registration
│   ├── login/route.ts             # POST - User login (handled by NextAuth)
│   └── reset-password/route.ts    # POST - Password reset
├── organizations/
│   ├── route.ts                   # GET - List user's orgs, POST - Create org
│   ├── [orgId]/route.ts           # GET - Get org, PATCH - Update org
│   ├── [orgId]/members/route.ts   # GET - List members, POST - Invite member
│   ├── switch/route.ts            # POST - Switch current org
│   └── user-orgs/route.ts         # GET - Get user's organizations
├── leads/
│   ├── route.ts                   # GET - List leads, POST - Create lead
│   ├── [leadId]/route.ts          # GET - Get lead, PATCH - Update, DELETE
│   └── [leadId]/stage/route.ts    # PATCH - Update lead stage
├── customers/
│   ├── route.ts                   # GET - List customers, POST - Create
│   └── [customerId]/route.ts      # GET, PATCH, DELETE
├── bookings/
│   ├── route.ts                   # GET - List bookings, POST - Create
│   ├── [bookingId]/route.ts       # GET, PATCH, DELETE
│   └── [bookingId]/status/route.ts # PATCH - Update status
├── conversations/
│   ├── route.ts                   # GET - List conversations, POST - Create
│   ├── [convId]/route.ts          # GET - Get conversation
│   └── [convId]/messages/route.ts # GET - List messages, POST - Send message
├── documents/
│   ├── route.ts                   # GET - List documents, POST - Generate
│   ├── [docId]/route.ts           # GET - Get document
│   └── [docId]/pdf/route.ts       # GET - Download PDF
├── content/
│   ├── generate/route.ts          # POST - Generate AI content
│   ├── drafts/route.ts            # GET - List drafts
│   └── drafts/[draftId]/route.ts  # GET, PATCH, DELETE
├── workflows/
│   ├── route.ts                   # GET - List workflows, POST - Create
│   ├── [workflowId]/route.ts      # GET, PATCH, DELETE
│   └── [workflowId]/toggle/route.ts # POST - Activate/deactivate
├── billing/
│   ├── subscription/route.ts      # GET - Get subscription
│   ├── checkout/route.ts          # POST - Create checkout session
│   ├── portal/route.ts            # POST - Create portal session
│   └── cancel/route.ts            # POST - Cancel subscription
├── webhooks/
│   └── stripe/route.ts            # POST - Stripe webhook handler
└── dashboard/
    └── route.ts                   # GET - Dashboard metrics
```

### 9.2 API Response Format

```typescript
// Standardized API response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Success response
return NextResponse.json({
  success: true,
  data: lead,
  message: "Lead created successfully"
}, { status: 201 });

// Error response
return NextResponse.json({
  success: false,
  error: "Lead not found"
}, { status: 404 });
```

### 9.3 Organization-Scoped Query Pattern

```typescript
// Example: GET /api/leads
export async function GET(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const { searchParams } = new URL(req.url);
  const stage = searchParams.get("stage");
  
  const leads = await prisma.lead.findMany({
    where: {
      organizationId: session.currentOrgId, // Always scoped
      ...(stage && { stage: stage as LeadStage })
    },
    orderBy: { createdAt: "desc" }
  });
  
  return NextResponse.json({ success: true, data: leads });
}
```

---

## 10. Billing & Subscription Flow

### 10.1 Stripe Product Setup

Create 4 products in Stripe Dashboard:

1. **Starter** - $49/month (price_starter_monthly)
2. **Growth** - $99/month (price_growth_monthly)
3. **Premium** - $199/month (price_premium_monthly)
4. **Agency** - $499/month (price_agency_monthly)

### 10.2 Checkout Flow

```typescript
// app/api/billing/checkout/route.ts
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await auth();
  const { plan } = await req.json();
  
  const subscription = await prisma.subscription.findUnique({
    where: { organizationId: session.currentOrgId }
  });
  
  const priceId = getPriceIdForPlan(plan);
  
  const checkoutSession = await stripe.checkout.sessions.create({
    customer: subscription.stripeCustomerId,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing`,
    metadata: {
      organizationId: session.currentOrgId,
      plan
    }
  });
  
  return NextResponse.json({ url: checkoutSession.url });
}
```

### 10.3 Webhook Handlers

```typescript
// app/api/webhooks/stripe/route.ts
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
  
  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutComplete(event.data.object);
      break;
      
    case "customer.subscription.updated":
      await handleSubscriptionUpdate(event.data.object);
      break;
      
    case "customer.subscription.deleted":
      await handleSubscriptionCancel(event.data.object);
      break;
      
    case "invoice.payment_failed":
      await handlePaymentFailed(event.data.object);
      break;
  }
  
  return NextResponse.json({ received: true });
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const { organizationId, plan } = session.metadata!;
  
  await prisma.subscription.update({
    where: { organizationId },
    data: {
      stripeSubscriptionId: session.subscription as string,
      plan: plan as SubscriptionPlan,
      status: "ACTIVE",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    }
  });
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  const orgId = subscription.metadata.organizationId;
  
  await prisma.subscription.update({
    where: { organizationId: orgId },
    data: {
      status: subscription.status === "active" ? "ACTIVE" : "PAST_DUE",
      currentPeriodEnd: new Date(subscription.current_period_end * 1000)
    }
  });
}

async function handleSubscriptionCancel(subscription: Stripe.Subscription) {
  const orgId = subscription.metadata.organizationId;
  
  await prisma.subscription.update({
    where: { organizationId: orgId },
    data: {
      status: "CANCELED",
      cancelAtPeriodEnd: true
    }
  });
}
```

### 10.4 Customer Portal

```typescript
// app/api/billing/portal/route.ts
export async function POST(req: Request) {
  const session = await auth();
  
  const subscription = await prisma.subscription.findUnique({
    where: { organizationId: session.currentOrgId }
  });
  
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: subscription.stripeCustomerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing`
  });
  
  return NextResponse.json({ url: portalSession.url });
}
```

---

## 11. Feature Gating System

### 11.1 Plan Features Matrix

```typescript
// lib/feature-gating.ts
const PLAN_FEATURES: Record<SubscriptionPlan, PlanFeatures> = {
  [SubscriptionPlan.STARTER]: {
    voiceReceptionist: false,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: false,
    apiAccess: false,
    whiteLabel: false,
    maxLeads: 200,
    maxBookings: 100,
    maxDocuments: 50,
    maxContentGenerations: 20
  },
  [SubscriptionPlan.GROWTH]: {
    voiceReceptionist: false,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: false,
    whiteLabel: false,
    maxLeads: 1000,
    maxBookings: 500,
    maxDocuments: 200,
    maxContentGenerations: 100
  },
  [SubscriptionPlan.PREMIUM]: {
    voiceReceptionist: true,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: true,
    whiteLabel: false,
    maxLeads: 5000,
    maxBookings: 2000,
    maxDocuments: 1000,
    maxContentGenerations: 500
  },
  [SubscriptionPlan.AGENCY]: {
    voiceReceptionist: true,
    whatsappAutopilot: true,
    chatWidget: true,
    workflows: true,
    apiAccess: true,
    whiteLabel: true,
    maxLeads: -1, // Unlimited
    maxBookings: -1,
    maxDocuments: -1,
    maxContentGenerations: -1
  }
};
```

### 11.2 Feature Gating Service

```typescript
// lib/services/feature-gating.ts
export class FeatureGatingService {
  async checkPlanCapability(
    orgId: string,
    feature: keyof PlanFeatures
  ): Promise<boolean> {
    const subscription = await prisma.subscription.findUnique({
      where: { organizationId: orgId }
    });
    
    if (!subscription || subscription.status !== "ACTIVE") {
      return false;
    }
    
    const features = PLAN_FEATURES[subscription.plan];
    return !!features[feature];
  }
  
  async getUsageLimits(orgId: string): Promise<UsageLimits> {
    const subscription = await prisma.subscription.findUnique({
      where: { organizationId: orgId }
    });
    
    const features = PLAN_FEATURES[subscription.plan];
    
    const [leadsCount, bookingsCount, documentsCount, contentCount] = 
      await Promise.all([
        prisma.lead.count({ where: { organizationId: orgId } }),
        prisma.booking.count({ where: { organizationId: orgId } }),
        prisma.document.count({ where: { organizationId: orgId } }),
        prisma.contentDraft.count({ where: { organizationId: orgId } })
      ]);
    
    return {
      leads: { current: leadsCount, max: features.maxLeads },
      bookings: { current: bookingsCount, max: features.maxBookings },
      documents: { current: documentsCount, max: features.maxDocuments },
      contentGenerations: { current: contentCount, max: features.maxContentGenerations }
    };
  }
  
  async canAccessFeature(
    orgId: string,
    feature: keyof PlanFeatures
  ): Promise<boolean> {
    return this.checkPlanCapability(orgId, feature);
  }
  
  async checkUsageLimit(
    orgId: string,
    metric: "leads" | "bookings" | "documents" | "contentGenerations"
  ): Promise<boolean> {
    const limits = await this.getUsageLimits(orgId);
    const usage = limits[metric];
    
    if (usage.max === -1) return true; // Unlimited
    
    return usage.current < usage.max;
  }
}

export const featureGatingService = new FeatureGatingService();
```

### 11.3 Usage in API Routes

```typescript
// Example: POST /api/leads
export async function POST(req: Request) {
  const session = await auth();
  const data = await req.json();
  
  // Check if user can create more leads
  const canCreate = await featureGatingService.checkUsageLimit(
    session.currentOrgId,
    "leads"
  );
  
  if (!canCreate) {
    return NextResponse.json({
      success: false,
      error: "Lead limit reached. Upgrade your plan to add more leads."
    }, { status: 403 });
  }
  
  const lead = await prisma.lead.create({
    data: {
      ...data,
      organizationId: session.currentOrgId
    }
  });
  
  return NextResponse.json({ success: true, data: lead });
}
```

---

## 12. i18n Architecture

### 12.1 Setup with next-intl

```typescript
// i18n.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
```

```typescript
// middleware.ts (add i18n)
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en"
});

export default function middleware(req) {
  // Run i18n middleware first
  const response = intlMiddleware(req);
  
  // Then run auth middleware
  return auth(req, response);
}
```

### 12.2 Translation Files

```json
// messages/en.json
{
  "common": {
    "appName": "Emerald AI Suite",
    "signIn": "Sign In",
    "signUp": "Sign Up",
    "logout": "Logout",
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "create": "Create"
  },
  "home": {
    "hero": {
      "title": "Your UAE Business, Automated by AI",
      "subtitle": "AI receptionist, WhatsApp autopilot, booking system, CRM & content generator — all in one platform.",
      "ctaPrimary": "Start Free Trial",
      "ctaSecondary": "Book a Demo"
    }
  },
  "dashboard": {
    "title": "Dashboard",
    "metrics": {
      "inquiries": "AI-handled inquiries today",
      "conversations": "WhatsApp conversations",
      "leads": "New leads this week",
      "bookings": "Bookings this week"
    }
  }
}
```

```json
// messages/ar.json
{
  "common": {
    "appName": "إيمرالد إيه آي سويت",
    "signIn": "تسجيل الدخول",
    "signUp": "التسجيل",
    "logout": "تسجيل الخروج",
    "save": "حفظ",
    "cancel": "إلغاء",
    "delete": "حذف",
    "edit": "تعديل",
    "create": "إنشاء"
  },
  "home": {
    "hero": {
      "title": "عملك في الإمارات، مؤتمت بالذكاء الاصطناعي",
      "subtitle": "موظف استقبال ذكي، واتساب أوتوماتيكي، نظام حجوزات، إدارة علاقات العملاء ومولد محتوى — كل شيء في منصة واحدة.",
      "ctaPrimary": "ابدأ تجربة مجانية",
      "ctaSecondary": "احجز عرضاً توضيحياً"
    }
  },
  "dashboard": {
    "title": "لوحة التحكم",
    "metrics": {
      "inquiries": "الاستفسارات التي تعامل معها الذكاء الاصطناعي اليوم",
      "conversations": "محادثات واتساب",
      "leads": "عملاء محتملون جدد هذا الأسبوع",
      "bookings": "الحجوزات هذا الأسبوع"
    }
  }
}
```

### 12.3 RTL Support

```typescript
// app/[locale]/layout.tsx
import { useLocale } from "next-intl";

export default function LocaleLayout({ children }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  
  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className={isRTL ? "rtl" : "ltr"}>
        {children}
      </body>
    </html>
  );
}
```

```css
/* globals.css */
[dir="rtl"] {
  text-align: right;
}

[dir="rtl"] .sidebar {
  left: auto;
  right: 0;
}

[dir="rtl"] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}

/* Use Tailwind's RTL plugin for automatic RTL support */
```

### 12.4 Language Switcher Component

```typescript
// components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };
  
  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale("en")}
        className={locale === "en" ? "font-bold" : ""}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => switchLocale("ar")}
        className={locale === "ar" ? "font-bold" : ""}
      >
        AR
      </button>
    </div>
  );
}
```

---

## 13. State Management

### 13.1 Server Actions for Mutations

```typescript
// app/actions/leads.ts
"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createLead(formData: FormData) {
  const session = await auth();
  
  const lead = await prisma.lead.create({
    data: {
      organizationId: session.currentOrgId,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      source: formData.get("source") as string,
      stage: "NEW"
    }
  });
  
  revalidatePath("/app/crm");
  
  return { success: true, data: lead };
}

export async function updateLeadStage(leadId: string, stage: LeadStage) {
  const session = await auth();
  
  const lead = await prisma.lead.update({
    where: {
      id: leadId,
      organizationId: session.currentOrgId // Security check
    },
    data: { stage }
  });
  
  revalidatePath("/app/crm");
  
  return { success: true, data: lead };
}
```

### 13.2 React Query for Data Fetching

```typescript
// lib/queries/leads.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useLeads(stage?: LeadStage) {
  return useQuery({
    queryKey: ["leads", stage],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (stage) params.set("stage", stage);
      
      const res = await fetch(`/api/leads?${params}`);
      const data = await res.json();
      return data.data;
    }
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: CreateLeadInput) => {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    }
  });
}
```

### 13.3 Form State with React Hook Form

```typescript
// components/forms/CreateLeadForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  source: z.string().min(1, "Source is required")
});

type LeadFormData = z.infer<typeof leadSchema>;

export function CreateLeadForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  });
  
  const onSubmit = async (data: LeadFormData) => {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    
    if (res.ok) {
      onSuccess();
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input {...register("email")} type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      
      <div>
        <label>Phone</label>
        <input {...register("phone")} />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      
      <div>
        <label>Source</label>
        <select {...register("source")}>
          <option value="">Select source</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Website">Website</option>
          <option value="Referral">Referral</option>
        </select>
        {errors.source && <p className="text-red-500">{errors.source.message}</p>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Lead"}
      </button>
    </form>
  );
}
```

---

## 14. Deployment Architecture

### 14.1 Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "prisma generate && next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret",
    "NEXTAUTH_URL": "@nextauth-url",
    "STRIPE_SECRET_KEY": "@stripe-secret-key",
    "STRIPE_WEBHOOK_SECRET": "@stripe-webhook-secret",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY": "@stripe-publishable-key"
  }
}
```

### 14.2 Environment Variables

```bash
# .env.example

# Database (Supabase/Railway/Neon)
DATABASE_URL="postgresql://user:password@host:5432/emerald_ai_suite"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Stripe Price IDs
STRIPE_PRICE_STARTER="price_..."
STRIPE_PRICE_GROWTH="price_..."
STRIPE_PRICE_PREMIUM="price_..."
STRIPE_PRICE_AGENCY="price_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: AI Services (for future)
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""

# Optional: WhatsApp Cloud API
WHATSAPP_PHONE_NUMBER_ID=""
WHATSAPP_ACCESS_TOKEN=""

# Optional: Twilio
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""
TWILIO_PHONE_NUMBER=""
```

### 14.3 Database Setup

**Option 1: Supabase**
```bash
# Create project on Supabase
# Get connection string from Settings > Database
# Add to DATABASE_URL

# Run migrations
npx prisma migrate deploy
```

**Option 2: Railway**
```bash
# Create PostgreSQL service on Railway
# Copy DATABASE_URL from service
# Add to environment variables

# Run migrations
npx prisma migrate deploy
```

**Option 3: Neon**
```bash
# Create project on Neon
# Get connection string
# Add to DATABASE_URL

# Run migrations
npx prisma migrate deploy
```

### 14.4 Build & Deployment Steps

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma client
npx prisma generate

# 3. Run database migrations
npx prisma migrate deploy

# 4. Build Next.js app
npm run build

# 5. Start production server
npm start
```

### 14.5 Post-Deployment Checklist

- [ ] Set up Stripe webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
- [ ] Configure Stripe webhook events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- [ ] Test authentication flow (register, login, logout)
- [ ] Test organization creation and switching
- [ ] Test Stripe checkout and webhook handling
- [ ] Verify feature gating works correctly
- [ ] Test i18n and RTL for Arabic
- [ ] Set up monitoring (Vercel Analytics, Sentry)
- [ ] Configure custom domain and SSL
- [ ] Set up email service for notifications

---

## 15. Anything UNCLEAR

### 15.1 Clarifications Needed

1. **AI/LLM Integration**:
   - Which LLM provider to use for AI features (OpenAI, Anthropic, local model)?
   - Budget for API calls?
   - For MVP, all AI features will be stubbed with placeholder responses

2. **WhatsApp Cloud API**:
   - Will the client provide their own Meta Business account?
   - Should we include setup instructions for WhatsApp Cloud API?
   - For MVP, WhatsApp features will have UI but stub the actual API calls

3. **Twilio Voice Integration**:
   - Is voice receptionist a priority for MVP?
   - Budget for Twilio usage?
   - For MVP, voice features will be configuration-only (no actual calls)

4. **Email Service**:
   - Which email provider (SendGrid, Resend, AWS SES)?
   - For MVP, emails will be logged to console

5. **File Uploads**:
   - Where to store uploaded files (S3, Cloudinary, Vercel Blob)?
   - For MVP, logo uploads can be base64 or skipped

6. **PDF Generation**:
   - Use Puppeteer, Playwright, or a service like DocRaptor?
   - For MVP, documents will render as HTML only

7. **Analytics & Monitoring**:
   - Which tools to integrate (Vercel Analytics, PostHog, Mixpanel)?
   - For MVP, basic Vercel Analytics is sufficient

### 15.2 Assumptions Made

1. **MVP Scope**: All external integrations (AI, WhatsApp, Twilio, Email) will be stubbed with proper interfaces for future implementation
2. **Database**: PostgreSQL via managed service (Supabase recommended for ease)
3. **Deployment**: Vercel for Next.js, managed Postgres for database
4. **Authentication**: Email/password only for MVP (OAuth can be added later)
5. **i18n**: English and Arabic only, with basic translations for key UI elements
6. **File Storage**: Logo uploads will use base64 encoding or be skipped for MVP
7. **PDF Generation**: Documents will render as HTML preview only for MVP
8. **Email**: Console logging for MVP, easy to swap with real service later

### 15.3 Future Enhancements (Post-MVP)

1. Real AI/LLM integration for content generation and receptionist
2. WhatsApp Cloud API integration with message sending/receiving
3. Twilio integration for voice calls
4. Email service integration (transactional emails)
5. File upload to S3/Cloudinary
6. PDF generation service
7. OAuth providers (Google, Microsoft)
8. Mobile apps (React Native)
9. Advanced analytics and reporting
10. White-label customization for Agency plan
11. API documentation and developer portal
12. Webhook system for third-party integrations

---

## Summary

This system design provides a **complete, production-ready architecture** for Emerald AI Suite with:

✅ **Multi-tenant architecture** with organization-scoped data isolation  
✅ **NextAuth authentication** with role-based access control  
✅ **Stripe billing** with webhook-driven subscription management  
✅ **Feature gating** by subscription plan  
✅ **i18n support** for English and Arabic with RTL  
✅ **Clean API structure** with RESTful routes  
✅ **Modular codebase** with clear separation of concerns  
✅ **Database schema** with 17+ models and proper relationships  
✅ **Deployment-ready** for Vercel + managed Postgres  

All external integrations are **stubbed with proper interfaces** for easy future implementation, allowing the team to deliver a fully functional MVP quickly while maintaining extensibility.