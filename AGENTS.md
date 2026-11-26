<!-- BEGIN:nextjs-agent-rules -->

# Project documentation

Before starting any coding task, read every Markdown file currently present in `docs/`, not just a previously known list. At minimum, the project currently requires:

- `docs/personal-coding-rules.md` for personal coding, type, naming, quality, and testing rules.
- `docs/nextjs-stack-rules.md` for this project's frontend stack, architecture, framework, and testing rules.
- `docs/spec-driven-development.md` for how this project is built from specs in `specs/`.

Apply all instructions in these files together. When the stack-specific guidance conflicts with a personal coding rule, follow the stack-specific guidance for this project. Re-check `docs/` at the start of each task so that newly added documentation is not missed.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project progress tracker

`docs/project-progress.md` is the running log of what has been built in this project.

- **At the start of every task:** read `docs/project-progress.md` in full, so you know what already exists before writing code.
- **At the end of every task:** as soon as the task is complete, and before reporting it as done, add an entry at the top of "Completed work" in `docs/project-progress.md`. Follow the entry template in that file. Cover what was done, the key files, any decisions or gotchas, and follow-ups. Update "Known gaps / next steps" if needed.
- Never skip the update, even for small tasks. Do not rewrite earlier entries. Add a new one instead.
