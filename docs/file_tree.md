# Emerald AI Suite - Project File Structure

```
emerald-ai-suite/
│
├── app/                                    # Next.js 14 App Router
│   ├── [locale]/                           # Internationalization wrapper
│   │   ├── (public)/                       # Public routes (no auth required)
│   │   │   ├── layout.tsx                  # Public layout
│   │   │   ├── page.tsx                    # Home page
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx                # Pricing page
│   │   │   ├── features/
│   │   │   │   └── page.tsx                # Features page
│   │   │   ├── industries/
│   │   │   │   └── page.tsx                # Industries page
│   │   │   ├── privacy-policy/
│   │   │   │   └── page.tsx                # Privacy policy
│   │   │   └── terms/
│   │   │       └── page.tsx                # Terms of service
│   │   │
│   │   ├── auth/                           # Authentication pages
│   │   │   ├── login/
│   │   │   │   └── page.tsx                # Login page
│   │   │   ├── register/
│   │   │   │   └── page.tsx                # Registration page
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx                # Forgot password
│   │   │   └── reset-password/
│   │   │       └── [token]/
│   │   │           └── page.tsx            # Reset password with token
│   │   │
│   │   ├── onboarding/                     # Onboarding wizard
│   │   │   ├── layout.tsx                  # Onboarding layout
│   │   │   ├── step-1/
│   │   │   │   └── page.tsx                # Business info
│   │   │   ├── step-2/
│   │   │   │   └── page.tsx                # Language selection
│   │   │   └── step-3/
│   │   │       └── page.tsx                # Plan selection
│   │   │
│   │   ├── (app)/                          # Protected app routes
│   │   │   ├── layout.tsx                  # App layout with sidebar
│   │   │   ├── page.tsx                    # Dashboard home
│   │   │   ├── receptionist/
│   │   │   │   └── page.tsx
│   │   │   ├── whatsapp/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── rules/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── templates/
│   │   │   │       └── page.tsx
│   │   │   ├── chat-widget/
│   │   │   │   └── page.tsx
│   │   │   ├── bookings/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── list/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [bookingId]/
│   │   │   │       └── page.tsx
│   │   │   ├── crm/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── leads/
│   │   │   │   │   ├── create/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── [leadId]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── customers/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [customerId]/
│   │   │   │           └── page.tsx
│   │   │   ├── inbox/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [conversationId]/
│   │   │   │       └── page.tsx
│   │   │   ├── documents/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── templates/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [documentId]/
│   │   │   │       └── page.tsx
│   │   │   ├── content/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── generate/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── drafts/
│   │   │   │       ├── page.tsx
│   │   │   │       └── [draftId]/
│   │   │   │           └── page.tsx
│   │   │   ├── workflows/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [workflowId]/
│   │   │   │       └── page.tsx
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── members/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── api-keys/
│   │   │   │       └── page.tsx
│   │   │   └── billing/
│   │   │       ├── page.tsx
│   │   │       ├── success/
│   │   │       │   └── page.tsx
│   │   │       └── history/
│   │   │           └── page.tsx
│   │   │
│   │   └── layout.tsx                      # Root locale layout
│   │
│   ├── api/                                # API Routes
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── reset-password/route.ts
│   │   ├── organizations/
│   │   │   ├── route.ts
│   │   │   ├── [orgId]/
│   │   │   │   ├── route.ts
│   │   │   │   └── members/route.ts
│   │   │   ├── switch/route.ts
│   │   │   └── user-orgs/route.ts
│   │   ├── leads/
│   │   │   ├── route.ts
│   │   │   └── [leadId]/
│   │   │       ├── route.ts
│   │   │       └── stage/route.ts
│   │   ├── customers/
│   │   │   ├── route.ts
│   │   │   └── [customerId]/route.ts
│   │   ├── bookings/
│   │   │   ├── route.ts
│   │   │   └── [bookingId]/
│   │   │       ├── route.ts
│   │   │       └── status/route.ts
│   │   ├── conversations/
│   │   │   ├── route.ts
│   │   │   └── [conversationId]/
│   │   │       ├── route.ts
│   │   │       └── messages/route.ts
│   │   ├── documents/
│   │   │   ├── route.ts
│   │   │   └── [documentId]/
│   │   │       ├── route.ts
│   │   │       └── pdf/route.ts
│   │   ├── content/
│   │   │   ├── generate/route.ts
│   │   │   └── drafts/
│   │   │       ├── route.ts
│   │   │       └── [draftId]/route.ts
│   │   ├── workflows/
│   │   │   ├── route.ts
│   │   │   └── [workflowId]/
│   │   │       ├── route.ts
│   │   │       └── toggle/route.ts
│   │   ├── billing/
│   │   │   ├── subscription/route.ts
│   │   │   ├── checkout/route.ts
│   │   │   ├── portal/route.ts
│   │   │   └── cancel/route.ts
│   │   ├── webhooks/
│   │   │   └── stripe/route.ts
│   │   └── dashboard/route.ts
│   │
│   ├── globals.css                         # Global styles
│   ├── layout.tsx                          # Root layout
│   └── providers.tsx                       # Client providers
│
├── components/                             # React components
│   ├── ui/                                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   │
│   ├── public/                             # Public page components
│   │   ├── hero.tsx
│   │   ├── features-grid.tsx
│   │   ├── pricing-table.tsx
│   │   ├── testimonials.tsx
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   │
│   ├── auth/                               # Auth components
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   ├── forgot-password-form.tsx
│   │   └── reset-password-form.tsx
│   │
│   ├── app/                                # App-specific components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── org-switcher.tsx
│   │   ├── user-menu.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── metric-card.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── recent-activity.tsx
│   │   │   └── quick-actions.tsx
│   │   │
│   │   ├── crm/
│   │   │   ├── kanban-board.tsx
│   │   │   ├── lead-card.tsx
│   │   │   ├── lead-detail-modal.tsx
│   │   │   └── create-lead-form.tsx
│   │   │
│   │   ├── bookings/
│   │   │   ├── calendar.tsx
│   │   │   ├── booking-list.tsx
│   │   │   ├── booking-form.tsx
│   │   │   └── booking-card.tsx
│   │   │
│   │   ├── inbox/
│   │   │   ├── conversation-list.tsx
│   │   │   ├── conversation-view.tsx
│   │   │   ├── message-bubble.tsx
│   │   │   └── reply-input.tsx
│   │   │
│   │   ├── documents/
│   │   │   ├── template-selector.tsx
│   │   │   ├── document-form.tsx
│   │   │   ├── document-preview.tsx
│   │   │   └── document-list.tsx
│   │   │
│   │   ├── content/
│   │   │   ├── content-type-tabs.tsx
│   │   │   ├── content-form.tsx
│   │   │   ├── content-preview.tsx
│   │   │   └── drafts-list.tsx
│   │   │
│   │   └── workflows/
│   │       ├── workflow-list.tsx
│   │       ├── workflow-builder.tsx
│   │       └── workflow-card.tsx
│   │
│   └── shared/                             # Shared components
│       ├── language-switcher.tsx
│       ├── loading-skeleton.tsx
│       ├── error-boundary.tsx
│       ├── empty-state.tsx
│       └── pagination.tsx
│
├── lib/                                    # Utility libraries
│   ├── db.ts                               # Prisma client instance
│   ├── auth.ts                             # NextAuth configuration
│   ├── stripe.ts                           # Stripe client
│   ├── utils.ts                            # Helper functions
│   ├── constants.ts                        # App constants
│   │
│   ├── validations/                        # Zod validation schemas
│   │   ├── auth.ts
│   │   ├── organization.ts
│   │   ├── lead.ts
│   │   ├── booking.ts
│   │   ├── conversation.ts
│   │   ├── document.ts
│   │   └── content.ts
│   │
│   ├── services/                           # Business logic services
│   │   ├── auth-service.ts
│   │   ├── organization-service.ts
│   │   ├── feature-gating-service.ts
│   │   ├── billing-service.ts
│   │   ├── lead-service.ts
│   │   ├── booking-service.ts
│   │   ├── conversation-service.ts
│   │   ├── document-service.ts
│   │   ├── content-service.ts
│   │   └── workflow-service.ts
│   │
│   ├── hooks/                              # Custom React hooks
│   │   ├── use-organization.ts
│   │   ├── use-current-user.ts
│   │   ├── use-subscription.ts
│   │   ├── use-leads.ts
│   │   ├── use-bookings.ts
│   │   └── use-conversations.ts
│   │
│   └── api/                                # API client helpers
│       ├── client.ts                       # Client-side API calls
│       └── server.ts                       # Server-side API calls
│
├── prisma/                                 # Prisma ORM
│   ├── schema.prisma                       # Database schema
│   ├── migrations/                         # Migration files
│   │   └── ...
│   └── seed.ts                             # Database seed script
│
├── types/                                  # TypeScript type definitions
│   ├── models.ts                           # Prisma model types
│   ├── api.ts                              # API request/response types
│   ├── forms.ts                            # Form data types
│   └── index.ts                            # Exported types
│
├── messages/                               # i18n translation files
│   ├── en.json                             # English translations
│   └── ar.json                             # Arabic translations
│
├── public/                                 # Static assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero.png
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   └── fonts/
│       └── ...
│
├── docs/                                   # Documentation
│   ├── prd.md                              # Product Requirements Document
│   ├── system_design.md                    # System Design Document
│   ├── architect.plantuml                  # Architecture diagram
│   ├── class_diagram.plantuml              # Class diagram
│   ├── sequence_diagram.plantuml           # Sequence diagrams
│   ├── er_diagram.plantuml                 # ER diagram
│   ├── ui_navigation.plantuml              # UI navigation flow
│   └── file_tree.md                        # This file
│
├── .env.example                            # Environment variables template
├── .env.local                              # Local environment variables (gitignored)
├── .eslintrc.json                          # ESLint configuration
├── .gitignore                              # Git ignore rules
├── .prettierrc                             # Prettier configuration
├── middleware.ts                           # Next.js middleware
├── next.config.js                          # Next.js configuration
├── package.json                            # NPM dependencies
├── postcss.config.js                       # PostCSS configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
├── tsconfig.json                           # TypeScript configuration
└── README.md                               # Project README
```

## Key Directory Explanations

### `/app` Directory
- **Next.js 14 App Router** structure with file-based routing
- **`[locale]/`**: Internationalization wrapper for English/Arabic support
- **`(public)/`**: Route group for public marketing pages (no auth required)
- **`auth/`**: Authentication pages (login, register, password reset)
- **`onboarding/`**: 3-step onboarding wizard for new users
- **`(app)/`**: Route group for protected application pages (requires auth)
- **`api/`**: API routes for backend functionality

### `/components` Directory
- **`ui/`**: shadcn/ui component library (buttons, forms, dialogs, etc.)
- **`public/`**: Components specific to public marketing pages
- **`auth/`**: Authentication-related components
- **`app/`**: Application-specific components organized by feature
- **`shared/`**: Reusable components used across the app

### `/lib` Directory
- **Root files**: Core utilities (database, auth, Stripe, helpers)
- **`validations/`**: Zod schemas for form and API validation
- **`services/`**: Business logic layer (service classes)
- **`hooks/`**: Custom React hooks for data fetching and state
- **`api/`**: API client helpers for making requests

### `/prisma` Directory
- **`schema.prisma`**: Complete database schema with 17+ models
- **`migrations/`**: Database migration history
- **`seed.ts`**: Script to populate database with sample data

### `/types` Directory
- Centralized TypeScript type definitions
- Ensures type safety across the application

### `/messages` Directory
- JSON translation files for i18n support
- Organized by locale (en, ar)

### `/docs` Directory
- Complete project documentation
- Architecture diagrams in PlantUML format
- System design and technical specifications

## File Naming Conventions

- **Pages**: `page.tsx` (Next.js convention)
- **Layouts**: `layout.tsx` (Next.js convention)
- **API Routes**: `route.ts` (Next.js convention)
- **Components**: `kebab-case.tsx` (e.g., `lead-card.tsx`)
- **Services**: `kebab-case-service.ts` (e.g., `auth-service.ts`)
- **Hooks**: `use-kebab-case.ts` (e.g., `use-organization.ts`)
- **Types**: `kebab-case.ts` (e.g., `api-types.ts`)

## Important Notes

1. **Multi-tenant Architecture**: All data queries are scoped by `organizationId`
2. **Authentication**: NextAuth v5 with email/password (OAuth-ready)
3. **Billing**: Stripe integration with webhook handlers
4. **i18n**: Full English and Arabic support with RTL layout
5. **Feature Gating**: Plan-based access control throughout the app
6. **API Structure**: RESTful design with consistent response formats
7. **Type Safety**: Full TypeScript coverage with strict mode
8. **Validation**: Zod schemas on both client and server
9. **State Management**: React Query for server state, Context for UI state
10. **Styling**: Tailwind CSS with shadcn/ui component library