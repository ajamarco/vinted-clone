# Spec 02: Design foundation (Wontid)

## Goal

Lay the base for the Wontid design: rename the app to Wontid, add the brand tokens and fonts, and build the small shared UI components. Later specs (03 to 06) build the header, listings, and landing page sections on top of this one, so nothing here builds a page section.

This is the first of five specs that implement one design. Order: 02 foundation, 03 header, 04 listings, 05 hero and categories, 06 info sections and footer. Do not start 03 to 06 before this spec is done.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- A Claude Design canvas called "Wontid" with two artboards. Read them with the Artifact tool's `read` action and `paths: ["project/DesignSystem.dc.html", "project/Main.dc.html"]`.
- This spec uses `DesignSystem.dc.html` (colour, typography, buttons, tags and badges, form inputs, shape and space, contrast table) and the `<helmet><style>` token block at the top of `Main.dc.html`.
- The design files are the source of truth for exact values. The tables below summarise them. If this spec and the design disagree, ask the user.
- Re-read the design files at the start of the implementation task. Do not implement from this spec alone.
- The design is a mockup built with plain CSS classes and inline styles. Use it for how things look. Do not copy its markup or CSS.

## Scope

In scope:

- Renaming the app from Clearout to Wontid, including browser tab title and metadata.
- Brand tokens (colour, font, text size, radius, shadow) in `app/globals.css` using Tailwind v4 `@theme`. This replaces the `[TODO: add brand colour tokens]` placeholder in `docs/nextjs-stack-rules.md`.
- Fonts: Fraunces and Source Sans 3 through `next/font/google`.
- Global base styles.
- Shared components in `components/ui/`: `Button`, `Input`, `Tag`, `Badge`.
- Tests for the new components.

Out of scope:

- Restyling existing components (`Navbar`, `CategoryBar`, `SearchBox`, `GridCard`, `ProductGrid`) or the home page. Their colours and layout change in specs 03 and 04. This spec only renames text in them.
- Landing page sections.
- Replacing the logo icon or the favicon.
- Dark mode. The design has one light theme.
- Redux Toolkit, Clerk, Stripe, Vercel Blob.

Because existing components keep their old colours until specs 03 and 04, the app looks mixed after this spec. That is expected.

## Requirements

### 1. Brand name and identity

- The app is now **Wontid** (it was "Clearout"). Search the whole repo for "Clearout" (components, tests, `aria-label`s, docs outside `specs/`) and replace each one. The existing specs and `docs/project-progress.md` are history and stay as they are.
- `app/layout.tsx` metadata: `title` is `Wontid — Circular Fashion Marketplace`, so the browser tab shows Wontid. `description` stays `Buy and sell pre-loved fashion in the UK.`.
- The navbar logo link has the accessible name "Wontid home" and the wordmark text reads "Wontid".
- **Keep the logo icon and `app/favicon.ico` as they are.** The logo icon is a Font Awesome glyph, so the Font Awesome `<link>` in `app/layout.tsx` stays for now. Do not use Font Awesome for anything new. Record in "Known gaps / next steps" that the link can be removed when the logo is replaced.

### 2. Design tokens

Define these in `app/globals.css` with `@theme`, named so Tailwind generates utilities (for example `--color-primary` gives `bg-primary` and `text-primary`). Remove the old `--background` and `--foreground` variables, the dark-mode media query, and the Arial `font-family` override.

Colour:

| Name | Hex | Token |
| --- | --- | --- |
| Faded Teal | `#38726F` | `primary` |
| Teal Hover | `#326462` | `primary-hover` |
| Dusty Rose | `#C98B8B` | `secondary` |
| Mustard | `#D9A441` | `highlight` |
| Espresso | `#3B2F2A` | `text` |
| Walnut | `#7A6A5F` | `text-muted` |
| Aged Paper | `#F6EFE3` | `bg` |
| Cream | `#FBF7EF` | `surface` |
| Sepia Tan | `#D8C7AE` | `border` |
| Brick | `#A8432F` | `error` |
| Cream (on primary) | `#FBF7EF` | `on-primary` |

- The design lists an "Original Teal" `#3E7C7A` as **not used** because it fails WCAG AA. Do not use it. The design's input focus ring still uses `rgba(62,124,122,0.2)`, which is that rejected teal. Use `primary` at 20% opacity instead (`rgba(56,114,111,0.2)`), and note this in the progress entry.
- Keep every text and background pairing at least as strong as the contrast table in `DesignSystem.dc.html`. Never lighten a colour to "match" better.

Typography:

- Heading font: Fraunces, weights 600 and 700, fallback `Georgia, serif`. Variable `--font-heading`.
- Body font: Source Sans 3, weights 400 and 600, fallback `system-ui, sans-serif`. Variable `--font-body`.
- Load both with `next/font/google` in `app/layout.tsx`. Replace Geist and Geist Mono. Do not add a Google Fonts `<link>`.
- Text size tokens: `sm` 0.875rem, `base` 1rem, `lg` 1.25rem, `xl` 1.5rem, `2xl` 2rem, and `hero` `clamp(2.5rem, 5vw + 1rem, 4.5rem)`. Standard Tailwind sizes that already match need no new token.

Shape and shadow:

- Radius: `sm` 4px, `md` 6px, `lg` 8px.
- `shadow-card`: `0 1px 2px rgba(59,47,42,0.08), 0 4px 12px rgba(59,47,42,0.06)`.
- `shadow-hover`: `0 2px 4px rgba(59,47,42,0.10), 0 8px 20px rgba(59,47,42,0.10)`.
- Spacing uses Tailwind's default scale, which already matches the design's 4 to 64px steps.

### 3. Global base styles

- Body: `bg` background, `text` colour, body font, 1rem, line height 1.6.
- Headings (`h1` to `h3`): heading font, line height 1.15, `text` colour.
- Links: `primary`, and `primary-hover` on hover.
- `:focus-visible`: 2px `primary` outline with 2px offset.
- `app/layout.tsx` applies the font variables to `<html>` and removes the Geist classes.
- These base styles are the only plain CSS allowed. Everything else uses utilities in JSX.

### 4. Shared UI components (`components/ui/`)

One file per component, named exports, props type directly above the component. Each has a colocated `*.test.tsx`.

- **`Button`**: variants `primary`, `secondary`, `destructive`.
  - Primary: `primary` fill, `on-primary` text, `primary-hover` fill and border on hover.
  - Secondary: transparent, `primary` text and border, fills with `primary` and `on-primary` text on hover.
  - Destructive: `error` fill, `on-primary` text.
  - All: min height 44px, padding 12px 24px, radius `md`, weight 600, 1.5px border, 200ms colour transition. Disabled is 50% opacity with a not-allowed cursor.
  - It renders a `<button>` by default. It must also be usable as a link that goes through `next/link` (for example an `href` prop that renders a `Link`). Choose one clear API and document it in the progress entry.
- **`Input`**: min height 44px, `surface` background, 1px `border`, radius `md`, padding 12px 16px, `text-muted` placeholder. Focus: `primary` border and a 3px ring of `primary` at 20% opacity. Error state: `error` border with `aria-invalid`. The error message belongs to the caller and is linked with `aria-describedby`.
- **`Tag`**: outlined chip with a 1px `border`, radius `sm`, `text-muted`, `text-sm`, weight 600, padding 4px 8px.
- **`Badge`**: filled label with radius `sm`, `text` colour, `text-sm`, weight 600, padding 2px 8px. Variants `sale` (`secondary` background) and `new` (`highlight` background).

Tests (query by role or label): `Button` renders each variant as a button and as a link with the right `href`, and a disabled button is disabled. `Input` is reachable by its label, and exposes `aria-invalid` and its description in the error state. `Tag` and `Badge` render their text.

### 5. Icons

- Icons from the design are inline SVG components in `components/ui/icons/`, one per icon, using `currentColor` strokes and `aria-hidden="true"` by default. This spec only sets up the convention. Later specs add the icons they need. Do not add icons nothing uses yet.

## Rules to follow

- All rules in `docs/` apply. The ones that matter most here:
  - Tailwind v4 theme tokens. No arbitrary colour values in the new code. An arbitrary non-colour value needs a one-line comment.
  - No inline `style` props for layout or colours.
  - Server Components by default. These components need no client boundary.
  - Named exports, except route files. Prettier sorts class names.
- Read the guides in `node_modules/next/dist/docs/` for `next/font` and `next/link` before using them, as `AGENTS.md` requires.
- shadcn: see Open questions.

## Success criteria

The spec is done when all of these are true:

1. `app/globals.css` defines the tokens above with `@theme`. No Geist fonts, dark-mode block, or Arial override remains.
2. Fraunces and Source Sans 3 are loaded with `next/font/google` and used for headings and body.
3. "Clearout" appears nowhere in the repo's code or tests. The browser tab shows `Wontid — Circular Fashion Marketplace`. The logo icon and `app/favicon.ico` are unchanged.
4. `Button`, `Input`, `Tag`, and `Badge` exist in `components/ui/`, match `DesignSystem.dc.html`, and have passing tests.
5. Existing components still work. Their tests are updated only for the rename.
6. These all pass with no errors: `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build`.
7. The app was run and the new components were checked in a browser against the design system sheet (colours, hover, focus, disabled, error).
8. `docs/project-progress.md` has a new entry for this spec, and the Font Awesome note is under "Known gaps / next steps".

## Open questions (answer before implementing)

1. **shadcn/ui.** The stack rules say to build on shadcn components, and `Button`, `Input`, and `Badge` all exist in shadcn, but it is not installed. Should this spec set up shadcn with the CLI and theme those components with the tokens (recommended, since the rules ask for it), or build plain components for now?
