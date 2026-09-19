# GharSe

A responsive full-stack MVP for a verified community homemade food marketplace.

## Included
- Warm, accessible Next.js App Router UI with responsive navigation
- Homepage, browse/search experience, food details, checkout safety acknowledgement
- Multi-step registration with explicit legal acceptance and mock verification states
- Seller listing form with allergen declaration and 10-meal guardrail
- Safety & verification center, legal draft, dashboard and reusable FoodCard components
- Prisma/PostgreSQL schema covering users, profiles, private verification references, listings, orders, reviews, messages, notifications and safety reports
- Demo-friendly content using Indian names and food imagery

## Stack
Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Lucide icons.

## Run locally
```bash
npm install
cp .env.example .env
# Set DATABASE_URL to a PostgreSQL database
npx prisma generate
npx prisma db push
npm run dev
```
Open http://localhost:3000.

## Environment variables
`DATABASE_URL` is required for Prisma. Add provider credentials later through environment variables only (Auth.js, object storage, OTP, payments, maps and email/SMS). Never commit secrets or document contents.

## Demo accounts
The current UI is prototype mode and does not claim successful identity verification. Create a demo account through `/register`; verification displays “awaiting verification”. A production build should add Auth.js credentials/OAuth and server-side authorization middleware.

## Production hardening checklist
- Add Auth.js sessions, secure password hashing, CSRF/rate limiting and route authorization.
- Upload documents directly to private encrypted object storage with MIME/size validation; retain only a storage key in PostgreSQL.
- Implement server actions/API validation with Zod and transaction-safe inventory updates.
- Connect approved identity, OTP, payment, maps and notification providers via environment variables.
- Add admin-only review APIs, immutable audit logs, dispute workflow and legal review for each operating jurisdiction.

## Deployment
Deploy to Vercel or another Node host, provision PostgreSQL, configure environment variables, run `prisma migrate deploy`, then build with `npm run build`.
