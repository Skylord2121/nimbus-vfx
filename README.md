# Nimbus VFX

Production source for NimbusVFX.com.

This repo replaces the previous manual static HTML deployment workflow with a React + TypeScript + Tailwind app. The goal is one-to-one visual parity with the current live site first, followed by cleaner design iterations inside reusable components.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Motion-ready component structure
- Vercel deployment

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
npm run audit
```

## Ownership

Nimbus VFX work belongs under the `Skylord2121` GitHub account. Before any commit or push, verify:

```bash
gh auth status
git config user.name
git config user.email
```

Do not create or connect Nimbus production work under `danielcallaghan`.

## Source Structure

- `src/content`: typed content for clients, projects, brand logos, homepage copy, and legal pages.
- `src/components`: reusable UI primitives and shared site components.
- `src/pages`: route-level pages.
- `public/assets`: production imagery, logos, thumbnails, fonts, and generated backgrounds.
- `vercel.json`: clean URL and security header configuration.

## Public Routes

- `/`
- `/clients`
- `/client-intellibus`
- `/client-watchanish`
- `/client-helene`
- `/projects`
- `/portfolio`
- `/privacy-policy`
- `/terms-of-use`
- `/security`
- `/cookie-policy`

## QA Gate

Before production deployment:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build`
4. Desktop visual QA at `1440 x 950`
5. Mobile visual QA at `390 x 844`
6. Confirm no broken images and no horizontal overflow
7. Confirm video modal, like button, mobile menu, and clean routes
