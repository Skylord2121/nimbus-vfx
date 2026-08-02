# Nimbus VFX Agent Instructions

These instructions apply to all Nimbus VFX website work in this workspace.

## GitHub Ownership

- Nimbus VFX work must be owned by the `Skylord2121` GitHub account.
- Do not create, push, or connect Nimbus repositories under `danielcallaghan`.
- Before any Nimbus git write, verify the active GitHub CLI account is `Skylord2121` with `gh auth status`.
- Before any Nimbus commit, verify the local repo identity is set to the Skylord account, not the global Daniel Callaghan identity.
- If a repository does not exist yet, create the production source repository under `Skylord2121`.

## Source Of Truth

- Do not keep hand-authored standalone HTML as the long-term source of truth for NimbusVFX.com.
- Rebuild the site as a proper React + TypeScript + Tailwind application with reusable components.
- Preserve the current live visual direction one-to-one first, then improve it through intentional component and design passes.
- Treat `outputs/` and `deploy/nimbus-vfx/` as legacy reference/export folders until the React app fully replaces them.

## Deployment

- NimbusVFX.com must deploy from the Skylord-owned GitHub repository through Vercel.
- Keep Vercel connected to the GitHub repo so production deploys are traceable to commits.
- Do not manually patch production output as the normal workflow once the React app is established.

## QA

- Use visual QA for desktop and mobile before deploying major design changes.
- Prefer the native in-app browser/CDP flow for live screenshots and responsive checks.
- Check for broken images, horizontal overflow, font loading, route rewrites, and mobile navigation behavior.
