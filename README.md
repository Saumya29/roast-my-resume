# RoastMyResume

Compare a resume with a job description and get specific, constructive AI feedback.

[Live app](https://roast.saumyat.com) · [Public sample analysis](https://roast.saumyat.com/demo)

## Try it

The sample is a fixed, hand-written example with fictional inputs. It needs no account and does not call AI or consume credits. For a live review, sign in and supply your own resume and job description. New accounts receive three free reviews; paid credit purchases are not currently enabled.

## Features

- Resume/job requirement comparison and supporting notes
- Skill evidence gaps and three prioritized next steps
- Bullet rewrites instructed to preserve the original facts
- AI keyword-fit estimate, explicitly labelled as an estimate rather than an employer ATS test
- Shareable results and PDF export
- PDF text extraction with unpdf

AI cannot establish actual rejection reasons or employer opinions. Applicant counts and ranking predictions are not displayed. Check generated advice before using it; do not add unverified claims to a resume. Results links are publicly shareable, so use fictional inputs when demonstrating the project.

## Stack

Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, OpenAI gpt-5-mini, Clerk authentication, Convex storage, optional Upstash rate limiting, and Sentry error tracking. Deployed on Vercel.

## Run locally

```bash
pnpm install
cp .env.example .env.local
# Fill in OpenAI, Clerk and Convex settings for live analysis.
pnpm dev
```

Use `pnpm dev:convex` when developing the Convex backend. Use `pnpm build` to verify production compilation.

## Environment

| Variable | Purpose |
|----------|---------|
| `OPENAI_API_KEY` | Live AI analysis |
| `NEXT_PUBLIC_CONVEX_URL` | Convex deployment |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` | Authentication |
| `NEXT_PUBLIC_URL` | Canonical URL, normally `https://roast.saumyat.com` |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Optional distributed rate limiting |

Analysis requires authentication and available credits. The sample page does not bypass those checks.
