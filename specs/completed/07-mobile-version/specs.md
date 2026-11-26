# Spec 07: Mobile version of the landing page

## Goal

Make the landing page match the Wontid **mobile design** (the 390px "Landing page · mobile" artboard). The page already works on phones, because specs 02 to 06 are responsive. But those specs followed the desktop design, so on a phone it differs from the mobile design in layout, sizes, spacing, and a few pieces of content. After this spec, below 768px the page looks like the mobile design from the header to the footer. From 768px up, nothing changes.

## Depends on

- Specs 02 to 06 (`specs/completed/02-design-foundation` to `specs/completed/06-landing-info-and-footer`): all the components this spec adjusts.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- Read `project/Mobile.dc.html` (artboard "Landing page · mobile", 390px wide). Its CSS classes are named in each requirement below. The canvas also holds `Main.dc.html` (desktop) and `DesignSystem.dc.html`. They are context only. This spec does not change the desktop layout.
- The design files are the source of truth for exact values. If this spec and the design disagree, ask the user.
- Re-read the design at the start of the implementation task. Use it for how things look. Do not copy its markup or CSS. Its photos are placeholder tiles. Keep using `/image001.webp`.

## Definition of "mobile"

- Mobile means **below 768px** (Tailwind's `md` breakpoint). Use the default (unprefixed) classes for the mobile look and `md:` classes to keep today's look from 768px.
- The design is drawn at 390px. The page must also work with no horizontal scroll at 360px, 375px, 430px, and up to 767px.
- Existing breakpoints that already exist in the code (`min-[600px]`, `min-[900px]`, `lg`) stay as they are, except where a requirement below says otherwise.

## Scope

In scope:

- Changing the styles and, where listed, the content of existing components so that they match the mobile design below 768px: `Navbar`, `SearchBox`, `CategoryBar`, `Hero`, `CollageCard` (only if needed), `CategoryChips`, `FeaturedListings`, `ProductGrid`, `GridCard`, `HowItWorks`, `ClosingBand`, `Footer`.
- Updating the colocated tests for any behaviour that changes.
- One new theme token for the mobile section heading size (see requirement 4).

Out of scope:

- The desktop layout (768px and up). It must look the same as before.
- New components, routes, or real data. Footer and nav links stay `href="#"`.
- Reducing the 30 sample listings to the design's 8. They stay (see "Open questions").
- The logo icon. The design's mobile header shows only the "Wontid" wordmark, but the project decided to keep the icon next to it (see the tracker entry for the header). Keep the icon.
- The paper-grain overlay.

## What differs today (summary)

| Area                | Mobile design                                             | Today on a phone                                   |
| ------------------- | --------------------------------------------------------- | -------------------------------------------------- |
| Header links        | "Sign in" and "Sell" only                                 | "Browse", "Sign in", and "Sell"                    |
| Search placeholder  | "Search for corduroy, Levi's…"                            | "Search for corduroy, Levi's, silk scarves…"       |
| Category nav        | 20px gap, 15px text                                       | 24px gap, 16px text                                |
| Hero                | 16px outer padding, 32px gaps, stacked full-width buttons | 24px outer padding, 48px gaps, wrapping buttons    |
| Hero text           | no max line length, 18px intro                            | 14ch / 36ch limits, 20px intro                     |
| Collage             | full width, 12px gap, offsets 0 / 24 / -8 / 8px           | width limit, 16px gap, offsets 0 / 32 / -16 / 16px |
| "Shop by category"  | not in the design                                         | shown                                              |
| Featured grid       | 2 columns, compact cards, no condition tag                | 1 column, large cards, condition tag               |
| "How it works" step | number beside the text, 44px badge                        | number above the text, 48px badge                  |
| Footer              | two columns (Shop, Help), no "Sell" column                | one column, three link groups                      |

## Requirements

Values below are for mobile (below 768px) unless stated. Use theme tokens for colours. Sizes with no standard Tailwind step may use an arbitrary value with a short comment, as the earlier specs did.

### 1. Header (`Navbar.tsx`, `SearchBox.tsx`, `CategoryBar.tsx`)

Design classes: `.nav`, `.nav-row`, `.wordmark`, `.nav-actions`, `.nav-link`, `.search`, `.subnav`.

- The header stays sticky at the top with the `surface` background and a bottom border (unchanged).
- Top row: the logo (icon plus "Wontid" at 24px) on the left, and on the right a "Sign in" link and the primary "Sell" button, 16px apart, each at least 44px tall. Side padding 24px, 12px top, 8px bottom.
- Hide the "Browse" link below 768px. It shows again from 768px. The design's mobile header does not have it.
- Search sits on its own row below, full width, 24px side padding, 12px bottom padding. The input is 44px tall, `bg` background, with the search icon 12px inside its left edge and text starting 40px in. On mobile the placeholder is "Search for corduroy, Levi's…". From 768px it stays "Search for corduroy, Levi's, silk scarves…". Implement this without a client component (for example, two spans or CSS), and keep the accessible name "Search listings".
- Category nav: a **horizontally scrollable** row with 20px gaps, 24px side padding, and items with 12px vertical and 4px horizontal padding at 15px text. From 768px the existing values stay. Keep the current-page underline and the hidden scrollbar.
  - The row never wraps and never shrinks the items. All nine categories stay in one line, and the ones that do not fit are cut off at the right edge of the screen (for example "Electronics" is partly visible at 390px). The cut-off item is the hint that the row scrolls.
  - Users scroll it sideways by swiping on touch devices, or with a trackpad or shift plus wheel. Only the row scrolls. The page itself must not scroll sideways.
  - The last category ("Sports") must be fully reachable: the end of the scroll has the same 24px padding as the start, and nothing is hidden behind the screen edge or clipped. Scrolling back to the start shows "Women" with its padding again.
  - Swiping inside the row must not move the sticky header or the page behind it. Use `overflow-x-auto` on the list with the page's vertical scroll left alone, and keep the scrollbar hidden.
  - Items stay keyboard reachable: tabbing to an item that is off-screen scrolls it into view, and the focus outline is not clipped by the row.

### 2. Hero (`Hero.tsx`, `CollageCard.tsx`)

Design classes: `.hero`, `.hero-frame`, `.eyebrow`, `.hero-title`, `.hero-lede`, `.collage`, `.card`, `.pin`.

- Section padding: 32px top and bottom, 16px sides. The dashed frame keeps its border, 8px radius, and inner hairline frame.
- Frame padding: 32px top and bottom, 20px sides. The text block and the collage are stacked, 32px apart.
- Text block: 16px gap. Eyebrow (12px, uppercase), title (Fraunces 700, 40px, line height 1.15, letter spacing -0.02em), intro paragraph (`text-muted`, 18px).
- Remove the `14ch` and `36ch` line-length limits on mobile (they stay from 768px).
- Buttons: stacked in one column, 12px gap, each full width, with 8px extra space above the stack. From 768px they go back to a wrapping row.
- Collage: a 2-column grid, full width of the frame (no max-width), 12px gap, 4px side padding. The four cards keep the tilts -2deg, 1.5deg, 1deg, -1.5deg and the top offsets 0, 24px, -8px, 8px. Each card has the pin and the `shadow-hover` shadow. The collage stays a labelled `role="group"`.

### 3. "Shop by category" (`CategoryChips.tsx`)

- The mobile design has no category chip section. Hide the whole section below 768px, and keep it from 768px. Use CSS so there is no layout shift, and make sure it is not in the accessibility tree when hidden.
- Decided: hide it on mobile, to follow the mobile design.

### 4. Featured listings (`FeaturedListings.tsx`, `ProductGrid.tsx`, `GridCard.tsx`)

Design classes: `.section-head`, `.section-title`, `.grid`, `.card`, `.media`, `.badge`, `.body`, `.brand`, `.title`, `.meta`.

- Section: 24px side padding, 32px top and bottom. Heading row: heading on the left, "View all" link on the right, baseline aligned, 12px gap, 24px below the row. Heading is Fraunces 700 at 28px. Add one new token in `app/globals.css` for it (for example `--text-section-sm: 1.75rem`, with a 1.15 line height) and use it on mobile only. From 768px the heading stays `text-section` (2rem).
- Grid: **2 columns from the smallest width** (today it is 1 column below 600px), 16px row gap, 12px column gap. The 600px, 1024px, and gap values from 768px stay as today.
- Card on mobile, compact version of the existing card:
  - Image keeps the 4:5 ratio. The badge ("Sale" or "New") sits 8px from the top and left, at 13px text, 1px by 8px padding, 4px radius, using the existing `sale` and `new` colours.
  - Body padding 12px, 2px gap between the brand, title, and price row.
  - Brand: 12px, weight 600, uppercase, 0.04em letter spacing, `text-muted`.
  - Title: Fraunces 600, 16px, line height 1.25, clamped to 2 lines.
  - Price row: price (weight 600) on the left and size (13px, `text-muted`) on the right, 6px above.
  - Hide the condition `Tag` on mobile. The mobile design does not show it. It stays from 768px.
- Card text sizes, badge position, and body padding switch back to today's values from 768px. Do this inside `GridCard` with `md:` classes. `GridCard` keeps its props and its accessible link text.
- The image `sizes` hint should match the new layout (about half the viewport on mobile).

### 5. How it works (`HowItWorks.tsx`)

Design classes: `.steps`, `.step`, `.num`.

- Section: 24px side padding, 48px bottom padding (32px top comes from the featured section above). Heading is 28px (same new token), 24px below it.
- Steps: a vertical list with 24px between steps. Each step is a **row**: the number badge on the left, the title and text on the right, 16px apart, aligned to the top.
- Number badge: 44px circle, `highlight` background, Fraunces 700 at 22px. The title is Fraunces 600 at 22px. The text is `text-muted`.
- From 768px: the existing three-column layout with the badge above the text and a 48px badge. Keep it unchanged.

### 6. Closing band (`ClosingBand.tsx`)

Design class: `.band`.

- Padding 48px top and bottom, 24px sides. 16px gap, centred text, `surface` background, 1px top and bottom borders (unchanged).
- Heading: 28px (same new token). Paragraph: `text-muted`, 17px.
- From 768px: unchanged.

### 7. Footer (`Footer.tsx`)

Design classes: `.footer`, `.fgrid`, `.fcopy`.

- Padding 48px top, 32px bottom, 24px sides. The brand block comes first: wordmark (Fraunces 700, 24px) and the line "A marketplace for pre-loved clothing and accessories." in `border` colour, 4px apart, 32px above the link grid. The line has no max width on mobile.
- Link grid: **2 columns**, 32px row gap, 16px column gap, with exactly two groups on mobile:
  - Shop: New in, Categories, Brands, Sale, **Seller guide**.
  - Help: Help centre, Returns, Safety, Contact us, **Fees**.
- The "Sell" group is not shown on mobile. Its "Seller guide" and "Fees" links move into "Shop" and "Help" (bold above). From 768px the layout stays as it is today: brand block plus Shop, Sell, Help, with Seller guide and Fees in "Sell" and not repeated elsewhere. The page must never show the same link twice at one width, and a hidden group must not be in the accessibility tree.
- Group headings: an `h2` in the body font, 15px, weight 600, uppercase, 0.04em letter spacing, `surface` colour, 8px below. From 768px the current 16px and 12px stay.
- Links: `surface` colour, no underline, with 6px vertical padding so they are easy to tap. Underline on hover and a `surface` focus outline stay.
- Copyright: 32px above, 24px top padding, a 1px divider at about 30% `border` opacity, "© [year] Wontid. All rights reserved." in `border` colour at 14px. The year still comes from the server date.
- Keep the link data as typed constants with stable keys. Model the mobile and desktop differences in the data (for example a field on each link saying where it shows) instead of duplicating the list.

## Rules to follow

- All rules in `docs/` apply. In particular: theme tokens and no arbitrary colour values, no inline `style` props, named exports except route files, props types above components, stable keys, Prettier sorts class names, Server Components by default.
- Do not use JavaScript to switch between the mobile and desktop layouts (no `window.innerWidth`, no resize listeners). Use responsive classes only. No new `"use client"` boundaries.
- Touch targets are at least 44px tall for the header links and buttons (as the design has). Colour contrast stays at WCAG AA or better.
- Keep the DOM order the same for both layouts, so keyboard and screen reader order does not depend on width.
- Read the relevant guide in `node_modules/next/dist/docs/` before writing any code, as `AGENTS.md` requires.

## Success criteria

The spec is done when all of these are true:

1. At 390px wide, the page matches `Mobile.dc.html` section by section (header, hero, featured listings, how it works, closing band, footer), checked side by side with the sample image in place of the design's placeholders. Spacing, text sizes, and wrapping are within a few pixels.
2. At 360px, 375px, 430px, and 767px the page has no horizontal scrolling and no overlapping or clipped content. The category nav scrolls sideways inside its own row, shows a cut-off item at the right edge as a hint, and lets the user reach "Sports" fully.
3. At 768px and wider, including 1280px, the page looks exactly as it did before this spec.
4. On mobile: the header has no "Browse" link; the hero buttons are stacked and full width; "Shop by category" is hidden; the featured grid has 2 columns with compact cards and no condition tag; each step shows its number beside the text; the footer has two columns with "Seller guide" under Shop and "Fees" under Help and no "Sell" group.
5. No link appears twice at any width, and hidden content is not exposed to assistive technology.
6. No arbitrary colour values and no inline styles. Any new arbitrary size has a comment.
7. Tests (queries by role or label) are updated or added for the behaviour that changes: the footer shows the right groups and links, the search input has the accessible name "Search listings", and the other components still render their headings, links, and labels. Tests do not rely on CSS classes.
8. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` pass.
9. `docs/project-progress.md` has a new entry for this spec, naming `specs/07-mobile-version`, and records anything that still differs from the mobile design.

## Decisions

These were open questions and have been answered:

1. **"Shop by category" on mobile:** hidden below 768px, shown from 768px.
2. **Number of featured listings on mobile:** all 30 stay. Revisit when real data arrives.
3. **Logo icon:** kept in the mobile header next to the wordmark.

## Open questions

None.
