# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Run Next.js dev server
pnpm dev:convex       # Run Convex dev server (separate terminal)
pnpm build            # Build for production
pnpm lint             # Lint with Biome
pnpm format           # Auto-fix with Biome

```

Both `pnpm dev` and `pnpm dev:convex` must run simultaneously during development.

## Architecture

**RoastMyResume** is a Next.js 14 App Router app that takes a resume + job description and uses gpt-5-mini to generate constructive feedback grounded in the supplied documents. Results are stored persistently and shareable via URL.

### Key Data Flow

1. User submits resume + job description on `/analyze`
2. `POST /api/analyze` — rate-limited, auth-gated endpoint that calls gpt-5-mini and saves result to Convex
3. User is redirected to `/results/[id]` — publicly shareable result page

### Tech Stack

- **Auth**: Clerk (`@clerk/nextjs`) — middleware in `src/middleware.ts`
- **Database**: Convex — real-time backend with schema in `convex/schema.ts`
- **Payments**: Credit purchases are currently disabled; no checkout or webhook routes are implemented.
- **AI**: OpenAI gpt-5-mini via `openai` package
- **Rate limiting**: Upstash Redis (`@upstash/ratelimit`); falls back to in-memory for dev
- **PDF parsing**: `unpdf` via `/api/parse-resume`
- **Error tracking**: Sentry (configured in `sentry.*.config.ts`)
- **Linting/formatting**: Biome (not ESLint/Prettier)

### Convex Backend (`convex/`)

- `schema.ts` — defines tables: `users`, `freeRoasts`, `results`, `payments`, `analytics`
- `users.ts` — `getOrCreate`, `useRoast`, `addRoasts`, `getStats` mutations/queries
- `freeTier.ts` — tracks guest email usage of free tier
- `results.ts` — save/retrieve analysis results
- `admin.ts` — admin stats queries

Users get 3 free roasts on signup (`FREE_ROASTS = 3` in `convex/users.ts`). After that, the API returns 402; purchasing more credits is currently disabled.

### API Routes (`src/app/api/`)

| Route | Purpose |
|-------|---------|
| `/api/analyze` | Main analysis endpoint — auth required, rate-limited |
| `/api/parse-resume` | Extract text from uploaded PDF |
| `/api/og/[id]` | Dynamic OG image generation for sharing |
| `/api/pdf/[id]` | Generate PDF of results |
| `/api/user/check` | Check/create user account (public) |
| `/api/admin/stats` | Admin dashboard stats |

### Auth & Route Protection

Clerk middleware in `src/middleware.ts` protects `/dashboard` and `/api/user/*`. Most routes are public — the analyze endpoint handles its own auth check internally (returns 401 if not authenticated, 402 if no roasts remaining).

### Linting Rules

Biome is configured in `biome.json`. Key deviations from defaults:
- Tabs for indentation, 100 char line width, double quotes
- `noNonNullAssertion`, `noArrayIndexKey`, `useButtonType`, `noSvgWithoutTitle` are all disabled

### Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
OPENAI_API_KEY
NEXT_PUBLIC_URL
NEXT_PUBLIC_CONVEX_URL
NEXT_PUBLIC_ADMIN_PASSWORD
UPSTASH_REDIS_REST_URL      # Optional — rate limiting falls back to in-memory
UPSTASH_REDIS_REST_TOKEN    # Optional
```

## Feedback and demo rules

Keep feedback grounded in supplied resume/JD facts. Do not invent metrics, employer opinions, applicant ranks, or actual rejection reasons. Label keyword scores as AI estimates. `/demo` is a public, fixed, fictional sample, not a live result or an authentication bypass.
