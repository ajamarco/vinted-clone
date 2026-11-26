# Spec 06: Landing info sections and footer

## Goal

Finish the Wontid landing page: add the "How it works" steps, the closing band, and the footer. After this spec the home page matches the whole landing page design, and the footer shows on every page.

## Depends on

- Spec 02 (`specs/02-design-foundation`): tokens and fonts.
- Spec 03 (`specs/03-header`), spec 04 (`specs/04-listings`), and spec 05 (`specs/05-landing-hero-and-categories`): the rest of the page, which these sections follow.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- Read `project/Main.dc.html`. This spec uses the sections "How it works" (`aria-labelledby="how-title"`), the band (`aria-labelledby="band-title"`), and the `<footer>`, with CSS `.steps`, `.step`, `.step-num`, `.band`, `.band-inner`, `.footer`, `.footer-grid`, `.footer-wordmark`, `.footer-copy`.
- The design files are the source of truth for exact values. If this spec and the design disagree, ask the user.
- Re-read the design at the start of the implementation task. Use it for how things look. Do not copy its markup or CSS.

## Scope

In scope:

- `HowItWorks`, `ClosingBand`, and `Footer` components, each with a colocated test.
- Adding the two sections to `app/page.tsx` and the footer to `app/layout.tsx`.

Out of scope:

- Real routes for footer links. They use `href="#"`.
- The optional paper-grain overlay from the design. It is not part of this work.
- The rest of the page and any other specs' components.

## Requirements

### 1. How it works (`components/home/HowItWorks.tsx`)

- A section labelled by its `h2`: "How it works" (Fraunces 700, `text-2xl`), 32px above the steps. Content max width 1200px, 24px side padding, 32px from 768px. Vertical padding 48px, 64px from 768px, with no top padding (it follows the featured listings section).
- An ordered list of three steps, 32px gap. One column on narrow screens, three from 768px.
- Each step is a list item with a 12px gap containing:
  - A 48px round number badge with `highlight` background, `text` colour, Fraunces 700, `text-xl`, centred. Decorative (`aria-hidden`), because the list is already numbered.
  - An `h3` (Fraunces 600, `text-xl`).
  - A paragraph in `text-muted`.
- Content, in order:
  1. List: "Snap a few photos, add the size and condition, and set your price."
  2. Sell: "Chat with buyers and accept an offer when it feels right."
  3. Ship: "Pack it up, print the label, and send it on to its next home."
- Step data is a typed constant in the component file with stable keys.

### 2. Closing band (`components/home/ClosingBand.tsx`)

- A full-width section with `surface` background and 1px `border` on top and bottom, labelled by its `h2`. Vertical padding 48px, 64px from 768px.
- Inside, a centred column, max width 720px, 16px gap, centred text:
  - `h2`: "Good clothes deserve a longer life." (Fraunces 700, `text-2xl`).
  - Paragraph in `text-muted`, 1.125rem: "Every piece bought second-hand is one that stays in use and out of landfill. Wontid makes passing things on as easy as buying new."

### 3. Footer (`components/layout/Footer.tsx`)

- A `footer` landmark with `text` (Espresso) background and `surface` text. Vertical padding 48px, 64px from 768px. Content max width 1200px with the usual side padding.
- Grid: one column on narrow screens, from 768px four columns (1.5fr, then three of 1fr), 32px gap.
- Brand block: the wordmark "Wontid" (Fraunces 700, `text-xl`, `surface`) and the line "A marketplace for pre-loved clothing and accessories." in `border` colour, max width 32ch.
- Three link columns, each a `nav` labelled by its heading. The heading is an `h2` in body font, 1rem, weight 600, uppercase, letter spacing 0.04em, `surface` colour, 12px below. Links are a vertical list with 8px gap, `surface` colour, no underline, underline on hover:
  - Shop: New in, Categories, Brands, Sale.
  - Sell: List an item, Seller guide, Shipping, Fees.
  - Help: Help centre, Returns, Safety, Contact us.
- Under the grid, 32px margin and 24px padding, a top divider (1px `border` at about 30% opacity) and the copyright line: "© 2026 Wontid. All rights reserved." in `border` colour, `text-sm`. Render the year from the current date on the server instead of hardcoding it, if that is straightforward in this Next.js version. If not, keep 2026 and note it.
- Focus outline inside the footer is `surface`, so it is visible on the dark background.
- Link data is typed constants in the component file with stable keys.
- Add `Footer` to `app/layout.tsx` after `{children}` so it shows on every page. Make the body a flex column with the main content growing so the footer sits at the bottom on short pages.

### 4. Home page

- `app/page.tsx` renders, in order: `Hero`, `CategoryChips`, featured listings (all from earlier specs), then `HowItWorks` and `ClosingBand`. The footer comes from the layout.

## Rules to follow

- All rules in `docs/` apply. In particular: theme tokens and no arbitrary colour values, no inline `style` props, `next/link` for internal links, named exports except route files, props types above components, stable keys, Prettier sorts class names.
- Colour contrast must stay at WCAG AA or better. The design checks `surface` on `text` (12.1:1) and `border` on `text` (7.81:1).
- All components are Server Components.

## Success criteria

The spec is done when all of these are true:

1. The home page matches the full landing page design from the hero to the footer at 1280px and at about 390px wide, checked side by side, with the sample image in place of the design's placeholders.
2. "How it works" is an ordered list of three steps with the right headings and text.
3. The closing band and the footer match the design. The footer shows on every page and sits at the bottom of short pages.
4. The footer has three labelled `nav`s with the listed links, and a copyright line with the Wontid name.
5. No arbitrary colour values and no inline styles.
6. Tests (queries by role or label) cover: the three steps and their headings, the closing band heading, the footer navs and their links, and the copyright text.
7. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` pass.
8. `docs/project-progress.md` has a new entry for this spec. After this spec, the whole design is implemented, so the tracker notes anything that still differs from the design.

## Open questions

None.
