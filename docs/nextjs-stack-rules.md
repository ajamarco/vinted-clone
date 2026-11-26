# Next.js Stack Rules

These rules apply to the frontend of this project. They work together with the personal coding rules file.

## Project Stack

- Next.js (App Router, latest version)
- React (latest version)
- TypeScript in strict mode
- Redux Toolkit for client-side state
- Tailwind CSS v4
- shadcn/ui components
- Jest with React Testing Library
- Prettier with the Tailwind plugin
- Clerk for authentication (`@clerk/nextjs`)
- Stripe for payments, through the backend
- Vercel Blob for image storage

The backend is a separate service that runs on `localhost:8000` in development. The frontend calls it over HTTP and never talks to the database directly.

## Project Structure

- No `src/` directory. `app/` and `components/` sit at the project root.
- Routes live in `app/`.
- Shared components are grouped by type inside `components/`, for example `components/ui/`, `components/layout/`, and `components/listings/`.
- Shadcn components live in `components/ui/`.
- Redux code lives in `lib/store/`, with one slice file per feature.
- Shared types used by more than one component or file live in `types/`, grouped by domain, for example `types/listing.ts` and `types/order.ts`.

## Next.js App Router

- Components are Server Components by default. Add `"use client"` only when the component needs state, effects, event handlers, or browser APIs.
- Keep `"use client"` boundaries as low in the tree as possible.
- Use `next/image` for images and `next/link` for internal navigation.
- Do not use the `pages/` router.
- Fetch initial page data in Server Components. Do not fetch data in `useEffect`.
- Route files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`) must use default exports.

## React

- Use function components only. No class components.
- Follow the rules of hooks. Custom hooks must start with `use`.
- Do not use `useEffect` to derive state. Compute it during render.
- Use stable, unique IDs as `key` props. Never use array indexes as keys for lists that can change.
- Put props types directly above the component in the same file.

## Redux Toolkit

- Use Redux only for client-side state, such as filters, cart state, and UI state.
- Do not copy server data into Redux if a Server Component can fetch it.
- Create slices with `createSlice`. Keep one slice per feature.
- Access state through typed hooks (`useAppDispatch`, `useAppSelector`), never the raw `useDispatch` and `useSelector`.
- Do not mutate state outside of Immer-powered reducers.

## Tailwind CSS (v4)

- Style with utility classes in JSX. Do not use inline `style` props for layout or colours.
- Do not write custom CSS for routine styling. Use `@apply` only when a utility pattern repeats in many places.
- Use the theme tokens defined in CSS with `@theme`. Do not use arbitrary values such as `w-[137px]` unless there is no token for it.
- Brand colours and design tokens are defined in `app/globals.css`. Placeholder: `[TODO: add brand colour tokens]`.
- Let the Prettier Tailwind plugin sort class names. Do not sort them by hand.

## shadcn/ui

- Add new shadcn components with the CLI, not by copying code manually.
- Do not edit files in `components/ui/` directly unless you intend to change the shared component.
- Build feature components on top of shadcn components instead of restyling them from scratch.

## Testing

- Use Jest with React Testing Library.
- Query elements by role or label, not by class name.
