# Premium Rebrand Implementation Plan

> **For agentic workers:** This is a visual/theme redesign with no existing test
> suite (no test runner in `package.json`). Verification substitutes
> `npm run build`, `npm run lint`, and a `grep` sweep for retired tokens in
> place of unit tests. Execute inline, batch by phase, commit after each
> phase.

**Goal:** Re-theme the entire Yousha site from the placeholder dark-leather
look to a black/copper/white premium identity built from the real logo, with
a reusable watermark system, without changing copy/content.

**Architecture:** Tailwind v4 `@theme` tokens in `globals.css` drive every
component via existing `text-*`/`bg-*`/`border-*` utility classes (e.g.
`text-thread` becomes `text-copper`) — so re-theming is mostly a token
rename + utility-class find/replace, plus new `Logo`/`Watermark` components
and targeted layout tightening where components had leather-specific
textures (`.quilt`, `.grain`) baked into their JSX.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript.

## Global Constraints

- Palette: `ink #17130F`, `ink-2 #231D18`, `copper #B15A2B`, `copper-deep
  #8F4620`, `copper-light #D98A57`, `paper #FDFCFA`, `stone #F1EDE6`,
  `stone-2 #E7E0D4`, `muted #4A433C`.
- Retire tokens: `hide*`, `saddle*`, `thread*`, `racing*`, `oxblood`. Retire
  utilities: `.quilt`, `.quilt-green`, `.grain`.
- No content/copy changes — visual/theme only.
- `npm run build` must pass after every phase.
- No Facebook imagery this phase (confirmed unfetchable).

---

## Phase 1: Tokens & base styles

**Files:** Modify `src/app/globals.css`.

- [ ] Replace `@theme` color block with the new palette (keep `--font-display`,
  `--font-sans`, `--ease-out-quart` as-is).
- [ ] Remove `.quilt`, `.quilt-green`, `.grain` utility classes.
- [ ] Recolor `.stitch`/`.stitch-v` to `var(--color-copper)`.
- [ ] Recolor `.skip-link`, `::selection`, `:focus-visible` to copper/ink.
- [ ] Run `npm run build` — expect it to still succeed (components still
  reference old token names at this point, Tailwind v4 will just emit
  unused/undefined utility warnings, not hard errors, but note any it flags).
- [ ] Commit: `git commit -m "style: replace leather palette with premium black/copper/white tokens"`

## Phase 2: Brand components

**Files:**
- Modify: `src/components/Logo.tsx`
- Create: `src/components/Watermark.tsx`
- Modify: `src/app/icon.svg`
- Modify: `src/components/StampSeal.tsx`

**Interfaces produced for later phases:**
- `Logo({ className?, dark?: boolean })` — same signature as before, `dark`
  now selects raster-on-light vs SVG-recreation-on-dark.
- `Watermark({ tone: "copper" | "ink" | "paper", position: "corner-br" |
  "corner-tl" | "center", className? })` — absolutely positioned,
  `pointer-events-none`, caller's parent needs `relative`.

- [ ] `Logo.tsx`: when `dark` is false (light background), render
  `next/image` with `src="/images/brand/yousha-logo.jpg"`, sized via
  `className`, no wordmark text duplication (the raster already has it).
  When `dark` is true, render an inline SVG recreation (seat mark path +
  "YOUSHA" text + subline) in copper/paper, matching current structural
  layout used across header/footer.
- [ ] `Watermark.tsx`: new component rendering the seat-mark SVG path at
  large scale (e.g. `w-64 h-64` default, overridable), opacity per tone
  (`copper` → `opacity-[0.05] text-copper`, `ink` → `opacity-[0.04]
  text-ink`, `paper` → `opacity-[0.06] text-paper`), positioned via a
  `position` prop mapped to Tailwind position classes.
- [ ] `icon.svg`: replace with seat-mark-only SVG, copper fill, transparent
  background.
- [ ] `StampSeal.tsx`: recolor any `thread`/`hide`/`saddle` references to
  `copper`/`ink`.
- [ ] Run `npm run build`.
- [ ] Commit: `git commit -m "feat: wire real logo and add watermark component"`

## Phase 3: Shell (Header, Footer)

**Files:** Modify `src/components/Header.tsx`, `src/components/Footer.tsx`.

**Interfaces consumed:** `Logo` (Phase 2), `Watermark` (Phase 2).

- [ ] `Header.tsx`: swap any `hide`/`saddle`/`thread`/`racing`/`oxblood`
  class references to the new tokens; keep current light/dark structure but
  confirm `Logo dark={...}` matches the header's actual background color.
- [ ] `Footer.tsx`: swap leather tokens to new palette; drop `.quilt`/
  `.grain` background classes, replace with `<Watermark tone="copper"
  position="corner-br" />` inside a `relative` wrapper.
- [ ] Run `npm run build`.
- [ ] Commit: `git commit -m "style: re-theme header and footer to premium palette"`

## Phase 4: Shared section components

**Files:** Modify each of:
`src/components/Hero.tsx`, `CTASection.tsx`, `ServiceGrid.tsx`,
`WhoWeServe.tsx`, `WhyYousha.tsx`, `ProcessSteps.tsx`,
`HeritageTimeline.tsx`, `VehicleBadges.tsx`, `BeforeAfterSlider.tsx`,
`FAQAccordion.tsx`, `GalleryGrid.tsx`, `SeatPanel.tsx`, `PhotoFigure.tsx`,
`EnquiryForm.tsx`, `Button.tsx`, `SectionHeading.tsx`, `Container.tsx`,
`WhatsAppFloatButton.tsx`.

- [ ] For each file: `grep` for `hide|saddle|thread|racing|oxblood|quilt|grain`
  and replace with the matching new token (`thread`→`copper`,
  `saddle`→`ink` or `copper` depending on light/dark role, `hide`→`ink`,
  `racing`→`ink` unless a component specifically needs a second accent, in
  which case use `copper-deep`). Any component that used `.quilt`/`.grain`
  as a section background gets `<Watermark />` added instead (wrap section
  in `relative` if not already).
- [ ] After each file edit, no per-file build (too slow) — batch the whole
  phase, then run `npm run build` once at the end of Phase 4.
- [ ] Commit: `git commit -m "style: re-theme shared section components to premium palette"`

## Phase 5: Pages

**Files:** Modify all files under `src/app/**/page.tsx` (home, about,
services, services/[slug], accessible-seating, commercial-solutions,
medical-upholstery, gallery, faq, contact, credits, not-found).

- [ ] `grep -rl 'hide-\|saddle\|thread\|racing\|oxblood\|quilt\|grain' src/app`
  to find stragglers; fix inline leather-token classes not covered by the
  component pass.
- [ ] Add/adjust `<Watermark />` placement per page where a section reads as
  a plain flat block that would benefit from the mark (hero sections,
  heritage/about sections) — don't add it everywhere, one or two per page
  max so it stays a signature, not noise.
- [ ] Run `npm run build`.
- [ ] Run `npm run lint`.
- [ ] Final sweep: `grep -rl 'hide\|saddle\|thread\|racing\|oxblood\|quilt\|grain' src/` — expect no matches (aside from unrelated words if any; inspect any hits).
- [ ] Commit: `git commit -m "style: complete premium re-theme across all pages"`
