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

- No backend or real data yet (listings are hardcoded).
- `npm install` reports 35 dependency audit findings; dependency remediation is outside `01-rules-compliance`.
