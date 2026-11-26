# Personal Coding Rules

These rules describe my personal coding style. Apply them in every project unless the project's stack file says otherwise.

## TypeScript

- Use strict TypeScript. Do not disable `strict` or add `// @ts-ignore`. If a suppression is unavoidable, use `// @ts-expect-error` with a short reason.
- Never use `any`. Use `unknown` and narrow it, or write a proper type.
- Prefer `type` over `interface` for props and object shapes.
- Do not use non-null assertions (`!`) unless there is no other option. Handle the null case instead.
- Type function parameters and return values explicitly for exported functions.
- Use `import type` for type-only imports.

## Types

- Keep all types for a component in that component's file, including its props type and any other types only that component uses.
- If a type is needed by more than one file, move it to a shared types file and import it from there. Do not import types from another component's file.
- Keep one source of truth for each type. If two components need the same shape, do not copy it. Move it to the shared types file and import it in both places.
- Give a shared type a name that describes the domain concept, such as `Listing` or `CartItem`, not the component it was first used in.
- If two types look similar but mean different things, keep them separate and name them for their purpose, such as `ListingCardProps` and `ListingFormValues`.

## Functions and Variables

- Use `const` for all variables. Use `let` only when reassignment is necessary.
- Use arrow functions assigned to `const` instead of the `function` keyword.
- Use named exports by default. Use default exports only when a framework requires them.

## Naming and Formatting

- Prettier formats all code. Do not hand-format against it.
- Use descriptive names. Avoid abbreviations except widely known ones, such as `id` and `url`.
- Component files use PascalCase, for example `ListingCard.tsx`.
- Non-component files use kebab-case, for example `format-price.ts`.
- Hook files use camelCase with the `use` prefix, for example `useListingFilters.ts`.

## Code Quality

- Keep functions and components small and focused. Split them when they do more than one job.
- Do not leave commented-out code, `console.log` statements, or unused imports in finished code.
- Do not add dependencies without checking first whether the project already has a tool that does the job.

## Testing

- Put test files next to the code they test, named `*.test.ts` or `*.test.tsx`.
- Test behaviour, not implementation details.
- New features and bug fixes should include tests.

## Before Finishing a Task

- Run the typecheck, lint, format check, and tests. Fix any failures your change introduced.
