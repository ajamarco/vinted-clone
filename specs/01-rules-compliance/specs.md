# Spec 01: Rules compliance

## Goal

Bring all the code that exists today into line with the rules in `docs/personal-coding-rules.md` and `docs/nextjs-stack-rules.md`. This is a cleanup of existing code. It adds no new features and does not change how the app looks or behaves.

## Scope

In scope:

- Every file under `src/app/` and `src/components/`, plus config files that affect structure (`tsconfig.json`, `package.json`, `next.config.ts`).
- Moving the project to the structure the stack rules describe.
- Setting up the tools needed to run the checks the rules require.
- Adding a basic test for each existing component.

Out of scope:

- New features, new pages, or visual redesign.
- Redux Toolkit, shadcn/ui, and Clerk. They are in the stack rules but are installed in later specs, when something needs them.
- Replacing the hardcoded listings with real data. That needs the backend.
- Colours. The colour scheme and brand colour tokens are implemented in a later spec. Leave every colour value as it is, including the hardcoded `#005d4b`.

## Requirements

### 1. Project structure

- Move `app/` and `components/` from `src/` to the project root, and remove `src/`.
- Update the `@/*` path alias in `tsconfig.json` so imports still resolve.
- Group components by type, for example `components/layout/` for `Navbar` and `CategoryBar`, and `components/listings/` for `ProductGrid` and `GridCard`.
- Move shared types to `types/`, grouped by domain.

### 2. Types

- `Condition` and the `Listing` shape are used by more than one file. Move them to `types/listing.ts` under domain names, and import them from there. No component imports a type from another component's file.
- `ProductGrid` and `GridCard` each keep their own props type in their own file, directly above the component.
- Use `type` instead of `interface`.
- Use `import type` for type-only imports.
- Exported functions have explicit parameter and return types.

### 3. Functions, variables, and exports

- Components are arrow functions assigned to `const`, not `function` declarations.
- Components use named exports. Only route files (`page.tsx`, `layout.tsx`) keep default exports.
- Update all imports to match.
- `let` is used only where reassignment is needed.

### 4. Tailwind

- Colours are out of scope. Do not change, tokenise, or replace any colour value, including arbitrary colour classes like `text-[#005d4b]` and colour shadows like `shadow-[0_0_0_3px_rgba(0,93,75,0.12)]`.
- Replace arbitrary non-colour values (font sizes, scale, and similar) with standard Tailwind utilities or tokens where one fits. If none fits, keep the arbitrary value and leave a short comment saying why.
- Do not use inline `style` props for layout or colours.
- Prettier with the Tailwind plugin sorts the class names. Do not sort them by hand.

### 5. Next.js and React

- Use `next/link` for internal navigation. The logo link in `Navbar` currently uses `<a href="/">`.
- Components stay Server Components unless they need state, effects, event handlers, or browser APIs. Keep `"use client"` as low in the tree as possible.
- Keys are stable and unique IDs.
- Check anything that does not follow the project rules against the guides in `node_modules/next/dist/docs/`, as `AGENTS.md` requires. Do not rely on memory of older Next.js versions.

### 6. Code quality

- No unused imports, `console.log` calls, or commented-out code.
- Split any function or component that does more than one job.

### 7. Tooling and tests

- Install and configure Prettier with the Tailwind plugin. Format the whole project with it.
- Install and configure Jest with React Testing Library.
- Add npm scripts for `typecheck`, `format:check`, and `test`. `lint` already exists.
- Add one test file next to each existing component, named `*.test.tsx`. Each tests behaviour, not implementation details, and queries elements by role or label, not by class name.
- Check first whether the project already has a tool that does the job before adding a dependency.

## Success criteria

The spec is done when all of these are true:

1. The project has no `src/` directory. `app/`, `components/`, and `types/` are at the root, and the app still builds and runs.
2. Components are in grouped folders under `components/`. Shared types are in `types/`.
3. No component imports a type from another component's file.
4. No `interface`, `any`, `function` component declarations, or default exports outside route files.
5. No colour values were changed. Colours are handled in a later spec.
6. No `<a href>` is used for internal navigation.
7. Every existing component has a test, and all tests pass.
8. These commands all pass with no errors: `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run test`, and `npm run build`.
9. The app looks and behaves the same as before. Check this by running it and comparing the home page.
10. `docs/project-progress.md` has a new entry for this spec, and any problems found but left alone are listed under "Known gaps / next steps".

## Notes

- If a rule conflicts with another rule, the stack rules win, as `AGENTS.md` says.
- If following a rule would change how the app looks or behaves, stop and ask before doing it.
- The colour rules in `docs/nextjs-stack-rules.md` (theme tokens, no arbitrary colour values, the brand colour placeholder) do not apply to this spec.
