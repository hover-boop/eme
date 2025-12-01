# Product Requirements Document: Emerald AI Suite

## 1. Product Overview

### 1.1 Product Name
**Emerald AI Suite** - AI Business Automation Platform for UAE SMEs

### 1.2 Product Vision
Emerald AI Suite is a production-ready, multi-tenant SaaS web application designed to revolutionize business operations for UAE-based small and medium enterprises (SMEs). The platform provides comprehensive AI-powered automation tools that handle customer interactions, bookings, lead management, content generation, and business documentation - all within a single, integrated solution.

### 1.3 Product Goals
1. **Operational Efficiency**: Reduce manual workload by 70% through AI-powered automation of routine business tasks including customer inquiries, appointment scheduling, and lead qualification
2. **Revenue Growth**: Increase customer conversion rates by 40% through 24/7 AI-powered customer engagement, instant response times, and intelligent lead nurturing across multiple channels
3. **Market Accessibility**: Provide enterprise-grade AI automation tools at SME-friendly pricing ($49-$499/month) with full Arabic language support and UAE-specific business templates

### 1.4 Target Market
- **Primary Market**: UAE-based SMEs across 6 key verticals
  - Beauty & Wellness (Salons, Spas)
  - Healthcare (Clinics, Medical Centers)
  - Real Estate Agencies
  - Food & Beverage (Restaurants, Cafés)
  - Automotive Services (Car Rentals, Service Centers)
  - E-commerce Brands

- **Market Size**: 
  - UAE SME market: ~350,000+ businesses
  - Target addressable market: 50,000+ businesses in key verticals
  - Initial focus: Dubai and Abu Dhabi metro areas

### 1.5 Success Metrics
- User acquisition: 1,000 paying customers within 12 months
- Monthly Recurring Revenue (MRR): $100,000 within 12 months
- Customer retention rate: >85% after 6 months
- Average AI automation usage: >500 interactions per customer per month
- Customer satisfaction (NPS): >50

## 2. User Stories

### 2.1 Primary User Stories

**US-1: Salon Owner - Automated Booking Management**
> As a salon owner in Dubai, I want an AI assistant to handle appointment bookings via WhatsApp and phone calls 24/7, so that I never miss a booking opportunity and my staff can focus on serving customers instead of answering calls.

**US-2: Real Estate Agent - Lead Qualification**
> As a real estate agent, I want an AI system to automatically qualify property inquiries from WhatsApp, Instagram, and my website, so that I can focus my time on high-value leads and close more deals.

**US-3: Clinic Manager - Multi-Channel Patient Communication**
> As a clinic manager, I want a unified inbox that consolidates patient messages from WhatsApp, email, and website chat with AI-suggested responses, so that I can respond quickly to all patient inquiries without switching between multiple apps.

**US-4: Restaurant Owner - Content Marketing Automation**
> As a restaurant owner, I want AI to generate social media posts, promotional ads, and menu descriptions in both English and Arabic, so that I can maintain consistent marketing without hiring expensive agencies.

**US-5: Car Rental Business - Document Automation**
> As a car rental business owner, I want to automatically generate rental agreements, invoices, and contracts with customer details pre-filled, so that I can process rentals faster and reduce paperwork errors.

## 3. Competitive Analysis

### 3.1 Competitor Overview

**Competitor 1: Zendesk Suite**
- **Strengths**: 
  - Mature platform with extensive integrations
  - Strong multi-channel support
  - Enterprise-grade reliability
- **Weaknesses**:
  - Expensive ($55-$115/agent/month)
  - Complex setup requiring technical expertise
  - No Arabic language optimization
  - No UAE-specific features or templates
- **Market Position**: Enterprise-focused, high complexity

**Competitor 2: HubSpot CRM**
- **Strengths**:
  - Comprehensive CRM features
  - Strong marketing automation
  - Good free tier for basic features
- **Weaknesses**:
  - Limited AI capabilities
  - No voice AI receptionist
  - Expensive for full feature set ($800+/month)
  - No RTL or Arabic optimization
- **Market Position**: Mid-market to enterprise, marketing-focused

**Competitor 3: Intercom**
- **Strengths**:
  - Excellent chat widget and messaging
  - Good AI chatbot capabilities
  - Modern, user-friendly interface
- **Weaknesses**:
  - Expensive ($74-$395/month base + per-seat costs)
  - Limited to chat/messaging (no voice, no WhatsApp automation)
  - No business document generation
  - No Arabic support
- **Market Position**: Mid-market, customer support-focused

**Competitor 4: ManyChat**
- **Strengths**:
  - Strong WhatsApp and social media automation
  - Visual flow builder
  - Affordable pricing ($15-$145/month)
- **Weaknesses**:
  - Limited to messaging automation only
  - No CRM, no booking system, no document generation
  - Basic AI capabilities
  - No voice features
- **Market Position**: SMB, messaging automation specialist

**Competitor 5: Calendly + Zapier + ChatGPT (DIY Stack)**
- **Strengths**:
  - Flexible, can be customized
  - Individual tools are well-built
  - Can achieve similar functionality
- **Weaknesses**:
  - Requires technical knowledge to set up
  - Multiple subscriptions needed ($50-150/month total)
  - No unified interface
  - Time-consuming to maintain
  - No Arabic optimization
- **Market Position**: DIY solution for tech-savvy users

**Competitor 6: Tidio**
- **Strengths**:
  - Affordable ($29-$749/month)
  - Live chat + chatbot combo
  - Easy to use
- **Weaknesses**:
  - Limited AI capabilities
  - No voice features
  - No document generation or content creation
  - Basic CRM only
  - No Arabic support
- **Market Position**: Small business, basic automation

**Competitor 7: Local UAE Solutions (e.g., Verloop.io, Yellow.ai in MENA)**
- **Strengths**:
  - Some Arabic language support
  - Regional market understanding
  - Conversational AI focus
- **Weaknesses**:
  - Enterprise pricing (custom quotes, typically $500+/month)
  - Limited SME focus
  - Incomplete feature sets (no booking, limited CRM)
  - Complex implementation
- **Market Position**: Enterprise-focused, regional players

### 3.2 Competitive Quadrant Chart

```mermaid
quadrantChart
    title "UAE SME Business Automation Market Positioning"
    x-axis "Low Feature Completeness" --> "High Feature Completeness"
    y-axis "Low SME Affordability" --> "High SME Affordability"
    quadrant-1 "Market Leaders"
    quadrant-2 "Niche Players"
    quadrant-3 "Enterprise Solutions"
    quadrant-4 "Limited Offerings"
    "Zendesk": [0.75, 0.15]
    "HubSpot": [0.70, 0.25]
    "Intercom": [0.60, 0.20]
    "ManyChat": [0.35, 0.75]
    "Tidio": [0.30, 0.80]
    "DIY Stack": [0.55, 0.50]
    "Local UAE Solutions": [0.50, 0.20]
    "Emerald AI Suite": [0.85, 0.70]
```

### 3.3 Competitive Advantages

**Emerald AI Suite's Unique Value Proposition:**

1. **All-in-One Platform**: Only solution combining AI receptionist (voice + chat), WhatsApp automation, booking system, CRM, document generation, and content creation in one platform
2. **UAE-Optimized**: Native Arabic support with RTL, UAE-specific templates, and understanding of local business practices
3. **SME-Focused Pricing**: $49-$199/month for most businesses vs. $500-2000/month for competitors
4. **Production-Ready**: No complex setup or technical expertise required - ready to use in minutes
5. **AI-First Architecture**: Every module powered by AI, not just chatbots - from lead qualification to document generation
6. **Multi-Tenant Flexibility**: Support for agencies managing multiple client businesses

## 4. Requirements Analysis

### 4.1 Functional Requirements Overview

Emerald AI Suite must deliver a comprehensive business automation platform that addresses the complete customer lifecycle - from initial inquiry through booking, service delivery, and ongoing relationship management. The system must support multiple user roles within organizations, handle multi-channel communications, automate repetitive tasks, and provide actionable business insights.

The platform architecture follows a multi-tenant model where each organization operates in complete data isolation while sharing the underlying infrastructure. This enables efficient resource utilization while maintaining security and privacy standards required for business applications handling sensitive customer data.

### 4.2 Technical Architecture Requirements

**Frontend Architecture:**
- Next.js 14 App Router for optimal performance and SEO
- Server-side rendering for public pages (marketing site)
- Client-side rendering with React Server Components for app dashboard
- Progressive Web App (PWA) capabilities for mobile experience
- Responsive design supporting desktop (1920px), tablet (768px), and mobile (375px) breakpoints

**Backend Architecture:**
- API Routes using Next.js Route Handlers under `/api`
- RESTful API design with consistent response formats
- Server Actions for form submissions and mutations
- Middleware for authentication, authorization, and organization context
- Webhook handlers for Stripe and external integrations

**Database Architecture:**
- PostgreSQL for relational data storage
- Prisma ORM for type-safe database access
- Multi-tenant data isolation by organizationId
- Optimized indexes for common query patterns
- Database migrations managed through Prisma Migrate

**Authentication & Authorization:**
- NextAuth v4 for authentication management
- Email/password authentication (OAuth-ready for future)
- Role-based access control (OWNER, ADMIN, STAFF)
- Organization-scoped permissions
- Session management with secure HTTP-only cookies

**State Management:**
- React Query for server state management
- React Context for global UI state
- Local state with useState/useReducer for component state
- Form state with React Hook Form

**Internationalization:**
- next-intl or custom i18n solution
- English and Arabic language support
- RTL layout support for Arabic
- Language switcher in navigation
- Locale-based routing

### 4.3 Data Models & Relationships

**Core Entities:**

1. **User Model**
   - id (UUID, primary key)
   - email (unique, indexed)
   - name
   - hashedPassword
   - emailVerified (timestamp)
   - image (optional)
   - createdAt
   - updatedAt

2. **Organization Model**
   - id (UUID, primary key)
   - name
   - industry (enum: SALON, CLINIC, REAL_ESTATE, RESTAURANT, CAR_RENTAL, ECOMMERCE)
   - country (default: UAE)
   - logo (optional)
   - address
   - phone
   - timezone (default: Asia/Dubai)
   - primaryLanguage (enum: EN, AR)
   - createdAt
   - updatedAt

3. **Membership Model** (Join table for User-Organization many-to-many)
   - id (UUID, primary key)
   - userId (foreign key)
   - organizationId (foreign key)
   - role (enum: OWNER, ADMIN, STAFF)
   - createdAt
   - updatedAt
   - Unique constraint on (userId, organizationId)

4. **Subscription Model**
   - id (UUID, primary key)
   - organizationId (foreign key, unique)
   - plan (enum: STARTER, GROWTH, PREMIUM, AGENCY)
   - status (enum: ACTIVE, CANCELLED, PAST_DUE, TRIALING)
   - stripeCustomerId
   - stripeSubscriptionId
   - currentPeriodStart
   - currentPeriodEnd
   - cancelAtPeriodEnd (boolean)
   - createdAt
   - updatedAt

5. **Lead Model**
   - id (UUID, primary key)
   - organizationId (foreign key, indexed)
   - name
   - email
   - phone
   - source (enum: WHATSAPP, WEBSITE, INSTAGRAM, FACEBOOK, EMAIL, PHONE, WALK_IN)
   - stage (enum: NEW, CONTACTED, QUALIFIED, BOOKED, WON, LOST)
   - valueEstimation (decimal)
   - assignedToUserId (foreign key, optional)
   - notes (text)
   - tags (array)
   - createdAt
   - updatedAt

6. **Customer Model**
   - id (UUID, primary key)
   - organizationId (foreign key, indexed)
   - name
   - email
   - phone
   - address
   - notes
   - tags (array)
   - totalBookings (integer)
   - totalSpent (decimal)
   - createdAt
   - updatedAt

7. **Booking Model**
   - id (UUID, primary key)
   - organizationId (foreign key, indexed)
   - customerId (foreign key)
   - service
   - startTime (timestamp, indexed)
   - endTime (timestamp)
   - status (enum: SCHEDULED, COMPLETED, CANCELLED, NO_SHOW)
   - notes
   - reminderSent (boolean)
   - createdAt
   - updatedAt

8. **Conversation Model**
   - id (UUID, primary key)
   - organizationId (foreign key, indexed)
   - leadId or customerId (foreign key, optional)
   - channel (enum: WHATSAPP, EMAIL, INSTAGRAM, FACEBOOK, CHAT_WIDGET, PHONE)
   - status (enum: OPEN, CLOSED, PENDING)
   - assignedToUserId (foreign key, optional)
   - lastMessageAt (timestamp, indexed)
   - createdAt
   - updatedAt

9. **Message Model**
   - id (UUID, primary key)
   - conversationId (foreign key, indexed)
   - role (enum: CUSTOMER, AGENT, AI)
   - content (text)
   - metadata (JSON - for attachments, etc.)
   - createdAt

10. **Workflow Model**
    - id (UUID, primary key)
    - organizationId (foreign key, indexed)
    - name
    - trigger (enum: NEW_WHATSAPP_MESSAGE, NEW_LEAD, BOOKING_CREATED, etc.)
    - actions (JSON array)
    - isActive (boolean)
    - createdAt
    - updatedAt

11. **Template Model**
    - id (UUID, primary key)
    - organizationId (foreign key, indexed)
    - type (enum: WHATSAPP_MESSAGE, EMAIL, DOCUMENT)
    - name
    - content (text)
    - variables (JSON array)
    - createdAt
    - updatedAt

12. **Document Model**
    - id (UUID, primary key)
    - organizationId (foreign key, indexed)
    - type (enum: INVOICE, PROPOSAL, CONTRACT, QUOTATION, NDA, RENTAL_AGREEMENT)
    - title
    - content (JSON)
    - generatedBy (userId, foreign key)
    - recipientName
    - recipientEmail
    - status (enum: DRAFT, SENT, SIGNED)
    - createdAt
    - updatedAt

13. **ContentDraft Model**
    - id (UUID, primary key)
    - organizationId (foreign key, indexed)
    - type (enum: FACEBOOK_AD, INSTAGRAM_AD, WHATSAPP_BROADCAST, GOOGLE_AD, BLOG_OUTLINE, PRODUCT_DESCRIPTION)
    - title
    - content (text)
    - metadata (JSON)
    - createdBy (userId, foreign key)
    - createdAt
    - updatedAt

14. **ApiKey Model**
    - id (UUID, primary key)
    - organizationId (foreign key, indexed)
    - name
    - keyHash (hashed token)
    - lastUsedAt (timestamp)
    - createdAt
    - expiresAt (optional)

### 4.4 Integration Requirements

**Payment Processing:**
- Stripe integration for subscription management
- Webhook handling for subscription events:
  - checkout.session.completed
  - customer.subscription.updated
  - customer.subscription.deleted
  - invoice.payment_failed
- Stripe Customer Portal for self-service subscription management
- Support for multiple currencies (USD, AED)

**AI/LLM Integration (Stub Architecture):**
- Abstraction layer for AI service calls
- Functions to stub:
  - `generateAIResponse(context, query)` - for chat/receptionist
  - `generateContent(type, parameters)` - for content generation
  - `qualifyLead(leadData)` - for lead scoring
  - `suggestReply(conversationHistory)` - for inbox suggestions
- Ready for integration with OpenAI, Anthropic, or local models

**Communication Channels (Stub Architecture):**
- WhatsApp Business API integration points
- Twilio integration for voice calls (placeholder)
- Email service (SendGrid/AWS SES) integration points
- Social media webhook receivers (Instagram, Facebook)

**File Storage:**
- Local file system for development
- Ready for S3/Cloudflare R2 integration
- Support for logo uploads, document attachments

## 5. Requirements Pool

### 5.1 P0 Requirements (Must-Have for MVP)

**AUTH-001**: Email/password authentication with NextAuth
- User registration with email verification
- Login with email and password
- Password reset flow via email
- Session management with secure cookies
- **Acceptance Criteria**: Users can register, login, and reset password successfully

**AUTH-002**: Multi-tenant organization system
- Users can belong to multiple organizations
- Organization switching in app header
- Data isolation by organizationId
- Role-based access control (OWNER, ADMIN, STAFF)
- **Acceptance Criteria**: Users can create/join organizations and switch between them

**AUTH-003**: Onboarding wizard for new users
- Step 1: Business name, industry selection, country
- Step 2: Primary language selection (EN/AR)
- Step 3: Plan selection with trial option
- **Acceptance Criteria**: New users complete 3-step wizard and land in dashboard

**MARKETING-001**: Public homepage
- Hero section with headline, subheadline, 2 CTAs
- Problem/pain section
- Core features grid (8 features)
- "Who it's for" section (6 industries)
- Social proof section with placeholder testimonials
- "How it works" 3-step section
- Pricing preview with link to /pricing
- Footer with navigation links
- **Acceptance Criteria**: Homepage loads, is responsive, and all sections render correctly

**MARKETING-002**: Pricing page
- 4 pricing tiers with comparison table
- Starter ($49), Growth ($99, highlighted), Premium ($199), Agency ($499)
- Feature comparison grid
- CTA buttons linking to registration
- **Acceptance Criteria**: Pricing page displays all plans with accurate features

**MARKETING-003**: Features page
- 9 feature sections with icons and descriptions
- Responsive layout
- **Acceptance Criteria**: Features page renders all sections correctly

**MARKETING-004**: Industries page
- 6 industry-specific sections
- Each section explains value proposition for that vertical
- **Acceptance Criteria**: Industries page shows all 6 verticals with relevant content

**MARKETING-005**: Legal pages
- Privacy policy page with proper structure
- Terms of service page with proper structure
- **Acceptance Criteria**: Legal pages are accessible and properly formatted

**DASHBOARD-001**: Main dashboard overview
- 4 metric cards (AI inquiries, WhatsApp conversations, new leads, bookings)
- Line chart for inquiries over 7 days
- Funnel chart for lead stages
- Recent leads/conversations table
- **Acceptance Criteria**: Dashboard displays all widgets with dummy data

**DASHBOARD-002**: AI Receptionist configuration page
- Form for display name, tone, languages
- FAQ/business info textarea
- Toggle switches for voice calls and chat widget
- Phone number and webhook fields
- Save functionality storing to database
- **Acceptance Criteria**: Users can configure AI receptionist settings

**DASHBOARD-003**: WhatsApp Autopilot page
- Connection settings section
- Automation rules table (trigger + action)
- Simple flow builder UI
- Templates list with CRUD operations
- **Acceptance Criteria**: Users can view and create WhatsApp automation rules

**DASHBOARD-004**: Chat Widget configuration page
- Installation code snippet display
- Customization settings (position, colors, welcome message)
- Toggle for AI auto-response
- **Acceptance Criteria**: Users can customize and get installation code

**DASHBOARD-005**: Bookings & Calendar page
- Calendar view (week/day/month)
- Bookings list with filters
- Create/edit booking form
- Reminder settings toggles
- **Acceptance Criteria**: Users can view and create bookings

**DASHBOARD-006**: CRM & Leads page
- Kanban board with 6 stages (New, Contacted, Qualified, Booked, Won, Lost)
- Lead cards with drag-and-drop
- Lead detail modal with timeline, notes, tags
- Filters by stage, source, date
- **Acceptance Criteria**: Users can view leads in kanban, drag to change stage, view details

**DASHBOARD-007**: Unified Inbox page
- Conversation list with source indicators
- Message view with bubbles (customer/agent/AI)
- Reply input box
- AI suggested reply section (stub)
- **Acceptance Criteria**: Users can view conversations and send replies

**DASHBOARD-008**: AI Documents page
- Template dropdown (6 document types)
- Dynamic form fields based on template
- Document preview after generation
- Download PDF button (stub)
- Documents list with history
- **Acceptance Criteria**: Users can generate and view documents

**DASHBOARD-009**: AI Content Generator page
- 5 tabs for different content types
- Form fields for each content type
- Generate button with loading state
- Content preview and save as draft
- **Acceptance Criteria**: Users can generate content and save drafts

**DASHBOARD-010**: Workflows page
- Workflows table with name, trigger, status
- Create workflow form with trigger and actions
- Activate/deactivate toggle
- **Acceptance Criteria**: Users can create and manage workflows

**DASHBOARD-011**: Settings page
- Business profile form (name, logo, address, timezone, language)
- User management table with invite function
- API keys section with generate/revoke
- **Acceptance Criteria**: Users can update settings and manage team members

**DASHBOARD-012**: Billing page
- Current plan display with renewal date
- Manage subscription button (Stripe portal)
- Upgrade/downgrade plan options
- **Acceptance Criteria**: Users can view subscription and access Stripe portal

**BILLING-001**: Stripe subscription integration
- Checkout session creation for plan selection
- Webhook handlers for subscription events
- Subscription status tracking in database
- Stripe Customer Portal integration
- **Acceptance Criteria**: Users can subscribe, and webhooks update database correctly

**BILLING-002**: Feature gating by plan
- Helper function `checkPlanCapability(orgId, feature)`
- Feature limits enforcement (leads, documents, content generations)
- UI indicators for locked features
- Upgrade prompts when limits reached
- **Acceptance Criteria**: Features are properly gated based on subscription plan

**I18N-001**: Language switcher
- EN/AR toggle in navigation
- Language preference stored in cookies/session
- **Acceptance Criteria**: Users can switch language and preference persists

**I18N-002**: Arabic RTL support
- RTL layout for Arabic language
- Text alignment adjustments
- Mirrored UI elements where appropriate
- **Acceptance Criteria**: Arabic language displays correctly with RTL layout

**I18N-003**: Translation files
- English translation JSON
- Arabic translation JSON (key strings)
- Translation helper functions
- **Acceptance Criteria**: Key UI strings are translatable

**DB-001**: Prisma schema implementation
- All 14 data models defined
- Relationships configured
- Indexes on frequently queried fields
- Migration files generated
- **Acceptance Criteria**: Database schema matches requirements and migrations run successfully

**DB-002**: Database seed data
- Sample organizations
- Sample users and memberships
- Sample leads, customers, bookings
- Sample conversations and messages
- **Acceptance Criteria**: Database can be seeded with realistic test data

**UI-001**: Responsive layout system
- Mobile-first approach
- Breakpoints: 375px (mobile), 768px (tablet), 1920px (desktop)
- Touch-friendly UI elements for mobile
- **Acceptance Criteria**: All pages are fully responsive across breakpoints

**UI-002**: Sidebar navigation
- 12 navigation items
- Active state indication
- Collapsible on mobile
- Organization switcher in header
- **Acceptance Criteria**: Navigation works on all devices and shows active state

**UI-003**: Loading and error states
- Loading skeletons for data fetching
- Error boundaries for component errors
- Toast notifications for actions
- **Acceptance Criteria**: All async operations show appropriate loading/error states

**VALIDATION-001**: Form validation
- React Hook Form integration
- Zod schemas for all forms
- Client-side validation
- Server-side validation in API routes
- **Acceptance Criteria**: All forms validate on client and server with clear error messages

### 5.2 P1 Requirements (Should-Have for Launch)

**DASHBOARD-013**: Analytics and reporting
- Export data to CSV
- Date range filters
- Custom report builder
- **Acceptance Criteria**: Users can export data and filter by date ranges

**INTEGRATION-001**: Email service integration
- SendGrid or AWS SES setup
- Email templates for notifications
- Transactional email sending
- **Acceptance Criteria**: System can send emails for key events

**INTEGRATION-002**: WhatsApp Business API connection
- Meta Cloud API credentials setup
- Webhook receiver for incoming messages
- Message sending functionality
- **Acceptance Criteria**: WhatsApp messages can be sent and received

**INTEGRATION-003**: Twilio voice integration
- Twilio account setup
- Phone number provisioning
- Call handling webhooks
- **Acceptance Criteria**: Voice calls can be received and handled

**AI-001**: LLM integration for chat
- OpenAI or Anthropic API integration
- Context management for conversations
- Response generation with business context
- **Acceptance Criteria**: AI can generate contextual responses

**AI-002**: Content generation with LLM
- Prompt templates for each content type
- Parameter injection
- Output formatting
- **Acceptance Criteria**: AI generates quality content for all types

**SECURITY-001**: Rate limiting
- API route rate limiting
- Per-organization rate limits
- IP-based rate limiting for public endpoints
- **Acceptance Criteria**: Rate limits prevent abuse

**SECURITY-002**: Data encryption
- Encrypt sensitive fields in database
- HTTPS enforcement
- Secure cookie settings
- **Acceptance Criteria**: Sensitive data is encrypted at rest and in transit

**PERFORMANCE-001**: Caching strategy
- Redis for session storage
- API response caching
- Static asset caching
- **Acceptance Criteria**: Page load times < 2 seconds

**PERFORMANCE-002**: Database optimization
- Query optimization
- Connection pooling
- Index optimization
- **Acceptance Criteria**: Database queries execute in < 100ms

### 5.3 P2 Requirements (Nice-to-Have for Future)

**DASHBOARD-014**: Advanced workflow builder
- Visual drag-and-drop flow builder
- Conditional logic support
- Multi-step workflows
- **Acceptance Criteria**: Users can create complex workflows visually

**INTEGRATION-004**: Social media integrations
- Instagram Direct Message API
- Facebook Messenger API
- LinkedIn messaging
- **Acceptance Criteria**: Messages from social platforms appear in inbox

**INTEGRATION-005**: Calendar integrations
- Google Calendar sync
- Outlook Calendar sync
- Two-way sync for bookings
- **Acceptance Criteria**: Bookings sync with external calendars

**AI-003**: Voice AI receptionist
- Speech-to-text integration
- Text-to-speech with natural voices
- Arabic voice support
- **Acceptance Criteria**: AI can handle voice calls in English and Arabic

**AI-004**: Advanced lead scoring
- ML-based lead scoring model
- Predictive analytics for conversion
- Automated lead prioritization
- **Acceptance Criteria**: Leads are scored and prioritized automatically

**AGENCY-001**: White-label features
- Custom domain support
- Logo and branding customization
- Reseller portal
- **Acceptance Criteria**: Agency plan users can white-label the platform

**AGENCY-002**: Client management for agencies
- Sub-organization creation
- Client dashboard access
- Consolidated billing
- **Acceptance Criteria**: Agencies can manage multiple client organizations

**MOBILE-001**: Native mobile apps
- React Native iOS app
- React Native Android app
- Push notifications
- **Acceptance Criteria**: Mobile apps provide core functionality

**COMPLIANCE-001**: GDPR compliance features
- Data export functionality
- Right to be forgotten
- Consent management
- **Acceptance Criteria**: Platform meets GDPR requirements

**COMPLIANCE-002**: UAE data residency
- Data storage in UAE region
- Compliance with UAE data laws
- **Acceptance Criteria**: All data stored within UAE

## 6. UI Design Draft

### 6.1 Design System

**Color Palette:**
- Primary: Emerald Green `#059669`
- Primary Hover: `#047857`
- Primary Light: `#D1FAE5`
- Dark Gray: `#111827`
- Medium Gray: `#6B7280`
- Light Gray: `#F3F4F6`
- Gold Accent: `#D4AF37`
- White: `#FFFFFF`
- Error: `#EF4444`
- Success: `#10B981`
- Warning: `#F59E0B`

**Typography:**
- Font Family: Inter (system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Headings:
  - H1: 48px/56px, font-weight: 700
  - H2: 36px/44px, font-weight: 700
  - H3: 30px/36px, font-weight: 600
  - H4: 24px/32px, font-weight: 600
  - H5: 20px/28px, font-weight: 600
  - H6: 18px/24px, font-weight: 600
- Body:
  - Large: 18px/28px, font-weight: 400
  - Base: 16px/24px, font-weight: 400
  - Small: 14px/20px, font-weight: 400
  - XSmall: 12px/16px, font-weight: 400

**Spacing Scale:**
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

**Border Radius:**
- Small: 4px
- Medium: 8px
- Large: 12px
- XLarge: 16px
- Full: 9999px (for pills/badges)

**Shadows:**
- Small: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- Medium: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- Large: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- XLarge: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`

### 6.2 Component Library (shadcn/ui)

**Core Components to Use:**
- Button (primary, secondary, outline, ghost variants)
- Input (text, email, password, number, tel)
- Textarea
- Select / Dropdown
- Checkbox
- Radio Group
- Switch / Toggle
- Card
- Badge
- Avatar
- Dialog / Modal
- Sheet (for mobile sidebar)
- Tabs
- Table
- Form (with React Hook Form integration)
- Toast / Notification
- Popover
- Tooltip
- Calendar / Date Picker
- Command Palette (for search)
- Skeleton (loading states)
- Progress Bar
- Alert
- Separator

### 6.3 Layout Structure

**Public Marketing Site Layout:**
```
┌─────────────────────────────────────────────┐
│ Header (Logo | Nav | Language | CTA)        │
├─────────────────────────────────────────────┤
│                                             │
│              Page Content                   │
│                                             │
├─────────────────────────────────────────────┤
│ Footer (Links | Social | Legal)             │
└─────────────────────────────────────────────┘
```

**App Dashboard Layout:**
```
┌────────┬──────────────────────────────────┐
│        │ Header (Org Switcher | User)     │
│        ├──────────────────────────────────┤
│ Side   │                                  │
│ bar    │         Page Content             │
│ Nav    │                                  │
│        │                                  │
└────────┴──────────────────────────────────┘
```

**Mobile App Layout:**
```
┌─────────────────────────────────────────────┐
│ Header (Menu | Logo | User)                 │
├─────────────────────────────────────────────┤
│                                             │
│              Page Content                   │
│                                             │
│                                             │
├─────────────────────────────────────────────┤
│ Bottom Nav (Dashboard | CRM | Inbox | More) │
└─────────────────────────────────────────────┘
```

### 6.4 Key Page Wireframes

**Homepage Hero Section:**
```
┌─────────────────────────────────────────────┐
│  [Logo]  Features  Pricing  Industries  [EN/AR] [Login] [Sign Up]  │
├─────────────────────────────────────────────┤
│                                             │
│         Your UAE Business,                  │
│         Automated by AI                     │
│                                             │
│    AI receptionist, WhatsApp autopilot,     │
│    booking system, CRM & content generator  │
│    — all in one platform.                   │
│                                             │
│  [Start Free Trial]  [Book a Demo]          │
│                                             │
│         [Hero Image/Animation]              │
└─────────────────────────────────────────────┘
```

**Dashboard Overview:**
```
┌────────┬──────────────────────────────────┐
│ [≡]    │ [Emerald AI Suite ▼] [@User ▼]  │
├────────┼──────────────────────────────────┤
│ Dash   │ Dashboard                         │
│ Recep  │                                  │
│ WhatsA │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ Chat   │ │ 1.2K │ │ 340  │ │  45  │ │  23  │ │
│ Booking│ │Inquir│ │WhatsA│ │ Leads│ │Booking│ │
│ CRM    │ └──────┘ └──────┘ └──────┘ └──────┘ │
│ Inbox  │                                  │
│ Docs   │ [Chart: Inquiries Last 7 Days]   │
│ Content│                                  │
│ Workflo│ [Chart: Lead Funnel]             │
│ Setting│                                  │
│ Billing│ [Table: Recent Leads]            │
└────────┴──────────────────────────────────┘
```

**CRM Kanban Board:**
```
┌────────┬──────────────────────────────────┐
│        │ CRM & Leads                       │
├────────┼──────────────────────────────────┤
│        │ [+ New Lead] [Filters ▼] [Search]│
│        │                                  │
│        │ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ │
│        │ │New │ │Cont│ │Qual│ │Book│ │Won │ │Lost│ │
│        │ │ 12 │ │ 8  │ │ 5  │ │ 3  │ │ 15 │ │ 4  │ │
│        │ ├────┤ ├────┤ ├────┤ ├────┤ ├────┤ ├────┤ │
│        │ │Card│ │Card│ │Card│ │Card│ │Card│ │Card│ │
│        │ │Card│ │Card│ │Card│ │    │ │Card│ │    │ │
│        │ │Card│ │    │ │    │ │    │ │... │ │    │ │
│        │ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ │
└────────┴──────────────────────────────────┘
```

**Unified Inbox:**
```
┌────────┬─────────┬────────────────────────┐
│        │ Inbox   │ Conversation           │
├────────┼─────────┼────────────────────────┤
│        │ [All ▼] │ Ahmad Al-Mansouri      │
│        │ [Search]│ WhatsApp • 2m ago      │
│        │         │                        │
│        │ ┌─────┐ │ ┌──────────────────┐   │
│        │ │[WA] │ │ │ Hi, I need info  │   │
│        │ │Ahmad│ │ │ about services   │   │
│        │ │2m   │ │ └──────────────────┘   │
│        │ └─────┘ │                        │
│        │ ┌─────┐ │ ┌──────────────────┐   │
│        │ │[IG] │ │ │ Hello Ahmad!     │   │
│        │ │Sara │ │ │ I can help...    │   │
│        │ │15m  │ │ └──────────────────┘   │
│        │ └─────┘ │                        │
│        │ ┌─────┐ │ 💡 AI Suggested Reply: │
│        │ │[EM] │ │ "I'd be happy to..."   │
│        │ │John │ │                        │
│        │ │1h   │ │ [Type message...]      │
│        │ └─────┘ │ [Send]                 │
└────────┴─────────┴────────────────────────┘
```

### 6.5 Responsive Breakpoints

**Desktop (1920px+):**
- Sidebar: 280px fixed width
- Content: Remaining width with max-width: 1600px
- 3-4 column layouts for grids
- Large charts and visualizations

**Tablet (768px - 1919px):**
- Sidebar: 240px fixed width or collapsible
- Content: Remaining width
- 2-3 column layouts
- Adjusted chart sizes

**Mobile (< 768px):**
- Sidebar: Hidden, accessible via hamburger menu
- Content: Full width with padding
- 1 column layouts
- Bottom navigation bar for key sections
- Stacked cards and forms
- Touch-optimized button sizes (min 44px height)

### 6.6 Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast ratios (4.5:1 for text)
- Focus indicators on interactive elements
- ARIA labels for complex components
- Alt text for all images
- Skip navigation links
- Form labels and error messages

## 7. User Flows

### 7.1 Registration and Onboarding Flow

**Flow Diagram:**
```mermaid
flowchart TD
    A[Landing Page] --> B{User Action}
    B -->|Click Sign Up| C[Registration Page]
    C --> D[Enter Email & Password]
    D --> E[Email Verification Sent]
    E --> F[User Clicks Verification Link]
    F --> G[Email Verified]
    G --> H[Onboarding Step 1: Business Info]
    H --> I[Enter Business Name, Industry, Country]
    I --> J[Onboarding Step 2: Language]
    J --> K[Select Primary Language EN/AR]
    K --> L[Onboarding Step 3: Plan Selection]
    L --> M{Choose Plan}
    M -->|Free Trial| N[Start Trial - No Payment]
    M -->|Paid Plan| O[Stripe Checkout]
    O --> P[Payment Success]
    N --> Q[Dashboard]
    P --> Q
    Q --> R[Welcome Tour Tooltip]
    R --> S[User Explores Dashboard]
```

**Detailed Steps:**

1. **Registration Page (`/auth/register`)**
   - Fields: Email, Password, Confirm Password, Name
   - Validation: Email format, password strength (min 8 chars, 1 uppercase, 1 number), passwords match
   - Submit: Create user account with hashed password
   - Send verification email with token
   - Redirect to: Email verification pending page

2. **Email Verification**
   - User receives email with verification link
   - Link format: `/auth/verify-email?token=xxx`
   - On click: Verify token, mark email as verified
   - Redirect to: Onboarding Step 1

3. **Onboarding Step 1: Business Information**
   - Fields:
     - Business Name (required, text)
     - Industry (required, dropdown: Salon, Clinic, Real Estate, Restaurant, Car Rental, E-commerce)
     - Country (default: UAE, dropdown)
   - Create Organization record
   - Create Membership record (user as OWNER)
   - Button: Next →

4. **Onboarding Step 2: Language Preference**
   - Radio buttons: English, Arabic
   - Preview of UI in selected language
   - Update Organization.primaryLanguage
   - Button: Next →

5. **Onboarding Step 3: Plan Selection**
   - Display 4 plan cards with features
   - Highlight "Growth" plan as recommended
   - Options:
     - "Start Free Trial" (14 days) - no payment required
     - "Subscribe Now" - redirect to Stripe Checkout
   - For trial: Create Subscription record with status=TRIALING
   - For paid: Create Stripe Checkout Session
   - Button: Complete Setup →

6. **Welcome to Dashboard**
   - Show welcome modal with quick tips
   - Highlight key features with tooltips
   - Provide "Take a Tour" option
   - Allow dismissal to explore freely

### 7.2 Authentication Flow

**Login Flow:**
```mermaid
flowchart TD
    A[Login Page] --> B[Enter Email & Password]
    B --> C{Credentials Valid?}
    C -->|Yes| D{Email Verified?}
    C -->|No| E[Show Error: Invalid Credentials]
    E --> B
    D -->|Yes| F{User Has Organizations?}
    D -->|No| G[Show Error: Please Verify Email]
    G --> H[Resend Verification Link]
    H --> B
    F -->|Yes| I{Multiple Organizations?}
    F -->|No| J[Show Error: No Organization]
    J --> K[Start Onboarding]
    I -->|Yes| L[Show Organization Selector]
    I -->|No| M[Auto-select Organization]
    L --> N[User Selects Organization]
    M --> O[Set Session with orgId]
    N --> O
    O --> P[Redirect to Dashboard]
```

**Password Reset Flow:**
```mermaid
flowchart TD
    A[Login Page] --> B[Click Forgot Password]
    B --> C[Enter Email]
    C --> D[Submit]
    D --> E{Email Exists?}
    E -->|Yes| F[Generate Reset Token]
    E -->|No| G[Show Generic Success Message]
    F --> H[Send Reset Email]
    H --> I[Show Success Message]
    G --> I
    I --> J[User Clicks Reset Link]
    J --> K[Reset Password Page with Token]
    K --> L[Enter New Password]
    L --> M[Validate Token & Update Password]
    M --> N{Valid?}
    N -->|Yes| O[Show Success, Redirect to Login]
    N -->|No| P[Show Error: Invalid/Expired Token]
```

### 7.3 Organization Switching Flow

**Flow:**
```mermaid
flowchart TD
    A[User in Dashboard] --> B[Click Organization Dropdown]
    B --> C[Show List of Organizations]
    C --> D{User Action}
    D -->|Select Different Org| E[Update Session orgId]
    D -->|Create New Org| F[Show Create Org Modal]
    D -->|Cancel| G[Close Dropdown]
    E --> H[Reload Dashboard with New Org Context]
    F --> I[Enter Org Name & Industry]
    I --> J[Create Organization & Membership]
    J --> K[Update Session to New Org]
    K --> H
```

**Implementation Details:**
- Organization context stored in session
- Middleware checks orgId on every request
- All queries filtered by current orgId
- Organization switcher in app header
- Shows organization name and logo
- Dropdown lists all organizations user belongs to
- "+ Create New Organization" option at bottom

### 7.4 Subscription Management Flow

**Upgrade/Downgrade Flow:**
```mermaid
flowchart TD
    A[Billing Page] --> B[View Current Plan]
    B --> C{User Action}
    C -->|Upgrade| D[Select Higher Plan]
    C -->|Downgrade| E[Select Lower Plan]
    C -->|Cancel| F[Cancel Subscription]
    D --> G[Stripe Checkout for Upgrade]
    E --> H{Downgrade Timing}
    H -->|Immediate| I[Prorate & Downgrade Now]
    H -->|End of Period| J[Schedule Downgrade]
    F --> K[Confirm Cancellation]
    K --> L[Cancel at Period End]
    G --> M[Payment Success]
    M --> N[Webhook Updates Subscription]
    I --> N
    J --> N
    L --> N
    N --> O[Update UI with New Plan]
```

**Stripe Customer Portal Flow:**
```mermaid
flowchart TD
    A[Billing Page] --> B[Click Manage Subscription]
    B --> C[Create Stripe Portal Session]
    C --> D[Redirect to Stripe Portal]
    D --> E{User Action in Portal}
    E -->|Update Payment Method| F[Stripe Updates Card]
    E -->|View Invoices| G[Stripe Shows Invoices]
    E -->|Cancel Subscription| H[Stripe Cancels]
    E -->|Return to App| I[Redirect Back]
    F --> J[Webhook: customer.updated]
    H --> K[Webhook: subscription.deleted]
    J --> L[Update Database]
    K --> L
    I --> M[Return to Billing Page]
```

**Feature Limit Enforcement Flow:**
```mermaid
flowchart TD
    A[User Attempts Action] --> B[Check Feature Availability]
    B --> C{Plan Allows Feature?}
    C -->|Yes| D{Within Usage Limits?}
    C -->|No| E[Show Upgrade Modal]
    D -->|Yes| F[Allow Action]
    D -->|No| G[Show Limit Reached Modal]
    E --> H{User Upgrades?}
    G --> H
    H -->|Yes| I[Redirect to Billing/Checkout]
    H -->|No| J[Return to Previous Page]
    F --> K[Increment Usage Counter]
    K --> L[Complete Action]
```

### 7.5 Lead Management Flow

**Lead Creation Flow:**
```mermaid
flowchart TD
    A[Lead Source] --> B{Source Type}
    B -->|WhatsApp Message| C[Webhook Receives Message]
    B -->|Website Chat| D[Chat Widget Captures Info]
    B -->|Manual Entry| E[User Creates Lead in CRM]
    B -->|Instagram DM| F[IG Webhook Receives Message]
    C --> G[Parse Message Content]
    D --> H[Extract Name & Contact]
    E --> I[Form Submission]
    F --> G
    G --> J[AI Extracts Lead Info]
    H --> K[Create Lead Record]
    I --> K
    J --> K
    K --> L[Set Stage = NEW]
    L --> M[Create Conversation Record]
    M --> N[Assign to User or AI]
    N --> O[Send to CRM Board]
    O --> P[Trigger Workflow if Configured]
```

**Lead Qualification Flow:**
```mermaid
flowchart TD
    A[New Lead Created] --> B[AI Analyzes Lead Data]
    B --> C[Extract: Budget, Timeline, Needs]
    C --> D[Calculate Lead Score]
    D --> E{Score Threshold}
    E -->|High Score| F[Auto-move to QUALIFIED]
    E -->|Medium Score| G[Keep in CONTACTED]
    E -->|Low Score| H[Flag for Review]
    F --> I[Assign to Sales User]
    G --> J[Add to Follow-up Queue]
    H --> K[Notify Manager]
    I --> L[Send Notification]
    J --> L
    K --> L
```

### 7.6 Booking Flow

**Customer Booking Flow:**
```mermaid
flowchart TD
    A[Customer Initiates Booking] --> B{Booking Channel}
    B -->|WhatsApp| C[AI Receptionist Handles]
    B -->|Website Widget| D[Booking Form Displayed]
    B -->|Phone Call| E[AI Voice or Staff]
    C --> F[AI Asks: Service, Date, Time]
    D --> G[Customer Selects Options]
    E --> F
    F --> H[Check Availability]
    G --> H
    H --> I{Time Available?}
    I -->|Yes| J[Create Booking Record]
    I -->|No| K[Suggest Alternative Times]
    K --> L{Customer Accepts?}
    L -->|Yes| J
    L -->|No| M[End Conversation]
    J --> N[Send Confirmation Message]
    N --> O[Add to Calendar]
    O --> P[Schedule Reminder]
    P --> Q[Create/Link Customer Record]
```

**Booking Reminder Flow:**
```mermaid
flowchart TD
    A[Cron Job Checks Bookings] --> B[Find Bookings in Next 24h]
    B --> C{Reminder Sent?}
    C -->|No| D[Get Customer Contact]
    C -->|Yes| E[Skip]
    D --> F{Preferred Channel}
    F -->|WhatsApp| G[Send WhatsApp Reminder]
    F -->|Email| H[Send Email Reminder]
    F -->|SMS| I[Send SMS Reminder]
    G --> J[Mark Reminder Sent]
    H --> J
    I --> J
    J --> K[Log Activity]
```

### 7.7 Conversation Handling Flow

**Incoming Message Flow:**
```mermaid
flowchart TD
    A[Message Received] --> B{Channel}
    B -->|WhatsApp| C[WhatsApp Webhook]
    B -->|Chat Widget| D[WebSocket/API]
    B -->|Email| E[Email Webhook]
    B -->|Instagram| F[IG Webhook]
    C --> G[Parse Message]
    D --> G
    E --> G
    F --> G
    G --> H[Find or Create Conversation]
    H --> I[Create Message Record]
    I --> J{Automation Enabled?}
    J -->|Yes| K[Check Workflow Rules]
    J -->|No| L[Notify Assigned User]
    K --> M{Rule Matches?}
    M -->|Yes| N[Execute Workflow Actions]
    M -->|No| L
    N --> O{Action Type}
    O -->|Auto-Reply| P[AI Generates Response]
    O -->|Create Lead| Q[Create Lead Record]
    O -->|Assign to User| R[Assign Conversation]
    P --> S[Send Reply]
    Q --> T[Link to Conversation]
    R --> L
    S --> U[Log Activity]
    T --> U
    L --> U
```

**Agent Reply Flow:**
```mermaid
flowchart TD
    A[Agent Opens Conversation] --> B[View Message History]
    B --> C{AI Suggestion Available?}
    C -->|Yes| D[Show Suggested Reply]
    C -->|No| E[Agent Types Reply]
    D --> F{Agent Action}
    F -->|Use Suggestion| G[Edit if Needed]
    F -->|Ignore| E
    G --> H[Agent Sends Message]
    E --> H
    H --> I[Create Message Record role=AGENT]
    I --> J{Channel}
    J -->|WhatsApp| K[Send via WhatsApp API]
    J -->|Email| L[Send via Email Service]
    J -->|Chat Widget| M[Send via WebSocket]
    K --> N[Update Conversation lastMessageAt]
    L --> N
    M --> N
    N --> O[Log Activity]
```

## 8. Technical Specifications

### 8.1 Technology Stack Details

**Frontend Framework:**
- Next.js 14.2+ with App Router
- React 18+
- TypeScript 5.3+
- Strict mode enabled
- ESLint + Prettier for code quality

**Styling & UI:**
- Tailwind CSS 3.4+
- shadcn/ui component library
- Radix UI primitives
- Lucide React icons
- CSS modules for custom components
- PostCSS for processing

**State Management:**
- TanStack Query (React Query) v5 for server state
- React Context for global UI state
- Zustand for complex client state (if needed)
- React Hook Form for form state

**Backend & API:**
- Next.js API Routes (Route Handlers)
- Server Actions for mutations
- Middleware for auth and org context
- RESTful API design patterns

**Database & ORM:**
- PostgreSQL 15+
- Prisma ORM 5.8+
- Prisma Client for queries
- Prisma Migrate for schema management
- Connection pooling via Prisma

**Authentication:**
- NextAuth.js v4
- Credentials provider (email/password)
- JWT strategy for sessions
- Bcrypt for password hashing
- Email verification tokens

**Payment Processing:**
- Stripe SDK
- Stripe Checkout for subscriptions
- Stripe Customer Portal
- Stripe Webhooks for events
- Stripe CLI for local testing

**Validation:**
- Zod for schema validation
- React Hook Form integration
- Server-side validation in API routes
- Type-safe validation schemas

**Internationalization:**
- next-intl or custom i18n solution
- JSON translation files
- RTL support for Arabic
- Language detection and switching

**Development Tools:**
- TypeScript for type safety
- ESLint for linting
- Prettier for formatting
- Husky for git hooks
- Commitlint for commit messages

**Testing (Future):**
- Jest for unit tests
- React Testing Library
- Playwright for E2E tests
- Vitest as alternative

**Deployment:**
- Vercel for hosting
- Vercel Edge Network for CDN
- Environment variables management
- Preview deployments for PRs

**Database Hosting:**
- Supabase, Railway, or Neon for managed PostgreSQL
- Connection pooling
- Automated backups
- Read replicas (future)

**Monitoring & Analytics (Future):**
- Vercel Analytics
- Sentry for error tracking
- LogRocket for session replay
- PostHog for product analytics

### 8.2 Project Structure

```
emerald-ai-suite/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   ├── reset-password/
│   │   │   └── [token]/
│   │   │       └── page.tsx
│   │   └── verify-email/
│   │       └── page.tsx
│   ├── (marketing)/              # Public marketing pages
│   │   ├── page.tsx              # Homepage
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── features/
│   │   │   └── page.tsx
│   │   ├── industries/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   ├── (app)/                    # Protected app routes
│   │   ├── layout.tsx            # App layout with sidebar
│   │   ├── page.tsx              # Dashboard
│   │   ├── receptionist/
│   │   │   └── page.tsx
│   │   ├── whatsapp/
│   │   │   └── page.tsx
│   │   ├── chat-widget/
│   │   │   └── page.tsx
│   │   ├── bookings/
│   │   │   └── page.tsx
│   │   ├── crm/
│   │   │   ├── page.tsx
│   │   │   └── [leadId]/
│   │   │       └── page.tsx
│   │   ├── inbox/
│   │   │   ├── page.tsx
│   │   │   └── [conversationId]/
│   │   │       └── page.tsx
│   │   ├── documents/
│   │   │   └── page.tsx
│   │   ├── content/
│   │   │   └── page.tsx
│   │   ├── workflows/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── billing/
│   │       └── page.tsx
│   ├── onboarding/               # Onboarding wizard
│   │   ├── step-1/
│   │   │   └── page.tsx
│   │   ├── step-2/
│   │   │   └── page.tsx
│   │   └── step-3/
│   │       └── page.tsx
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── organizations/
│   │   │   └── route.ts
│   │   ├── leads/
│   │   │   └── route.ts
│   │   ├── bookings/
│   │   │   └── route.ts
│   │   ├── conversations/
│   │   │   └── route.ts
│   │   ├── webhooks/
│   │   │   ├── stripe/
│   │   │   │   └── route.ts
│   │   │   ├── whatsapp/
│   │   │   │   └── route.ts
│   │   │   └── email/
│   │   │       └── route.ts
│   │   └── ai/
│   │       ├── generate-response/
│   │       │   └── route.ts
│   │       └── generate-content/
│   │           └── route.ts
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── providers.tsx             # Client providers
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── marketing/                # Marketing page components
│   │   ├── hero.tsx
│   │   ├── features-grid.tsx
│   │   ├── pricing-table.tsx
│   │   └── ...
│   ├── app/                      # App-specific components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── org-switcher.tsx
│   │   ├── dashboard/
│   │   │   ├── metric-card.tsx
│   │   │   ├── chart.tsx
│   │   │   └── ...
│   │   ├── crm/
│   │   │   ├── kanban-board.tsx
│   │   │   ├── lead-card.tsx
│   │   │   └── ...
│   │   └── inbox/
│   │       ├── conversation-list.tsx
│   │       ├── message-bubble.tsx
│   │       └── ...
│   └── shared/                   # Shared components
│       ├── language-switcher.tsx
│       ├── loading-skeleton.tsx
│       └── ...
├── lib/                          # Utility functions
│   ├── db.ts                     # Prisma client
│   ├── auth.ts                   # NextAuth config
│   ├── stripe.ts                 # Stripe client
│   ├── utils.ts                  # General utilities
│   ├── validations/              # Zod schemas
│   │   ├── auth.ts
│   │   ├── organization.ts
│   │   ├── lead.ts
│   │   └── ...
│   ├── api/                      # API helpers
│   │   ├── client.ts
│   │   └── server.ts
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-organization.ts
│   │   ├── use-current-user.ts
│   │   └── ...
│   └── constants.ts              # App constants
├── prisma/                       # Prisma schema and migrations
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── ...
├── messages/                     # i18n translation files
│   ├── en.json
│   └── ar.json
├── middleware.ts                 # Next.js middleware
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint config
├── .prettierrc                   # Prettier config
└── package.json                  # Dependencies
```

### 8.3 Database Schema (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  OWNER
  ADMIN
  STAFF
}

enum Industry {
  SALON
  CLINIC
  REAL_ESTATE
  RESTAURANT
  CAR_RENTAL
  ECOMMERCE
}

enum Plan {
  STARTER
  GROWTH
  PREMIUM
  AGENCY
}

enum SubscriptionStatus {
  ACTIVE
  CANCELLED
  PAST_DUE
  TRIALING
}

enum LeadSource {
  WHATSAPP
  WEBSITE
  INSTAGRAM
  FACEBOOK
  EMAIL
  PHONE
  WALK_IN
}

enum LeadStage {
  NEW
  CONTACTED
  QUALIFIED
  BOOKED
  WON
  LOST
}

enum BookingStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
  NO_SHOW
}

enum ConversationChannel {
  WHATSAPP
  EMAIL
  INSTAGRAM
  FACEBOOK
  CHAT_WIDGET
  PHONE
}

enum ConversationStatus {
  OPEN
  CLOSED
  PENDING
}

enum MessageRole {
  CUSTOMER
  AGENT
  AI
}

enum DocumentType {
  INVOICE
  PROPOSAL
  CONTRACT
  QUOTATION
  NDA
  RENTAL_AGREEMENT
}

enum DocumentStatus {
  DRAFT
  SENT
  SIGNED
}

enum ContentType {
  FACEBOOK_AD
  INSTAGRAM_AD
  WHATSAPP_BROADCAST
  GOOGLE_AD
  BLOG_OUTLINE
  PRODUCT_DESCRIPTION
}

enum TemplateType {
  WHATSAPP_MESSAGE
  EMAIL
  DOCUMENT
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  hashedPassword String?
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  memberships   Membership[]
  assignedLeads Lead[]       @relation("AssignedLeads")
  assignedConversations Conversation[] @relation("AssignedConversations")
  generatedDocuments Document[] @relation("GeneratedDocuments")
  createdContent ContentDraft[] @relation("CreatedContent")

  @@index([email])
}

model Organization {
  id              String   @id @default(cuid())
  name            String
  industry        Industry
  country         String   @default("UAE")
  logo            String?
  address         String?
  phone           String?
  timezone        String   @default("Asia/Dubai")
  primaryLanguage String   @default("en")
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  memberships   Membership[]
  subscription  Subscription?
  leads         Lead[]
  customers     Customer[]
  bookings      Booking[]
  conversations Conversation[]
  workflows     Workflow[]
  templates     Template[]
  documents     Document[]
  contentDrafts ContentDraft[]
  apiKeys       ApiKey[]

  @@index([industry])
}

model Membership {
  id             String   @id @default(cuid())
  role           Role
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  user           User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId         String
  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String

  @@unique([userId, organizationId])
  @@index([userId])
  @@index([organizationId])
}

model Subscription {
  id                   String             @id @default(cuid())
  plan                 Plan
  status               SubscriptionStatus
  stripeCustomerId     String?
  stripeSubscriptionId String?
  currentPeriodStart   DateTime?
  currentPeriodEnd     DateTime?
  cancelAtPeriodEnd    Boolean            @default(false)
  createdAt            DateTime           @default(now())
  updatedAt            DateTime           @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String       @unique

  @@index([status])
}

model Lead {
  id               String     @id @default(cuid())
  name             String
  email            String?
  phone            String?
  source           LeadSource
  stage            LeadStage  @default(NEW)
  valueEstimation  Decimal?   @db.Decimal(10, 2)
  notes            String?    @db.Text
  tags             String[]
  createdAt        DateTime   @default(now())
  updatedAt        DateTime   @updatedAt

  organization     Organization  @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId   String
  assignedTo       User?         @relation("AssignedLeads", fields: [assignedToUserId], references: [id])
  assignedToUserId String?
  conversations    Conversation[]

  @@index([organizationId])
  @@index([stage])
  @@index([source])
}

model Customer {
  id            String   @id @default(cuid())
  name          String
  email         String?
  phone         String?
  address       String?
  notes         String?  @db.Text
  tags          String[]
  totalBookings Int      @default(0)
  totalSpent    Decimal  @default(0) @db.Decimal(10, 2)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  organization   Organization   @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String
  bookings       Booking[]
  conversations  Conversation[]

  @@index([organizationId])
  @@index([email])
  @@index([phone])
}

model Booking {
  id           String        @id @default(cuid())
  service      String
  startTime    DateTime
  endTime      DateTime
  status       BookingStatus @default(SCHEDULED)
  notes        String?       @db.Text
  reminderSent Boolean       @default(false)
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String
  customer       Customer     @relation(fields: [customerId], references: [id], onDelete: Cascade)
  customerId     String

  @@index([organizationId])
  @@index([startTime])
  @@index([status])
}

model Conversation {
  id            String              @id @default(cuid())
  channel       ConversationChannel
  status        ConversationStatus  @default(OPEN)
  lastMessageAt DateTime            @default(now())
  createdAt     DateTime            @default(now())
  updatedAt     DateTime            @updatedAt

  organization     Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId   String
  lead             Lead?        @relation(fields: [leadId], references: [id])
  leadId           String?
  customer         Customer?    @relation(fields: [customerId], references: [id])
  customerId       String?
  assignedTo       User?        @relation("AssignedConversations", fields: [assignedToUserId], references: [id])
  assignedToUserId String?
  messages         Message[]

  @@index([organizationId])
  @@index([status])
  @@index([lastMessageAt])
}

model Message {
  id        String      @id @default(cuid())
  role      MessageRole
  content   String      @db.Text
  metadata  Json?
  createdAt DateTime    @default(now())

  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  conversationId String

  @@index([conversationId])
  @@index([createdAt])
}

model Workflow {
  id        String   @id @default(cuid())
  name      String
  trigger   String
  actions   Json
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String

  @@index([organizationId])
  @@index([isActive])
}

model Template {
  id        String       @id @default(cuid())
  type      TemplateType
  name      String
  content   String       @db.Text
  variables Json?
  createdAt DateTime     @default(now())
  updatedAt DateTime     @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String

  @@index([organizationId])
  @@index([type])
}

model Document {
  id            String         @id @default(cuid())
  type          DocumentType
  title         String
  content       Json
  recipientName String?
  recipientEmail String?
  status        DocumentStatus @default(DRAFT)
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String
  generatedBy    User         @relation("GeneratedDocuments", fields: [generatedById], references: [id])
  generatedById  String

  @@index([organizationId])
  @@index([type])
  @@index([status])
}

model ContentDraft {
  id        String      @id @default(cuid())
  type      ContentType
  title     String
  content   String      @db.Text
  metadata  Json?
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String
  createdBy      User         @relation("CreatedContent", fields: [createdById], references: [id])
  createdById    String

  @@index([organizationId])
  @@index([type])
}

model ApiKey {
  id         String    @id @default(cuid())
  name       String
  keyHash    String    @unique
  lastUsedAt DateTime?
  createdAt  DateTime  @default(now())
  expiresAt  DateTime?

  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)
  organizationId String

  @@index([organizationId])
}
```

### 8.4 API Routes Structure

**Authentication Routes:**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login (handled by NextAuth)
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/verify-email` - Verify email with token

**Organization Routes:**
- `GET /api/organizations` - List user's organizations
- `POST /api/organizations` - Create new organization
- `GET /api/organizations/[id]` - Get organization details
- `PATCH /api/organizations/[id]` - Update organization
- `DELETE /api/organizations/[id]` - Delete organization
- `POST /api/organizations/[id]/members` - Invite member
- `DELETE /api/organizations/[id]/members/[userId]` - Remove member

**Lead Routes:**
- `GET /api/leads` - List leads (filtered by org)
- `POST /api/leads` - Create lead
- `GET /api/leads/[id]` - Get lead details
- `PATCH /api/leads/[id]` - Update lead
- `DELETE /api/leads/[id]` - Delete lead
- `PATCH /api/leads/[id]/stage` - Move lead to different stage

**Booking Routes:**
- `GET /api/bookings` - List bookings (filtered by org, date range)
- `POST /api/bookings` - Create booking
- `GET /api/bookings/[id]` - Get booking details
- `PATCH /api/bookings/[id]` - Update booking
- `DELETE /api/bookings/[id]` - Cancel booking
- `GET /api/bookings/availability` - Check availability

**Conversation Routes:**
- `GET /api/conversations` - List conversations (filtered by org, status)
- `POST /api/conversations` - Create conversation
- `GET /api/conversations/[id]` - Get conversation with messages
- `PATCH /api/conversations/[id]` - Update conversation
- `POST /api/conversations/[id]/messages` - Send message

**Document Routes:**
- `GET /api/documents` - List documents (filtered by org)
- `POST /api/documents` - Generate document
- `GET /api/documents/[id]` - Get document
- `PATCH /api/documents/[id]` - Update document
- `DELETE /api/documents/[id]` - Delete document
- `GET /api/documents/[id]/pdf` - Download as PDF

**Content Routes:**
- `GET /api/content` - List content drafts (filtered by org)
- `POST /api/content/generate` - Generate content with AI
- `GET /api/content/[id]` - Get content draft
- `PATCH /api/content/[id]` - Update content draft
- `DELETE /api/content/[id]` - Delete content draft

**Workflow Routes:**
- `GET /api/workflows` - List workflows (filtered by org)
- `POST /api/workflows` - Create workflow
- `GET /api/workflows/[id]` - Get workflow
- `PATCH /api/workflows/[id]` - Update workflow
- `DELETE /api/workflows/[id]` - Delete workflow

**Billing Routes:**
- `GET /api/billing/subscription` - Get current subscription
- `POST /api/billing/checkout` - Create Stripe checkout session
- `POST /api/billing/portal` - Create Stripe portal session
- `GET /api/billing/usage` - Get usage stats for current period

**Webhook Routes:**
- `POST /api/webhooks/stripe` - Handle Stripe events
- `POST /api/webhooks/whatsapp` - Handle WhatsApp messages
- `POST /api/webhooks/email` - Handle incoming emails
- `POST /api/webhooks/instagram` - Handle Instagram DMs
- `POST /api/webhooks/facebook` - Handle Facebook messages

**AI Routes:**
- `POST /api/ai/generate-response` - Generate AI response for conversation
- `POST /api/ai/generate-content` - Generate marketing content
- `POST /api/ai/qualify-lead` - AI lead qualification
- `POST /api/ai/suggest-reply` - Suggest reply for agent

### 8.5 Environment Variables

```bash
# .env.example

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/emerald_ai_suite"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-min-32-chars"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email Service (SendGrid or AWS SES)
EMAIL_FROM="noreply@emeraldaisuite.com"
SENDGRID_API_KEY="SG...."
# OR
AWS_SES_REGION="us-east-1"
AWS_SES_ACCESS_KEY_ID="..."
AWS_SES_SECRET_ACCESS_KEY="..."

# WhatsApp Business API (Meta Cloud API)
WHATSAPP_PHONE_NUMBER_ID="..."
WHATSAPP_BUSINESS_ACCOUNT_ID="..."
WHATSAPP_ACCESS_TOKEN="..."
WHATSAPP_WEBHOOK_VERIFY_TOKEN="..."

# Twilio (for voice calls)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="..."

# AI/LLM (OpenAI or Anthropic)
OPENAI_API_KEY="sk-..."
# OR
ANTHROPIC_API_KEY="sk-ant-..."

# File Storage (S3 or Cloudflare R2)
AWS_S3_BUCKET="emerald-ai-suite"
AWS_S3_REGION="us-east-1"
AWS_S3_ACCESS_KEY_ID="..."
AWS_S3_SECRET_ACCESS_KEY="..."

# App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Emerald AI Suite"

# Feature Flags
NEXT_PUBLIC_ENABLE_VOICE_AI="false"
NEXT_PUBLIC_ENABLE_WHATSAPP="true"
NEXT_PUBLIC_ENABLE_SOCIAL_MEDIA="false"
```

### 8.6 Middleware Configuration

```typescript
// middleware.ts

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
    const isAppPage = req.nextUrl.pathname.startsWith("/app")
    const isOnboarding = req.nextUrl.pathname.startsWith("/onboarding")

    // Redirect authenticated users away from auth pages
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL("/app", req.url))
    }

    // Redirect unauthenticated users to login
    if ((isAppPage || isOnboarding) && !isAuth) {
      return NextResponse.redirect(new URL("/auth/login", req.url))
    }

    // Check if user has completed onboarding
    if (isAppPage && isAuth && !token.hasCompletedOnboarding) {
      return NextResponse.redirect(new URL("/onboarding/step-1", req.url))
    }

    // Add organization context to request headers
    if (isAppPage && token.organizationId) {
      const requestHeaders = new Headers(req.headers)
      requestHeaders.set("x-organization-id", token.organizationId)
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    "/app/:path*",
    "/onboarding/:path*",
    "/auth/:path*",
  ],
}
```

### 8.7 Security Considerations

**Authentication Security:**
- Password hashing with bcrypt (salt rounds: 12)
- Secure session management with HTTP-only cookies
- CSRF protection via NextAuth
- Email verification required for new accounts
- Password reset tokens expire after 1 hour
- Rate limiting on auth endpoints

**Authorization:**
- Role-based access control (OWNER, ADMIN, STAFF)
- Organization-scoped data access
- API routes validate organization membership
- Middleware enforces authentication on protected routes

**Data Protection:**
- All sensitive data encrypted at rest
- HTTPS enforced in production
- Environment variables for secrets
- No sensitive data in client-side code
- SQL injection prevention via Prisma parameterized queries
- XSS prevention via React's built-in escaping

**API Security:**
- Rate limiting on all public endpoints
- Webhook signature verification (Stripe, WhatsApp)
- API key authentication for external integrations
- CORS configuration for allowed origins
- Input validation on all endpoints (Zod schemas)

**Payment Security:**
- PCI compliance via Stripe
- No credit card data stored in database
- Stripe webhooks verified with signatures
- Secure checkout flow

**Compliance:**
- GDPR-ready architecture (data export, deletion)
- User consent tracking
- Privacy policy and terms of service
- Audit logs for sensitive operations

### 8.8 Performance Optimization

**Frontend Performance:**
- Next.js automatic code splitting
- Image optimization with next/image
- Font optimization with next/font
- Static page generation for marketing pages
- Incremental Static Regeneration (ISR) where applicable
- React Server Components for reduced client bundle

**Database Performance:**
- Indexed fields for common queries
- Connection pooling via Prisma
- Query optimization with select/include
- Pagination for large datasets
- Database query caching (future: Redis)

**API Performance:**
- Response caching with Cache-Control headers
- Edge caching via Vercel Edge Network
- API route optimization
- Lazy loading of heavy components
- Debouncing for search inputs

**Asset Performance:**
- CDN for static assets
- Image compression and WebP format
- Lazy loading for images
- Preloading critical resources
- Tree shaking for unused code

## 9. Feature Gating & Subscription Plans

### 9.1 Plan Comparison

| Feature | Starter ($49) | Growth ($99) | Premium ($199) | Agency ($499) |
|---------|---------------|--------------|----------------|---------------|
| **AI Receptionist** |
| Chat receptionist | ✅ | ✅ | ✅ | ✅ |
| Voice receptionist | ❌ | ❌ | ✅ | ✅ |
| Custom training | Basic | Advanced | Advanced | Advanced |
| **WhatsApp** |
| WhatsApp automation | ✅ | ✅ | ✅ | ✅ |
| Message limit/month | 500 | 2,000 | 10,000 | Unlimited |
| Broadcast messages | ❌ | ✅ | ✅ | ✅ |
| **Chat Widget** |
| Website chat widget | ✅ | ✅ | ✅ | ✅ |
| Custom branding | ❌ | ✅ | ✅ | ✅ |
| **Bookings** |
| Booking system | ✅ | ✅ | ✅ | ✅ |
| Bookings/month | 50 | 200 | 1,000 | Unlimited |
| Calendar integrations | ❌ | ✅ | ✅ | ✅ |
| **CRM** |
| Lead management | ✅ | ✅ | ✅ | ✅ |
| Leads/month | 200 | 1,000 | 5,000 | Unlimited |
| AI lead scoring | ❌ | ✅ | ✅ | ✅ |
| Custom fields | ❌ | ✅ | ✅ | ✅ |
| **Inbox** |
| Unified inbox | ✅ | ✅ | ✅ | ✅ |
| AI suggested replies | ✅ | ✅ | ✅ | ✅ |
| Team collaboration | ❌ | ✅ | ✅ | ✅ |
| **Documents** |
| AI document generation | ✅ | ✅ | ✅ | ✅ |
| Documents/month | 20 | 100 | 500 | Unlimited |
| Custom templates | ❌ | ✅ | ✅ | ✅ |
| **Content** |
| AI content generation | ✅ | ✅ | ✅ | ✅ |
| Generations/month | 50 | 200 | 1,000 | Unlimited |
| Multi-language | ✅ | ✅ | ✅ | ✅ |
| **Workflows** |
| Automation workflows | ❌ | Basic | Advanced | Advanced |
| Active workflows | 0 | 5 | 20 | Unlimited |
| **Team** |
| Team members | 1 | 3 | 10 | Unlimited |
| Role management | ❌ | ✅ | ✅ | ✅ |
| **Integrations** |
| Instagram/Facebook | ❌ | ✅ | ✅ | ✅ |
| Email integration | ✅ | ✅ | ✅ | ✅ |
| API access | ❌ | ✅ | ✅ | ✅ |
| **White-label** |
| Custom domain | ❌ | ❌ | ❌ | ✅ |
| Remove branding | ❌ | ❌ | ❌ | ✅ |
| Client management | ❌ | ❌ | ❌ | ✅ |
| **Support** |
| Support level | Email | Email + Chat | Priority | Dedicated |
| Response time | 48h | 24h | 4h | 1h |

### 9.2 Feature Gating Implementation

**Helper Function:**
```typescript
// lib/feature-gating.ts

import { Plan } from "@prisma/client"

export type Feature =
  | "voice_receptionist"
  | "whatsapp_broadcast"
  | "custom_chat_branding"
  | "calendar_integrations"
  | "ai_lead_scoring"
  | "custom_crm_fields"
  | "team_collaboration"
  | "custom_document_templates"
  | "workflows_basic"
  | "workflows_advanced"
  | "social_media_integrations"
  | "api_access"
  | "white_label"
  | "client_management"

export type UsageLimit =
  | "whatsapp_messages"
  | "bookings"
  | "leads"
  | "documents"
  | "content_generations"
  | "team_members"
  | "workflows"

const FEATURE_MATRIX: Record<Plan, Feature[]> = {
  STARTER: [
    // Basic features only
  ],
  GROWTH: [
    "whatsapp_broadcast",
    "custom_chat_branding",
    "calendar_integrations",
    "ai_lead_scoring",
    "custom_crm_fields",
    "team_collaboration",
    "custom_document_templates",
    "workflows_basic",
    "social_media_integrations",
    "api_access",
  ],
  PREMIUM: [
    "voice_receptionist",
    "whatsapp_broadcast",
    "custom_chat_branding",
    "calendar_integrations",
    "ai_lead_scoring",
    "custom_crm_fields",
    "team_collaboration",
    "custom_document_templates",
    "workflows_advanced",
    "social_media_integrations",
    "api_access",
  ],
  AGENCY: [
    "voice_receptionist",
    "whatsapp_broadcast",
    "custom_chat_branding",
    "calendar_integrations",
    "ai_lead_scoring",
    "custom_crm_fields",
    "team_collaboration",
    "custom_document_templates",
    "workflows_advanced",
    "social_media_integrations",
    "api_access",
    "white_label",
    "client_management",
  ],
}

const USAGE_LIMITS: Record<Plan, Record<UsageLimit, number>> = {
  STARTER: {
    whatsapp_messages: 500,
    bookings: 50,
    leads: 200,
    documents: 20,
    content_generations: 50,
    team_members: 1,
    workflows: 0,
  },
  GROWTH: {
    whatsapp_messages: 2000,
    bookings: 200,
    leads: 1000,
    documents: 100,
    content_generations: 200,
    team_members: 3,
    workflows: 5,
  },
  PREMIUM: {
    whatsapp_messages: 10000,
    bookings: 1000,
    leads: 5000,
    documents: 500,
    content_generations: 1000,
    team_members: 10,
    workflows: 20,
  },
  AGENCY: {
    whatsapp_messages: -1, // Unlimited
    bookings: -1,
    leads: -1,
    documents: -1,
    content_generations: -1,
    team_members: -1,
    workflows: -1,
  },
}

export function hasFeature(plan: Plan, feature: Feature): boolean {
  return FEATURE_MATRIX[plan].includes(feature)
}

export function getUsageLimit(plan: Plan, limit: UsageLimit): number {
  return USAGE_LIMITS[plan][limit]
}

export function isUnlimited(plan: Plan, limit: UsageLimit): boolean {
  return USAGE_LIMITS[plan][limit] === -1
}

export async function checkUsageLimit(
  organizationId: string,
  limit: UsageLimit,
  currentUsage: number
): Promise<{ allowed: boolean; remaining: number }> {
  const subscription = await prisma.subscription.findUnique({
    where: { organizationId },
  })

  if (!subscription) {
    return { allowed: false, remaining: 0 }
  }

  const maxLimit = getUsageLimit(subscription.plan, limit)
  
  if (maxLimit === -1) {
    return { allowed: true, remaining: -1 }
  }

  const remaining = maxLimit - currentUsage
  return { allowed: remaining > 0, remaining }
}
```

### 9.3 Usage Tracking

**Database Schema Addition:**
```prisma
model UsageTracking {
  id             String   @id @default(cuid())
  organizationId String
  period         String   // YYYY-MM format
  
  whatsappMessages    Int @default(0)
  bookings            Int @default(0)
  leads               Int @default(0)
  documents           Int @default(0)
  contentGenerations  Int @default(0)
  
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  organization Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)

  @@unique([organizationId, period])
  @@index([organizationId])
}
```

**Usage Increment Function:**
```typescript
// lib/usage-tracking.ts

export async function incrementUsage(
  organizationId: string,
  metric: UsageLimit,
  amount: number = 1
): Promise<void> {
  const period = new Date().toISOString().slice(0, 7) // YYYY-MM

  await prisma.usageTracking.upsert({
    where: {
      organizationId_period: {
        organizationId,
        period,
      },
    },
    update: {
      [metric]: {
        increment: amount,
      },
    },
    create: {
      organizationId,
      period,
      [metric]: amount,
    },
  })
}
```

## 10. Open Questions

1. **AI Model Selection:**
   - Which LLM provider should be the default: OpenAI (GPT-4), Anthropic (Claude), or open-source?
   - Should we support multiple providers with fallback logic?
   - What's the budget for AI API costs per customer?

2. **WhatsApp Business API:**
   - Will we use Meta Cloud API or Business Solution Provider (BSP)?
   - What's the approval process timeline for WhatsApp Business Account?
   - How do we handle WhatsApp rate limits and message templates?

3. **Voice AI Implementation:**
   - Which voice AI provider: Twilio, Deepgram, or custom solution?
   - What's the latency requirement for voice responses?
   - How do we handle Arabic voice synthesis quality?

4. **Data Residency:**
   - Is UAE data residency a hard requirement for launch?
   - Which cloud provider has UAE regions: AWS, Azure, or GCP?
   - What's the cost impact of UAE-specific infrastructure?

5. **Pricing Strategy:**
   - Should we offer annual billing with discount (e.g., 20% off)?
   - Do we need a custom enterprise plan above Agency?
   - What's the free trial duration: 7, 14, or 30 days?

6. **Localization Depth:**
   - How comprehensive should Arabic translations be (UI only vs. all content)?
   - Do we need Arabic support for AI-generated content?
   - Should we support other languages (Hindi, Urdu) in the future?

7. **Integration Priorities:**
   - Which integrations are P0 for launch: WhatsApp, email, or social media?
   - Should we build native integrations or use Zapier/Make?
   - What's the timeline for calendar sync (Google, Outlook)?

8. **Compliance & Legal:**
   - Do we need UAE-specific terms of service and privacy policy?
   - What are the data retention requirements?
   - Do we need GDPR compliance even if focused on UAE?

9. **Mobile App:**
   - Is a native mobile app required for MVP or can we rely on PWA?
   - If native app needed, iOS only, Android only, or both?
   - What's the timeline and budget for mobile development?

10. **White-Label Implementation:**
    - How deep should white-labeling go: just branding or full custom domains?
    - Do agency customers need separate databases or just data isolation?
    - What's the pricing model for white-label resellers?

---

## Document Control

**Document Version:** 1.0  
**Last Updated:** 2025-11-29  
**Author:** Emma (Product Manager)  
**Status:** Draft for Review  
**Next Review Date:** 2025-12-06

**Change Log:**
- 2025-11-29: Initial PRD creation

**Approvals Required:**
- [ ] Product Team Lead
- [ ] Engineering Lead
- [ ] Design Lead
- [ ] Business Stakeholders

---

*This PRD is a living document and will be updated as requirements evolve and questions are answered.*