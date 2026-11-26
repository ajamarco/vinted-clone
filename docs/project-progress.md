# Project Progress Tracker

A running log of completed work on this project. Agents read this at the start of a task to learn what already exists, and append to it when a task is finished.

## How to use this file

- **Start of a task:** read this whole file before writing code.
- **End of a task:** as soon as the task is complete, add a new entry at the **top** of the "Completed work" list (newest first). Do this before reporting the task as done.
- Keep entries short and factual. Record what exists now, not the process.
- If a later task changes or replaces earlier work, add a new entry and note what it supersedes. Do not rewrite history.
- Move anything left unfinished or deferred into "Known gaps / next steps".

### Entry template

```md
### YYYY-MM-DD — Feature or task name

- **Spec:** `specs/NN-name` (or "none" if the task had no spec)
- **Summary:** one or two sentences on what was done.
- **Key files:** `path/to/file.tsx`, `path/to/other.ts`
- **Decisions / notes:** anything a future agent should know (trade-offs, conventions introduced, gotchas).
- **Follow-ups:** open items, or "none".
```

## Completed work

### 2026-11-26 — Mobile version of the landing page

- **Spec:** `specs/07-mobile-version`
- **Summary:** Restyled the landing page below 768px to match the mobile design. From 768px up, the layout is unchanged.
- **Key files:** `components/layout/Navbar.tsx`, `SearchBox.tsx`, `CategoryBar.tsx`, `Footer.tsx` (and its test), `components/home/Hero.tsx`, `CategoryChips.tsx`, `HowItWorks.tsx`, `ClosingBand.tsx`, `components/listings/FeaturedListings.tsx`, `ProductGrid.tsx`, `GridCard.tsx`, `app/globals.css` (new `--text-section-sm` token, 1.75rem)
- **Decisions / notes:**
  - On mobile: no "Browse" link, shorter search placeholder, stacked full-width hero buttons, "Shop by category" hidden, 2-column compact cards without the condition tag, step numbers beside the text, two-column footer.
  - The category bar is a sideways-scrolling row whose items never shrink, so the last visible one is cut off at the edge. Focus outlines are drawn inside the links so the row does not clip them.
  - The search placeholder is a single space plus two spans (mobile and desktop text) shown with `peer-placeholder-shown`, so the field stays a Server Component. The text is `aria-hidden`; the accessible name still comes from the label.
  - The footer data has a `visibility` field (`all`, `mobile`, `desktop`). "Seller guide" and "Fees" exist twice in the DOM, once in the mobile groups and once in "Sell", and each copy is `display: none` at the other width. Footer tests run in jsdom without CSS, so they expect the mobile copies in the Shop and Help lists too.
  - Combining `max-md:hidden` with `max-md:inline-flex` on the same link lets the later CSS rule win, so the tap-target classes are applied to "Sign in" only.
  - Checked in Edge at 390px (page in an iframe, since headless Edge has a minimum window width): header, hero, listings, steps, band, and footer match the design. 360px, 375px, 430px and 767px were not checked by eye.
- **Follow-ups:** Check the page by eye at 360px, 375px, 430px and 767px, and that the category bar scrolls on a real touch device.

### 2026-11-26 — Spec 07 written (mobile version of the landing page)

- **Spec:** `specs/07-mobile-version`
- **Summary:** Wrote the spec for matching the Wontid mobile design (the "Landing page · mobile" artboard, `Mobile.dc.html`). Nothing is implemented yet; this entry only records that the spec exists.
- **Key files:** `specs/07-mobile-version/specs.md`
- **Decisions / notes:** Mobile means below 768px, and the desktop layout must not change. Main differences from today: no "Browse" link and a shorter search placeholder in the header, tighter hero with stacked full-width buttons, "Shop by category" hidden, 2-column compact featured cards without the condition tag, step numbers beside the text, and a two-column footer with no "Sell" group (its links move into Shop and Help). The logo icon stays.
- **Follow-ups:** Implement it. The three open questions are answered: category chips hidden on mobile, all 30 listings kept, logo icon kept. The spec also requires the header's category bar to stay a horizontally scrollable row, with a cut-off item at the edge as the hint and the last item fully reachable.

### 2026-11-26 — Landing info sections and footer

- **Spec:** `specs/06-landing-info-and-footer`
- **Summary:** Added "How it works" (three numbered steps), the closing band, and the site footer. The Wontid landing page is now complete: header, hero, shop by category, featured listings, how it works, closing band, footer.
- **Key files:** `components/home/HowItWorks.tsx`, `ClosingBand.tsx`, `components/layout/Footer.tsx` (each with a test), `app/page.tsx`, `app/layout.tsx`, `app/globals.css`
- **Decisions / notes:**
  - `Footer` is rendered by the root layout after the page content, so it shows on every page. It has three labelled `nav`s (Shop, Sell, Help). All its links are `#`.
  - The copyright year comes from `new Date().getFullYear()` in a Server Component. The home page is prerendered, so the year is fixed at build time and only updates on the next deploy.
  - Added a `--leading-heading` token (1.15). Headings that use a Tailwind text size otherwise take Tailwind's line height rather than the design's 1.15. It is used on the step titles, the footer column headings, and the "Shop by category" heading.
  - Checked in Edge at 1280px and 390px against a static copy of the design. The lower part of the page is within about 4px of the design's height on desktop and about 11px on mobile. The grain overlay from the design was left out, as planned.
  - The footer sits at the bottom of the page through the layout's flex column and `flex-1` on `main`. It was not tested on a genuinely short page, because the only other route is Next's default 404, which has its own full-height layout.
- **Follow-ups:** The design is now fully implemented apart from the paper-grain overlay and the real photos and routes. See "Known gaps / next steps".

### 2026-11-26 — Landing hero and shop by category

- **Spec:** `specs/05-landing-hero-and-categories`
- **Summary:** Added the hero (dashed frame, headline, two buttons, tilted four-card collage) and the "Shop by category" chip row. The home page now reads: header, hero, shop by category, featured listings.
- **Key files:** `components/home/Hero.tsx`, `CollageCard.tsx`, `CategoryChips.tsx` (with tests), six chip icons in `components/ui/icons/` (`DressIcon`, `JacketIcon`, `DenimIcon`, `ShoeIcon`, `BagIcon`, `AccessoriesIcon`), `app/page.tsx`, `app/layout.tsx`, `app/globals.css`
- **Decisions / notes:**
  - All four collage cards use `/image001.webp` with empty alt text. The collage is a `role="group"` labelled "A pinned-up display of example listings". `CollageCard` is separate from `GridCard`, because it is not a link and has no body.
  - "Start browsing" links to `#featured` (the design does the same, and the section exists), not `#` as the spec said. "List an item" and the category chips use `#`.
  - Fraunces is now loaded with its optical-size axis (`axes: ["opsz"]`, weights default to the full range). Without it, large headings were wider than the design's. This changes spec 02's font setup.
  - `--text-hero--line-height` changed from 1.1 to 1.15. The design system sheet says 1.1, but the landing page (the real hero) uses 1.15 and was matched.
  - Arbitrary values with comments: the 900px breakpoint, 1.5deg tilts, `0.06em` and `-0.02em` letter spacing, `14ch` and `36ch` widths.
  - Checked in Edge at 1280px and 390px against a static copy of the design. Layout, wrapping and spacing match within a few pixels, apart from the sample photos replacing the design's placeholder tiles.
  - The dev server (`next dev`) can show stale CSS for a moment after `globals.css` changes. A production build showed the correct styles.
- **Follow-ups:** Spec 06 (how it works, closing band, footer) is next.

### 2026-11-26 — Listings restyled to Wontid

- **Spec:** `specs/04-listings`
- **Summary:** Restyled the product card and grid to the Wontid design, added a "Featured listings" section around the grid, and changed the 30 sample listings to carry a brand and New/Sale badges. The home page now shows the header and the featured section.
- **Key files:** `components/listings/GridCard.tsx`, `ProductGrid.tsx`, `FeaturedListings.tsx` (each with a test), `types/listing.ts`, `app/page.tsx`
- **Decisions / notes:**
  - `Listing` gained `brand` (required) and `badge?: ListingBadge` (`"new" | "sale"`). Brands were split out of the old titles. The 5 "New with tags" listings have the New badge and 6 others (ids 3, 7, 11, 15, 20, 27) have the Sale badge. All images are still `/image001.webp`.
  - The card is now one `next/link` (`href="#"`) instead of an `article`. The image has empty alt text because the title names the listing. Condition shows as a `Tag` below the price row.
  - `ProductGrid` is now a `ul` of `li`s with 1, 2 (from 600px), and 4 (from 1024px) columns, and no longer a labelled region. `FeaturedListings` is the labelled region (`id="featured"`).
  - The Sale badge is only a label. There is no sale price or original price, because the design has none. A later task can add that to `Listing` and the card.
  - The image hover zoom was dropped, and the whole card lifts 2px on hover instead, as in the design (skipped with reduced motion).
  - Checked in Edge at 1280px and 390px. The design copy used for comparison renders its cards as template text, so the card was judged on structure and styles rather than pixel by pixel.
- **Follow-ups:** "Featured listings" shows all 30 listings, which is long for a "featured" section. Specs 05 and 06 are next.

### 2026-11-26 — Visual check of specs 02 and 03

- **Spec:** `specs/02-design-foundation`, `specs/03-header`
- **Summary:** Compared the running app with the design in Edge (Playwright driving the installed Edge, set up outside the repo) at 1280px and 390px wide. The header, buttons, tags, badges, and inputs match the design. The header's mobile layout was adjusted: the nav and link gaps are tighter below 768px so the logo, links, and "Sell" fit on one row with the kept logo icon.
- **Key files:** `components/layout/Navbar.tsx`
- **Decisions / notes:** Known differences: the logo icon (kept on purpose), and the header is about 2px taller than the design. The 390px row is tight, and narrower phones wrap the links to a second row. This supersedes the "not compared visually" follow-up in the two entries below.
- **Follow-ups:** none.

### 2026-11-26 — Header restyled to Wontid

- **Spec:** `specs/03-header`
- **Summary:** Replaced the fixed navbar and category bar with one sticky `Header` (navbar, search, category sub-nav) in the Wontid look, visible at all widths. Removed the home page's offset for the old fixed header.
- **Key files:** `components/layout/Header.tsx`, `Navbar.tsx`, `SearchBox.tsx`, `CategoryBar.tsx` (with tests), `components/ui/icons/SearchIcon.tsx`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css` (`scrollbar-hidden` utility)
- **Decisions / notes:** `SearchBox` is now a Server Component (focus styling is CSS only). It is a `div role="search"`, not a `<form>`, so Enter does not reload the page until real search exists. The "Sell Now" button and account icon became "Sell" (`Button` link) and a "Sign in" link. The category nav is labelled "Categories" (was "Browse categories"). "Browse" is hardcoded as the current page. The home page still has `bg-zinc-50` until spec 04.
- **Follow-ups:** specs 04 to 06.

### 2026-11-26 — Design foundation (Wontid tokens, fonts, UI components)

- **Spec:** `specs/02-design-foundation`
- **Summary:** Renamed the app to Wontid (tab title `Wontid — Circular Fashion Marketplace`), added the brand tokens in `app/globals.css`, loaded Fraunces and Source Sans 3 with `next/font/google`, set up shadcn, and built `Button`, `Input`, `Tag`, and `Badge`.
- **Key files:** `app/globals.css`, `app/layout.tsx`, `components/ui/button.tsx`, `input.tsx`, `badge.tsx`, `Tag.tsx` (each with a test), `lib/utils.ts`, `components.json`
- **Decisions / notes:**
  - shadcn (base-nova style, on `@base-ui/react`) was initialised with the CLI and its generated colour variables, dark mode, and the `cn`, `lucide-react`, `class-variance-authority`, `tw-animate-css`, and `shadcn` packages were removed. `cn` is `clsx` plus `tailwind-merge`. `Button`, `Input`, and `Badge` were then rewritten to the design. shadcn files keep the CLI's lowercase names. `Tag.tsx` is PascalCase per the personal rules.
  - Tokens use `@theme static`, so the utilities are `bg-primary`, `text-text`, `text-text-muted`, `bg-bg`, `bg-surface`, `border-border`, `text-on-primary`, `bg-highlight`, `bg-secondary`, `text-error`, `shadow-card`, `shadow-hover`, `font-heading`, `font-body`. The `secondary` token is Dusty Rose, not shadcn's neutral secondary.
  - The design's text scale names differ from Tailwind's: design "lg" (1.25rem) is `text-xl`, design "xl" (1.5rem) is `text-2xl`. Only `text-hero` and `text-section` (2rem) were added. Radius `sm`/`md`/`lg` already match Tailwind's defaults.
  - `Button` takes a `variant` (`primary`, `secondary`, `destructive`) and renders a `next/link` when given an `href`. `Badge` takes a required `variant` (`sale`, `new`).
  - The input focus ring is `primary` at 20%, not the design's rejected `#3E7C7A`.
  - Base styles sit in `@layer base`, so utilities override them.
  - The logo icon and favicon are unchanged, so the Font Awesome link stays in `app/layout.tsx`. The logo is its only user.
  - The old `GridCard` and `ProductGrid` keep their old colours until spec 04, so the app looks mixed.
- **Follow-ups:** Remove the Font Awesome link when the logo is replaced. The checks (typecheck, lint, format, tests, build) pass, but the pages were not compared visually against the design, because no browser was available in this session. Do that comparison.

### 2026-11-26 — Design specs split into five (02 to 06)

- **Spec:** `specs/02-design-foundation`, `specs/03-header`, `specs/04-listings`, `specs/05-landing-hero-and-categories`, `specs/06-landing-info-and-footer`
- **Summary:** Split the Wontid design work into five specs and removed the single combined spec folder, which had no code behind it. Nothing is implemented yet. Supersedes the "Spec 02 written" entry below, whose folder name no longer exists.
- **Key files:** the five `specs/*/specs.md` files above.
- **Decisions / notes:** App is renamed Wontid (tab title `Wontid — Circular Fashion Marketplace`), logo icon and favicon stay. Every image uses `/image001.webp`. The 30 sample listings stay. Font Awesome stays for the logo only. Implement in order 02 to 06. Open questions: shadcn in 02, brand and badge data for the card in 04.
- **Follow-ups:** answer the two open questions, then implement spec 02.

### 2026-11-26 — Spec 02 written (design implementation)

- **Spec:** `specs/02-design-implementation`
- **Summary:** Wrote the spec for implementing the Wontid design from Claude Design. Nothing is implemented yet; this entry only records that the spec exists.
- **Key files:** `specs/02-design-implementation/specs.md`
- **Decisions / notes:** The design source is a Claude Design canvas with two artboards (`Main.dc.html` landing page, `DesignSystem.dc.html`). The spec lists six open questions (shadcn, listing data model, sample content, photos, grain overlay, nav targets) to answer before implementing.
- **Follow-ups:** Implement spec 02 after the open questions are answered.

### 2026-11-26 — Rules compliance cleanup

- **Spec:** `specs/01-rules-compliance`
- **Summary:** Moved routes and grouped components to the root project structure, centralized listing domain types, applied the TypeScript and export rules, and replaced internal anchors with `next/link` while preserving the UI and colours.
- **Key files:** `app/`, `components/`, `types/listing.ts`, `jest.config.ts`, `prettier.config.mjs`, `package.json`
- **Decisions / notes:** `Navbar` is a Server Component; only the stateful `SearchBox` uses the client boundary. Prettier, Tailwind class sorting, Jest, React Testing Library, and colocated component tests are configured.
- **Follow-ups:** none for this spec.

### 2026-05-10 — Layout components and product grid

- **Spec:** none (predates spec-driven development)
- **Summary:** Built the initial marketplace UI shell: navbar, category bar, and a product grid of listing cards. Replaced the Create Next App placeholder home page with the grid.
- **Key files:** `src/components/Navbar.tsx`, `src/components/CategoryBar.tsx`, `src/components/ProductGrid.tsx`, `src/components/GridCard.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `next.config.ts`, `public/image001.webp`
- **Decisions / notes:** Listings are hardcoded sample data with a sample image, not fetched from a backend. `RootLayout` metadata was updated and now renders `Navbar` and `CategoryBar`.
- **Follow-ups:** Replace sample data with a real data source.

### Project start — Initial commit

- **Spec:** none (predates spec-driven development)
- **Summary:** Project scaffolded with Create Next App.
- **Key files:** project root config.
- **Decisions / notes:** This Next.js version has breaking changes. See `AGENTS.md` and `node_modules/next/dist/docs/`.
- **Follow-ups:** none.

## Known gaps / next steps

- Font Awesome is still loaded in `app/layout.tsx` only for the logo icon. Remove it when the logo is replaced.
- Sale listings show a "Sale" badge only, with no sale price or original price.
- "Featured listings" shows all 30 sample listings.
- No backend or real data yet (listings are hardcoded).
- `npm install` reports 35 dependency audit findings; dependency remediation is outside `01-rules-compliance`.
