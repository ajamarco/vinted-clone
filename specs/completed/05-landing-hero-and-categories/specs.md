# Spec 05: Landing hero and shop by category

## Goal

Add the first two landing page sections from the Wontid design: the hero, and the "Shop by category" chip row. After this spec the home page reads, top to bottom: header, hero, shop by category, featured listings.

## Depends on

- Spec 02 (`specs/02-design-foundation`): tokens, fonts, `Button`.
- Spec 03 (`specs/03-header`): the sticky header.
- Spec 04 (`specs/04-listings`): the featured listings section that these sections sit above.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- Read `project/Main.dc.html`. This spec uses the first two `<section>`s inside `<main>` (the hero with `aria-labelledby="hero-title"`, and "Shop by category" with `aria-labelledby="cat-title"`) and CSS `.hero-frame`, `.hero-title`, `.hero-lede`, `.hero-actions`, `.collage`, `.pin`, `.ph-note`, `.cat-row`, `.cat-chip`, `.container`, `.section`.
- The design files are the source of truth for exact values. If this spec and the design disagree, ask the user.
- Re-read the design at the start of the implementation task. Use it for how things look. Do not copy its markup or CSS.

## Scope

In scope:

- A `Hero` component, a collage card component, and a `CategoryChips` component, each with a colocated test.
- Inline SVG icons for the category chips.
- Adding both sections to `app/page.tsx` above the featured listings.

Out of scope:

- Real routes for the hero buttons and category chips. They use `href="#"` for now.
- Real photos. **Every image uses the existing sample image `/image001.webp`.** Do not build the design's "Photo placeholder" tiles or tinted backgrounds.
- The rest of the page (spec 06) and any change to the listings (spec 04).

## Requirements

### 1. Hero (`components/home/Hero.tsx`)

- A section labelled by its `h1`. Content max width 1200px, 24px side padding, 32px from 768px. Vertical padding 48px, 64px from 768px.
- Frame: 2px dashed `border`, `lg` radius, padding 32px 24px (64px 48px from 900px), with a faint inner outline: a 1px `border` line inset 6px, `md` radius, at 60% opacity, not clickable.
- Layout: one column on narrow screens, two columns from 900px (text 1.1fr, collage 1fr), 48px gap, vertically centred.
- Text column, 24px gap:
  - A small note: "Second-hand clothing & accessories" (12px, uppercase, weight 600, letter spacing 0.06em, `text-muted`).
  - `h1`: "Pre-loved pieces, the second time around." Uses the `text-hero` size, Fraunces 700, letter spacing -0.02em, max width 14ch.
  - Lede: "Buy and sell good clothes that already have a story, from people with wardrobes a lot like yours." `text-lg`, `text-muted`, max width 36ch.
  - Two buttons, 12px gap, wrapping: "Start browsing" (primary) and "List an item" (secondary), both `Button` as links with `href="#"`.
- Collage column: a 2-column grid with a 16px gap, max width 460px, centred. It contains four cards using the sample image, each tilted and offset like the design:
  - Card 1: tilt about -2deg.
  - Card 2: tilt about 1.5deg, pushed down 32px.
  - Card 3: tilt about 1deg, pulled up 16px.
  - Card 4: tilt about -1.5deg, pushed down 16px.
  - Each card is `surface` with a 1px `border`, `lg` radius, `shadow-hover`, and a 4:5 image. Each has a small round pin dot at the top centre (10px, `secondary`, with a small shadow, `aria-hidden`).
  - The collage cards are decorative, not links. Do not reuse `GridCard` (it is a link with a body). Make a small separate component. The collage container has the `aria-label` "A pinned-up display of example listings", and images have alt text that describes them. If they are purely decorative, use empty alt text and say why in a comment.
  - Tailwind has no 1.5deg rotation. Use the nearest standard utilities (`-rotate-2`, `rotate-1`) or keep the arbitrary value with a one-line comment. Prefer exactness to the design.

### 2. Shop by category (`components/home/CategoryChips.tsx`)

- A section labelled by its `h2`: "Shop by category" (1.25rem, Fraunces). Same content width and padding as the hero, with 16px bottom padding and 16px below the heading.
- A horizontally scrolling row with snap scrolling (`x` mandatory), 12px gap, 8px bottom padding.
- Six chips, in this order, each a `next/link` (`href="#"`): Dresses, Jackets, Denim, Shoes, Bags, Accessories.
- Chip: min height 44px, padding 8px 16px, gap 8px, `surface` background, 1px `border`, `sm` radius, `text` colour, weight 600, no underline. Border turns `primary` on hover. Chips do not shrink and snap to the start.
- Each chip has a leading 20px icon in `primary`: dress, jacket, denim, shoe, bag, accessories. Draw them as inline SVG in `components/ui/icons/` (stroke 1.75, round joins), copying the paths from the design. `aria-hidden="true"`.
- Chip data is a typed constant in the component file, with stable keys (the slug or name).

### 3. Home page

- `app/page.tsx` renders `Hero`, `CategoryChips`, then the featured listings section from spec 04. Keep it a Server Component and a default export.

## Rules to follow

- All rules in `docs/` apply. In particular: theme tokens and no arbitrary colour values, no inline `style` props, `next/image` and `next/link`, named exports except route files, props types above components, stable keys, Prettier sorts class names.
- Components stay Server Components. Nothing here needs state.
- Read the guides in `node_modules/next/dist/docs/` for `next/image` before using it, as `AGENTS.md` requires.

## Success criteria

The spec is done when all of these are true:

1. The hero and the category row match the design at 1280px and at about 390px wide, checked side by side. The collage stacks under the text below 900px.
2. All images are `/image001.webp`. No placeholder tiles.
3. The hero has one `h1` with the exact title text. The category section has one `h2`. Both sections are labelled by their headings.
4. The category row scrolls sideways on narrow screens, the scrollbar is hidden, and chips snap to the start.
5. All six chips and both hero buttons are links with the right accessible names.
6. No arbitrary colour values and no inline styles. Icons are inline SVG with `aria-hidden`.
7. Tests (queries by role or label) cover: the `h1` text, both hero buttons as links, the six category links in order, and the collage's accessible label.
8. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` pass.
9. `docs/project-progress.md` has a new entry for this spec.

## Open questions

None.
