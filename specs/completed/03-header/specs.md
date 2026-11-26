# Spec 03: Header (navbar, search, category sub-nav)

## Goal

Restyle the site header to the Wontid design: the navbar with logo, search, and links, and the category sub-nav underneath. After this spec the top of every page looks like the design, at desktop and phone widths.

## Depends on

- Spec 02 (`specs/02-design-foundation`) must be done: tokens, fonts, the Wontid rename, and `Button` and `Input` exist.

## Design source

- URL: <https://claude.ai/code/artifact/7cc0c49c-6fbb-4ec1-a471-c26ff929298a>
- Read `project/Main.dc.html` with the Artifact tool's `read` action. This spec uses the `<header class="navbar">` block (navbar and sub-nav) and its CSS (`.navbar`, `.navbar-inner`, `.wordmark`, `.nav-search`, `.nav-links`, `.nav-link`, `.input-search`, `.search-icon`, `.subnav`, `.subnav-list`, `.subnav-link`).
- The design files are the source of truth for exact values. If this spec and the design disagree, ask the user.
- Re-read the design at the start of the implementation task. Use it for how things look. Do not copy its markup or CSS.

## Scope

In scope:

- `components/layout/Navbar.tsx`, `SearchBox.tsx`, `CategoryBar.tsx` and their tests.
- Making the header sticky and removing the home page's offset for the old fixed header.
- Inline SVG icons for the search field.

Out of scope:

- Replacing the logo icon or favicon (kept from spec 02).
- Real search, sign-in, or sell behaviour. Links with no route keep `href="#"`.
- Page sections below the header.

## Requirements

### 1. Header structure

- One sticky header at the top: `surface` background, 1px `border` bottom, z-index above page content. It replaces the current `fixed` navbar and `fixed` category bar.
- Remove `pt-16 lg:pt-26` and any other offset for the old fixed header from `app/page.tsx`. The header sits in normal flow and sticks as you scroll.
- Content max width is 1200px, with 24px side padding and 32px from 768px.
- `Navbar` stays a Server Component. Keep `"use client"` only where state is really needed (see search).

### 2. Navbar

- Logo: the existing logo icon (kept as is, recoloured with tokens) followed by the **Wontid** wordmark. Fraunces 700, `text-xl`, `primary`, letter spacing -0.01em, `primary-hover` on hover. One `next/link` to `/` with the accessible name "Wontid home".
- Links on the right: "Browse" (marked current with `aria-current="page"`), "Sign in", and a primary "Sell" button. Use `Button` from `components/ui/` for "Sell". Links are `text`, weight 600, with a 2px transparent bottom border that turns `primary` on hover and for the current page.
- The current "Sell Now" button, tag icon, and account icon button are replaced by this.
- Navbar uses `next/link` for internal links. Routes that do not exist yet use `href="#"`, as today.

### 3. Search

- A `role="search"` form containing a labelled `type="search"` input. Label text is "Search listings", visually hidden. Placeholder: "Search for corduroy, Levi's, silk scarves…".
- Built on the `Input` component with the search variation from the design: `bg` background and left padding of 2.5rem for a leading magnifier icon (inline SVG in `components/ui/icons/`, `text-muted`, 18px, not clickable).
- The focus look is CSS only (`primary` border and ring from `Input`). The old `useState` focus tracking goes away, so `SearchBox` becomes a Server Component. Remove `"use client"` from it if nothing else needs it.
- Layout: on phone widths the search wraps to its own full-width row below the logo and links. From 768px it sits inline, `flex` grows, max width 440px.

### 4. Category sub-nav

- Same nine categories as today: Women, Men, Designer, Kids, Home, Electronics, Entertainment, Hobbies & collectables, Sports. Keep it a `nav` with `aria-label` "Categories" (or the current label if tests depend on it, but be consistent) containing a list of `next/link`s.
- Sits under the navbar with a 1px top `border`. Visible at every width (the current one only shows from `lg`).
- Below 1024px: one horizontal row that scrolls, scrollbar hidden. From 1024px: items spread across the container width.
- Links: `text`, `whitespace-nowrap`, padding 12px 4px, a 2px transparent bottom border that turns `primary` on hover and for the current page.
- Keys in the list are stable (the category name is fine).

## Rules to follow

- All rules in `docs/` apply. In particular: theme tokens and no arbitrary colour values, no inline `style` props, `next/link` for internal links, named exports, props types above components, Prettier sorts class names.
- Arbitrary non-colour values (for example a 440px max width if no token fits) need a one-line comment.
- Read the guides in `node_modules/next/dist/docs/` for anything you are unsure about.

## Success criteria

The spec is done when all of these are true:

1. The header matches the design's header at 1280px and at about 390px wide, checked side by side.
2. The header is sticky, the old `fixed` positioning and page offset are gone, and nothing is hidden under the header.
3. The logo link has the accessible name "Wontid home" and goes to `/`. The logo icon is unchanged.
4. The search input is reachable by its label "Search listings". `SearchBox` is a Server Component unless there is a documented reason.
5. The category sub-nav shows at every width, scrolls sideways on narrow screens, and spreads from 1024px.
6. No arbitrary colour values, Font Awesome icons (other than the logo), or inline styles in the header files.
7. Tests are updated and added (queries by role or label). They cover: the logo link name and target, the search field label, the nav links and the "Sell" button, and the category links.
8. `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build` pass.
9. `docs/project-progress.md` has a new entry for this spec.

## Open questions

None.
