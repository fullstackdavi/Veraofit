# Desafio Verão 30D

## Overview

Desafio Verão 30D is a 30-day summer fitness challenge application focused on weight loss and body transformation. The platform provides users with daily challenges, healthy recipes, nutrition tips, and progress tracking through an interactive calendar interface. The application targets users preparing for summer with an accessible pricing model (R$29.90) and emphasizes visual progress motivation and an energetic, app-native user experience inspired by wellness platforms like Headspace and Calm.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal performance with HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (chosen over React Router for smaller bundle size)
- **Single Page Application (SPA)** architecture with client-side rendering

**State Management**
- **TanStack Query (React Query)** for server state management, data fetching, and caching
- Local component state using React hooks (useState, useEffect)
- No global state management library (Redux/Zustand) - chosen for simplicity given the application scope

**UI Component System**
- **Shadcn/ui** component library based on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with a custom design system
- Custom CSS variables for theming (light mode focused with defined color tokens)
- Component composition pattern with variants using `class-variance-authority`

**Design System Decisions**
- **Typography**: Poppins (primary) and Inter (secondary) from Google Fonts for modern, readable interface
- **Mobile-first responsive design** with breakpoints at 768px (tablet) and larger
- **Energetic minimalism** design philosophy balancing clean layouts with summer energy
- **Color system** based on HSL values with semantic naming (primary, secondary, accent, muted)
- Consistent spacing using Tailwind's 4-based scale (4, 8, 16, 24)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js for the HTTP server
- **TypeScript** with ES Modules for type safety and modern JavaScript features
- Custom middleware for request logging, JSON parsing, and response capture

**API Design**
- RESTful API pattern with `/api` prefix for all application routes
- Request/response logging middleware for development debugging
- Currently minimal route implementation - designed for expansion

**Development Environment**
- **Vite middleware mode** integration for seamless development experience
- HMR support through Vite's dev server
- Environment-specific configuration (development vs production)

**Code Organization**
- Monorepo structure with shared types between client and server (`shared/` directory)
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- Separation of concerns: routes, storage layer, and server setup

### Data Storage Solutions

**Current State: In-Memory Storage**
- `MemStorage` class implementing `IStorage` interface
- HashMap-based user storage with UUID generation
- Designed as temporary solution for development/testing

**Planned: PostgreSQL with Drizzle ORM**
- **Drizzle ORM** configured for PostgreSQL database operations
- **Neon Database** serverless PostgreSQL (@neondatabase/serverless driver)
- Schema-first approach with TypeScript type inference
- Migration system using `drizzle-kit` for schema evolution

**Database Schema Design**
- `users` table with UUID primary keys, username (unique), and password fields
- Zod integration via `drizzle-zod` for runtime validation
- Schema separation in `shared/schema.ts` for client-server type sharing

**Rationale for Drizzle ORM**
- Type-safe queries with full TypeScript inference
- Lightweight compared to traditional ORMs (Prisma, TypeORM)
- SQL-like query builder familiar to developers
- Better performance characteristics for serverless environments

### Authentication & Authorization

**Current Implementation**
- Basic user model with username/password fields defined
- No active authentication system implemented yet
- Storage interface includes user lookup methods (by ID and username)

**Planned Architecture**
- Session-based authentication likely using `connect-pg-simple` (already in dependencies)
- Password hashing required (bcrypt or argon2 recommended)
- Protected routes for authenticated users only
- User progress data tied to authenticated user sessions

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** primitives (v1.x) - 20+ component primitives for accessible UI building
- **Lucide React** - Icon library for consistent iconography
- **cmdk** - Command palette component
- **Embla Carousel** - Touch-friendly carousel implementation
- **date-fns** - Date utility library for formatting and manipulation
- **Vaul** - Drawer component for mobile interactions

**Development Tools**
- **Replit-specific plugins** for cartographer and dev banner (development only)
- **ESBuild** for production server bundling
- **TSX** for TypeScript execution in development
- **PostCSS** with Autoprefixer for CSS processing

**Data Handling**
- **Zod** - Runtime type validation and schema definition
- **React Hook Form** with resolver integration for form management
- **@hookform/resolvers** - Zod integration for form validation

**Key Design Decisions**

1. **Why Vite over Create React App**: Faster build times, better HMR, native ESM support, and active maintenance

2. **Why Wouter over React Router**: Significantly smaller bundle size (~1KB vs ~11KB), sufficient for single-page app needs

3. **Why Drizzle over Prisma**: Better TypeScript inference, smaller runtime overhead, more control over SQL queries, serverless-friendly

4. **Why In-Memory Storage Initially**: Rapid prototyping without database setup, easier testing, clear migration path to PostgreSQL

5. **Why Shadcn/ui**: Ownership of components (copy-paste model), full customization without package updates, Radix UI accessibility benefits

6. **Why TanStack Query**: Industry standard for server state, excellent caching strategies, optimistic updates support, devtools for debugging

7. **Mobile-First Responsive**: Majority of fitness app usage on mobile devices, progressive enhancement approach

**Current Limitations & Future Considerations**

- No user authentication implemented - critical for production
- Mock data in `home.tsx` for 30-day challenge content - needs backend integration
- No payment processing integration despite pricing section - requires Stripe or similar
- In-memory storage will lose data on server restart - PostgreSQL migration needed
- No image upload or storage solution for user progress photos
- No email service integration for user notifications or password reset
- No analytics or tracking implementation for user engagement metrics