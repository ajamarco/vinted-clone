# Spec-Driven Development

This project is built one spec at a time. A spec describes a unit of work before it is implemented. The spec is the source of truth for that work.

## Where specs live

- All specs live in `specs/` at the project root.
- Each spec has its own folder named `NN-short-name`, where `NN` is a two-digit number and the name is in kebab-case. Examples: `01-rules-compliance`, `02-listing-detail-page`.
- Numbers show the order the specs are created in. Never reuse or renumber a number.

## Working on a spec

1. Read `docs/project-progress.md` and all the rules in `docs/`, as `AGENTS.md` requires.
2. Read every file in the spec's folder before writing code.
3. Implement what the spec describes. Do not add work the spec does not ask for. If something outside the spec looks wrong, note it in the tracker under "Known gaps / next steps" instead of fixing it.
4. If the spec is unclear, incomplete, or conflicts with the rules in `docs/`, ask the user before guessing. Do not edit a spec to match the code unless the user asks.
5. When the spec is done, add an entry to `docs/project-progress.md` that names the spec folder.

## Rules

- Specs describe the work to do. The rules in `docs/` describe how to write the code. Both apply to every spec.
- A finished spec stays in `specs/` as a record. Do not delete it. If later work changes the outcome, write a new spec instead of editing the old one.
