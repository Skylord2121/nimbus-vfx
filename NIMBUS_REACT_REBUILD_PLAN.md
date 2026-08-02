# Nimbus VFX React Rebuild Plan

## Goal

Rebuild NimbusVFX.com as a proper Skylord2121-owned GitHub project using React, TypeScript, Tailwind, reusable components, and Vercel Git deployment, while preserving the current live design one-to-one before making new design improvements.

## Committed Execution Goal

Build the new Nimbus VFX production source as a Skylord2121-owned React + TypeScript + Tailwind app, migrate the current live site into reusable components with one-to-one visual parity, connect the Skylord GitHub repo to the existing Vercel project, and make `nimbusvfx.com` deploy from GitHub instead of manual static HTML output.

This goal is active until the React app is the production source of truth and all public routes are verified on desktop and mobile.

## Non-Negotiables

- GitHub owner: `Skylord2121`.
- Production domain: `nimbusvfx.com`.
- Source of truth: React app, not standalone HTML files.
- Visual target: match the current live site first, then refine.
- Deployment model: GitHub commit -> Vercel build -> production domain.
- QA model: desktop and mobile visual passes through the in-app browser/CDP, plus route and asset checks.

## Current State

- The live site is deployed through Vercel from `deploy/nimbus-vfx`.
- The current build is static HTML/CSS with assets copied from `outputs/`.
- `nimbusvfx.com` is already aliased to the Vercel project named `nimbus-vfx`.
- The current Vercel project metadata lives at `deploy/nimbus-vfx/.vercel/project.json`.
- The Vercel project id is `prj_By0Akh1rOOUTeTQh03sqA5F6URtz`.
- The current global git identity is not the desired Nimbus identity, so local repo identity must be configured deliberately before commits.

## GitHub And Repo Setup

1. Switch the active GitHub CLI account to `Skylord2121`.
2. Create or confirm a Skylord-owned repo, recommended name: `nimbus-vfx`.
3. Initialize a real project root with git tracking.
4. Set local git identity for the Nimbus repo only.
5. Push the initial React app to `Skylord2121/nimbus-vfx`.
6. Connect the Vercel project to that GitHub repo.
7. Confirm `nimbusvfx.com` production deploys from the repo, not from manual output uploads.

## Recommended App Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router or file-backed route registry for current routes
- Framer Motion only where interaction quality matters
- Lucide React for icons
- Local asset pipeline using `/public/assets` or imported assets from `src/assets`

## Route Map

- `/` -> Home page
- `/clients` -> Client index
- `/client-intellibus` -> Intellibus transformation page
- `/client-watchanish` -> WatchAnish transformation page
- `/client-helene` -> From Thinking to Being transformation page
- `/projects` -> Portfolio/projects page
- `/portfolio` -> Redirect or alias to `/projects`
- `/privacy-policy` -> Privacy policy
- `/terms-of-use` -> Terms of use
- `/security` -> Security
- `/cookie-policy` -> Cookie policy

## Component Architecture

### Core Layout

- `AppShell`
- `SiteNav`
- `MobileMenu`
- `Footer`
- `PageSection`
- `SectionBackground`
- `ResponsiveContainer`

### Brand And Proof

- `BrandStrip`
- `ClientPortraitReel`
- `ClientTransformationCard`
- `ClientLogoLockup`
- `ProofMetric`
- `TestimonialCard`

### Video And Portfolio

- `PortfolioGrid`
- `ProjectHeroCard`
- `VideoPreviewCard`
- `NimbusVideoPlayer`
- `LikeButton`
- `ProjectFilterBar`
- `FeaturedWorkCarousel`

### Homepage

- `HomeHero`
- `ProblemPanel`
- `SolutionPanel`
- `ProofPanel`
- `TrustPanel`
- `AuditPanel`
- `ClosingPanel`

### Legal

- `LegalPage`
- `LegalSection`
- `LegalNav`

## Design Preservation Plan

1. Extract the current design tokens from existing CSS:
   - colors
   - font families
   - type scale
   - spacing scale
   - button shapes
   - panel heights
   - section image treatment
   - mobile breakpoints
2. Port tokens into `tailwind.config.ts`.
3. Rebuild each existing page in React using the same content, assets, spacing, and visual hierarchy.
4. Compare against live screenshots at desktop and mobile sizes.
5. Only after visual parity, begin design improvements.

## Asset Plan

- Move current production assets into a stable app asset directory.
- Preserve current generated rocket backgrounds and client portraits.
- Keep high-resolution originals where available.
- Replace brittle cache-busting query strings with hashed build assets.
- Add image metadata for every major asset:
  - source
  - page usage
  - desktop/mobile crop notes
  - replacement priority

## Page Migration Order

1. Project scaffold and routing.
2. Shared layout, nav, buttons, footer, typography, and brand strip.
3. Home page one-to-one.
4. Clients index one-to-one.
5. Individual client pages one-to-one.
6. Projects/portfolio page one-to-one.
7. Legal pages.
8. Video player and local like-state behavior.
9. Mobile navigation animation.
10. Final visual QA and production cutover.

## Design Improvement Order After Parity

1. Clean up clients page hierarchy and transformation browsing.
2. Improve portfolio video experience with larger previews, better ordering, filtering, and play states.
3. Refine mobile imagery and section rhythm.
4. Strengthen footer and legal page design.
5. Improve image loading, compression, and perceived performance.
6. Add a lightweight content data layer so projects and clients are easier to update.

## Data Model

Create typed content files instead of hardcoding every page:

- `src/content/clients.ts`
- `src/content/projects.ts`
- `src/content/testimonials.ts`
- `src/content/brandLogos.ts`
- `src/content/legal.ts`

Each client should include:

- company name
- leader name and role
- logo assets
- portrait assets
- transformation summary
- problem
- Nimbus solution
- wins
- learnings
- related projects
- featured video

Each project should include:

- title
- client
- category
- thumbnail
- video embed/source
- proof angle
- likes seed
- route slug
- featured priority

## QA Gates

### Local

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- desktop screenshot: 1440 x 950
- mobile screenshot: 390 x 844
- no broken images
- no horizontal overflow
- nav opens and closes on mobile
- video modal opens and closes
- like button updates locally

### Production

- Vercel deployment from GitHub commit.
- `nimbusvfx.com` resolves to latest production deployment.
- Same desktop and mobile screenshots from live domain.
- Route checks for every public URL.
- Legal pages reachable from footer.
- Asset loading verified on home, clients, projects, and all client detail pages.

## Definition Of Done

- The React project lives in a Skylord2121 GitHub repository.
- Vercel production deploys from that GitHub repository.
- NimbusVFX.com points to the Vercel production deployment.
- Current visual design is preserved one-to-one on desktop and mobile.
- All public routes work without `.html` URLs.
- The project can be developed with one local dev command.
- Components are reusable and content is typed.
- No future design work needs direct edits to generated HTML.

## Immediate Next Actions

1. Confirm or switch GitHub CLI to `Skylord2121`.
2. Create the React/Vite/Tailwind project in a clean source directory.
3. Move current assets into the app.
4. Port global design tokens.
5. Build shared layout components.
6. Recreate the current home page.
7. Run local QA against the current live screenshots.
8. Create the Skylord-owned GitHub repository and push.
9. Link Vercel to the GitHub repo.
10. Deploy from GitHub and verify `nimbusvfx.com`.
