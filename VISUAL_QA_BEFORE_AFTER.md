# Nimbus VFX Before/After Visual QA

Date: August 2, 2026

## Sources Compared

- Before baseline: `/deploy/nimbus-vfx`
- After rebuild: `/nimbus-vfx-react/dist`
- Desktop viewport: `1440 x 950`
- Mobile viewport: `390 x 844`

## Evidence

Local contact sheets:

- Desktop homepage: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa/desktop-home-before-after.png`
- Desktop clients and projects: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa/desktop-pages-before-after.png`
- Mobile homepage, clients, projects, menu: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa/mobile-before-after.png`

## Verdict

The React rebuild is not visually one-to-one with the previous static site.

The rebuild preserved some copy, routes, and assets, but it did not preserve the old visual system. The biggest drift is not broken image loading. The assets exist in both trees. The problem is that the React app reassembled the pages with new layout rules, new section heights, new overlays, new mobile behavior, and a simplified portfolio/client page treatment.

Visual parity status: failed.

## Highest Priority Findings

### P0: Projects page lost its entire cinematic black theater direction

Before, the projects page opened as a dark, immersive video surface with a large featured preview, visible playlist thumbnails, likes, autoplay state, and a streaming/watch-surface feeling.

After, the page is a light editorial layout with a single large image and buttons. It no longer feels like the portfolio viewing experience that was designed.

Impact: This is the largest brand and UX regression. The portfolio page was supposed to sell visual production through scale and playback behavior; the React version makes it feel like a standard landing page.

Fix direction:

- Restore the dark portfolio hero system.
- Restore the large featured preview card, play affordance, likes/views, and carousel/playlist dock.
- Rebuild the portfolio grid from the old `projects.html` and `assets/work-pages.css` behavior before adding new React abstractions.

### P0: Homepage visual pacing was compressed

Measured section heights:

- Old home hero: `1036px`; React hero: `656px`.
- Old problem: `947px`; React problem: `760px`.
- Old solution: `1151px`; React solution: `803px`.
- Old proof: `1010px`; React proof: `809px`.
- Old audit: `938px`; React audit: `760px`.

Impact: The old page had a cinematic, panel-by-panel journey. The React page is much shorter and flatter, so it loses the dramatic progression through the rocket imagery.

Fix direction:

- Match the old section heights and vertical pacing first.
- Port the old section-specific layout rules instead of relying on the generic `.home-section` rules in `src/index.css`.
- Recheck every panel at the same scroll offsets after the fix.

### P1: Image art direction exists, but the overlays and crops are wrong

The same HD assets are present in both versions, but the React overlays make them washed out and the crops feel less intentional.

Examples:

- Hero: the old hero has stronger blue sky, stronger rocket placement, and richer foliage edges. The React hero is over-faded and the title is smaller/less dominant.
- Problem: the old composition gives the rocket and clouds more balanced space between left and right content. The React version is close, but weaker and flatter.
- Proof/audit: the React section sequencing appears shifted; proof/audit views do not line up with the old narrative order.

Impact: The user-facing issue presents as "low-res" or "cheap," even when the underlying files are high quality.

Fix direction:

- Restore old background overlay opacity, image-set usage, and per-section positioning from the old static CSS.
- Do not use one generic overlay for all sections.
- Preserve the old desktop `image-set()` behavior using `1920/3840` AVIF/WebP sources.

### P1: Navigation lost the old fixed glass treatment

Before, the nav was fixed, sat over imagery, and had the more developed glass/refraction treatment.

After, the nav is sticky, flatter, whiter, and more separated from the imagery.

Impact: The top of the site feels less premium and less integrated with the cinematic background.

Fix direction:

- Restore fixed header behavior.
- Restore the old `.site-header`/`.nav` material treatment from the static CSS.
- Keep the React component structure, but port the exact visual styling.

### P1: Mobile design is not the same system

Before, mobile had a more specific information system:

- compact hero
- icon-backed capability rows
- more cinematic image presence
- compact menu rows
- bottom CTA inside the menu

After, mobile is more text-heavy and generic:

- bigger text blocks
- less detail in capability rows
- simplified menu with oversized item headings
- no bottom CTA treatment matching the old menu

Impact: The mobile version no longer carries the same designed rhythm, and it is closer to a simplified responsive fallback.

Fix direction:

- Restore the old mobile menu animation and menu layout structure.
- Restore mobile capability rows with icons and supporting text.
- Compare each mobile panel against old static screenshots before touching desktop again.

### P1: Footer no longer matches the selected full-section footer

Before, the footer had a larger cloud/rocket CTA field and a fuller navigation/contact/footer structure.

After, the footer CTA is much shorter and the final page rhythm ends abruptly.

Impact: The close of the page no longer feels like the footer direction selected during design.

Fix direction:

- Restore old footer CTA height, image treatment, and column rhythm.
- Keep updated contact details and social links, but port the old layout.

### P2: Client page is closer, but still not one-to-one

The clients hero is the closest match, but there are still visible differences:

- React headline scale is smaller.
- Ed image/card scale and crop shifted.
- Right-side client cards are cropped and spaced differently.
- Client index section begins lower and breathes differently.
- Brand strip behavior/spacing is not the same.

Impact: This page is salvageable faster than the home/projects pages, but still needs parity work.

Fix direction:

- Port the old `client-restored-hero` and client index layout more directly.
- Keep the React data model, but use the old layout proportions.

## Root Cause

The React rebuild was recreated from content and approximate intent instead of porting the exact old static HTML/CSS composition.

Key files:

- `src/pages/HomePage.tsx` defines a simplified section structure for the homepage.
- `src/index.css` defines generic section, background, overlay, button, nav, and mobile behavior.
- The old static baseline has highly specific inline CSS in `deploy/nimbus-vfx/index.html` and page CSS in `deploy/nimbus-vfx/assets/work-pages.css`.

The assets were copied correctly. The composition rules were not.

## Recommended Fix Order

1. Restore homepage parity first.
   - Start with nav, hero, brand strip, problem, solution, proof, audit, close, footer.
   - Use the old static CSS as the source of truth.
   - Keep React components, but match the old DOM classes and layout behavior where useful.

2. Restore projects page parity second.
   - This is the most visually broken page.
   - Do not keep the current light projects hero.
   - Rebuild the old dark theater experience in React.

3. Restore mobile parity third.
   - Recheck old mobile hero, problem, solution, projects hero, and menu.
   - Bring back compact rows, icons, menu CTA, and the older cinematic density.

4. Restore client page details fourth.
   - Clients page is closer, so fix after the bigger regressions.

5. Rerun the same visual QA contact sheets.
   - Do not rely on route checks alone.
   - The pass condition is visual parity, not just "no broken images."

## QA Artifacts Generated

- Raw screenshots: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa`
- Section maps: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa/section-maps.json`
- Pixel delta metrics: `/Users/danielcallaghan/Documents/Codex/2026-06-22/created-the-compact-handoff-here-thread/tmp/before-after-visual-qa/image-diff-metrics.json`
