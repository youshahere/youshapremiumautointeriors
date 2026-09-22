# Yousha Premium Rebrand — Design Spec

Date: 2026-09-22
Status: Approved (user gave blanket go-ahead)

## Goal

Replace the placeholder dark-saddle-leather theme with a premium black/copper/white
identity derived from the real Yousha logo, apply it across every page and shared
component, add a reusable watermark system, and retire the "leathery" quilted/grain
textures in favor of an editorial, high-whitespace look.

## Source of truth

Logo file: `public/images/brand/yousha-logo.jpg` (JPG on white background, supplied
by user). Sampled palette from it:

| Token | Hex | Use |
|---|---|---|
| `ink` | `#17130F` | primary text, dark surfaces, wordmark |
| `ink-2` | `#231D18` | dark surface elevation (cards on black) |
| `copper` | `#B15A2B` | primary accent — buttons, links, underlines, icons |
| `copper-deep` | `#8F4620` | hover/active state on copper |
| `copper-light` | `#D98A57` | soft accent, badges, focus rings on dark |
| `paper` | `#FDFCFA` | main light background |
| `stone` | `#F1EDE6` | secondary light surface (cards, alt sections) |
| `stone-2` | `#E7E0D4` | borders/dividers on light |
| `muted` | `#4A433C` | secondary text |

Removed tokens: `hide`, `hide-2`, `hide-3`, `saddle`, `saddle-deep`, `thread*`,
`racing*`, `oxblood`. Removed utility classes: `.quilt`, `.quilt-green`, `.grain`
(replaced by the watermark system below). `.stitch`/`.stitch-v` running-stitch
utilities are kept but recolored to copper — it's a fine hairline divider, not a
leather cue, and several components rely on it structurally.

Typography stays: `--font-display` (Fraunces) for headings, `--font-sans` (Hanken)
for body. This is already premium/editorial and unrelated to the leather theme.

## Logo integration

- Light backgrounds: render the actual logo raster (`yousha-logo.jpg`) via
  `next/image`, sized down, no visible white box (background matches page paper
  color, or logo gets an `object-contain` treatment with no card behind it).
- Dark backgrounds (header if dark, footer, dark CTA bands): the raster's white
  background would show as a box, so render an inline SVG recreation of the
  lockup (seat-icon mark + "YOUSHA" wordmark + subline) in ink/copper, sized and
  spaced to match the raster's proportions. This is a close redraw for dark
  placement, not a vector trace of the original file — flagged to user as a
  placeholder for a real transparent PNG/vector if they have one.
- `src/app/icon.svg` regenerated from the seat-icon mark only, copper on
  transparent, for favicon/tab icon.

## Watermark system

New `src/components/Watermark.tsx`:
- Renders the seat-icon mark (same paths as the dark-mode SVG logo) at large
  scale, low opacity (4–6%), `pointer-events-none`, `absolute` positioned.
- Props: `position` (`"corner-br" | "corner-tl" | "center"`), `tone`
  (`"copper" | "ink" | "paper"` — so it works on both light and dark section
  backgrounds), optional `className` for size/offset overrides.
- Used inside section wrappers that previously had `.quilt`/`.grain` classes
  (Hero, CTASection dark bands, About heritage section, Footer) — one component,
  not hand-copied SVG per page.

## Component/page redesign loop

Work proceeds in this order, running `npm run build` after each batch so
regressions surface immediately rather than at the end:

1. **Tokens & base** — `globals.css` (new palette, drop leather utilities, add
   watermark-friendly utilities), `tailwind`/`@theme` mapping.
2. **Brand components** — `Logo.tsx` (real logo + SVG dark variant), new
   `Watermark.tsx`, `icon.svg`, `StampSeal.tsx` (recolor to copper/ink).
3. **Shell** — `Header.tsx`, `Footer.tsx`.
4. **Shared section components** — `Hero.tsx`, `CTASection.tsx`, `ServiceGrid.tsx`,
   `WhoWeServe.tsx`, `WhyYousha.tsx`, `ProcessSteps.tsx`, `HeritageTimeline.tsx`,
   `VehicleBadges.tsx`, `BeforeAfterSlider.tsx`, `FAQAccordion.tsx`,
   `GalleryGrid.tsx`, `SeatPanel.tsx`, `PhotoFigure.tsx`, `EnquiryForm.tsx`,
   `Button.tsx`, `SectionHeading.tsx`, `Container.tsx`,
   `WhatsAppFloatButton.tsx`.
5. **Pages** — home, about, services (+ `[slug]`), accessible-seating,
   commercial-solutions, medical-upholstery, gallery, faq, contact, credits,
   not-found — each reviewed for any inline leather-specific classes/colors the
   component pass didn't already cover, and for watermark placement.

No component is redesigned twice — the shared-component pass is what makes
every page premium at once; the page pass is a targeted sweep for stragglers
and per-page watermark placement, not a re-do.

## Images

`public/images/*` (existing photos) are reused as-is for Phase 1 — recomposed
into the new layout (crops/framing may change per component, files don't).
Facebook `photos_by` album is **not fetchable**: it's login-gated and WebFetch
confirmed only the page name is visible, no images. This is out of scope for
Phase 1. Follow-up phase (separate spec) once user exports/sends the album
images: rank/select best shots, OCR any text-bearing photos, slot into
gallery/hero/service sections, replacing current stock-ish photos where a
better real-shop photo exists.

## Testing / verification

- `npm run build` after tokens+base, after shared components, and after pages —
  three checkpoints, not one at the very end.
- `npm run lint` once at the end.
- Manual visual check (dev server or build output) of home, about, gallery,
  contact for: contrast (no low-contrast copper-on-copper text), watermark
  legibility (not fighting foreground content), no leftover `hide`/`quilt`/
  `grain`/`thread`/`saddle`/`racing`/`oxblood` references (`grep` sweep).

## Out of scope (this phase)

- Sourcing/using Facebook album photos (blocked, see above).
- A real vector/transparent version of the logo (using JPG + redrawn SVG until
  supplied).
- New copywriting/content changes — this is a visual/theme redesign, not a
  content rewrite.
