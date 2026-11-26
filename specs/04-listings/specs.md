# Spec 04: Listings (product card, grid, featured section)

## Goal

Restyle the listing card and the product grid to the Wontid design, and present the grid as the "Featured listings" section of the home page. After this spec the home page shows the new header (spec 03) and a Wontid-styled grid of the existing 30 sample listings.

## Depends on

- Spec 02 (`specs/02-design-foundation`): tokens, fonts, `Badge`, `Tag`.
- Spec 03 (`specs/03-header`): the sticky header. This spec assumes the page offset for the old fixed header is already removed.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- Read `project/Main.dc.html` (section `id="featured"`, and CSS `.card`, `.card-media`, `.card-body`, `.card-brand`, `.card-title`, `.card-meta`, `.card-price`, `.card-size`, `.section-head`, `.section-title`, `.view-all`, `.product-grid`) and `project/DesignSystem.dc.html` (the "Product card" panel).
- The design files are the source of truth for exact values. If this spec and the design disagree, ask the user.
- Re-read the design at the start of the implementation task. Use it for how things look. Do not copy its markup or CSS.

## Scope

In scope:

- `components/listings/GridCard.tsx`, `ProductGrid.tsx`, their tests, and `types/listing.ts`.
- A "Featured listings" section heading row around the grid.
- The home page background.

Out of scope:

- Any other home page section (spec 05 and 06).
- Real data. **The 30 existing sample listings stay.** Do not reduce them to the design's 8.
- A listing detail page. The card links to `#` like other not-yet-built routes.
- Pagination or filtering.

## Requirements

### 1. Images

- Every card keeps using the existing sample image `/image001.webp` through `next/image`, as the current listings do. Do not build the design's "Photo placeholder" tiles or tinted backgrounds.

### 2. Product card (`GridCard`)

- The whole card is one link (`next/link`, `href="#"` for now). Today's card is an `article` with no link, so the markup changes. Keep the card meaningful to screen readers: the link's accessible name should include the title and price.
- `surface` background, 1px `border`, `lg` radius, `shadow-card`, `overflow-hidden`. On hover: `shadow-hover` and a 2px upward lift, over 200ms. Respect `prefers-reduced-motion` for the lift.
- Image area: 4:5 aspect ratio (replaces 3:4), `object-cover`, `next/image` with correct `sizes` for the new grid. Drop the image zoom on hover (the design lifts the whole card instead).
- Badge: top-left of the image, 12px inset, using `Badge`. It shows only when the listing has a `badge`: `"new"` renders the `new` variant with the text "New", and `"sale"` renders the `sale` variant with the text "Sale".
- Condition: shown as a `Tag` in the card body (see "Sample data" below).
- Body, 16px padding, 4px gap: brand (uppercase, `text-sm`, `text-muted`, weight 600, letter spacing 0.04em), title (Fraunces 600, `text-lg`, line height 1.25, clamped to two lines), and a row with price (weight 600) on the left and size (`text-sm`, `text-muted`) on the right, 8px above it.
- Props type stays directly above the component. No component imports a type from another component's file.

### 3. Product grid (`ProductGrid`)

- Columns: 1 below 600px, 2 from 600px, 4 from 1024px. 24px gap. (Replaces 2, 3, and 5 columns.) Keep `Readonly` props, the `listings` prop, and stable ID keys.
- All 30 listings render, as today.

### 4. Featured section

- Wrap the grid in a section labelled by its heading. A heading row has the `h2` "Featured listings" (Fraunces 700, `text-2xl`) on the left and a "View all" link (`next/link`, `href="#"`, `primary`, weight 600, underline with 3px offset) on the right, 32px above the grid.
- Section vertical padding 48px, 64px from 768px. Content max width 1200px, with 24px side padding and 32px from 768px.
- The home page body uses the `bg` colour from the tokens. Remove the old `bg-zinc-50`.
- `app/page.tsx` stays a Server Component and a default export.

### 5. Listing type (`types/listing.ts`)

- `types/listing.ts` stays the single source of truth for `Listing` and `Condition`. Do not duplicate types in components.
- Add to `Listing`: `brand: string` (required) and `badge?: ListingBadge`, where `ListingBadge` is `"new" | "sale"` and lives in `types/listing.ts`. Keep `condition`, `price`, `size`, `title`, `image`, and `id` as they are.

**Sample data** (in `components/listings/ProductGrid.tsx`, still hardcoded):

- Give every one of the 30 listings a `brand`, split out of its current title (for example "Zara Floral Midi Dress" becomes brand `Zara` and title `Floral Midi Dress`; "& Other Stories Silk Blouse" becomes brand `& Other Stories`). Where a listing has no real brand (for example the knitting starter kit), use a sensible maker, or `Unbranded`.
- Set `badge: "new"` on the listings whose condition is "New with tags".
- Set `badge: "sale"` on a spread of other listings, about six, across different categories. At most one badge per listing. The rest have no badge. This is made-up sample data, as the rest is.
- The design has no sale price, so do not add an original price or a strikethrough. The Sale badge alone marks a sale item.
- Every listing keeps `image: "/image001.webp"`.
- The design's tag style is used for `condition`: show it as a `Tag` in the card body, below the brand and title row, so the existing condition information is not lost. Keep the design's 4px body gap.
- Together, the sample data must exercise every part of the design's card: both badge variants, listings with and without a badge, and the brand, title, price, size, and tag on every card.

## Rules to follow

- All rules in `docs/` apply. In particular: theme tokens and no arbitrary colour values, no inline `style` props, `next/image` and `next/link`, stable ID keys, named exports except route files, props types above components, shared types in `types/`.
- Arbitrary non-colour values need a one-line comment.
- Read the guides in `node_modules/next/dist/docs/` for `next/image` before changing its props, as `AGENTS.md` requires.

## Success criteria

The spec is done when all of these are true:

1. The card and grid match the design's card and featured grid at 1280px and at about 390px wide, including the hover state.
2. All 30 listings render with `/image001.webp`. No placeholder tiles.
3. The grid has 1, 2, and 4 columns at the stated breakpoints.
4. "Featured listings" heading and "View all" link are present, and the section is labelled by its heading.
5. `Listing` has `brand` and optional `badge`, all 30 listings have a brand, "New with tags" listings have the New badge, about six others have the Sale badge, and `types/listing.ts` is the only place `Listing`, `Condition`, and `ListingBadge` are defined.
6. No arbitrary colour values, no inline styles.
7. Tests are updated (queries by role or label). They cover: the card link name and target, that brand, title, price, and size show, that the badge shows only for the right listings, that every listing renders in the grid, and the section heading.
8. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` pass.
9. `docs/project-progress.md` has a new entry for this spec. If "Featured" showing all 30 looks odd, note it under "Known gaps / next steps".

## Open questions

None. The data decision is settled: change the local sample data so the cards show everything the design card shows (see "Sample data" under requirement 5).
