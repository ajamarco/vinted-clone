import type { ReactElement } from "react";

import { SearchIcon } from "@/components/ui/icons/SearchIcon";
import { Input } from "@/components/ui/input";

export const SearchBox = (): ReactElement => {
  return (
    <div
      role="search"
      className="relative order-3 basis-full md:order-none md:max-w-110 md:flex-1 md:basis-70"
    >
      <label htmlFor="site-search" className="sr-only">
        Search listings
      </label>
      <SearchIcon className="text-text-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
      {/* The placeholder is a single space so the text below can show a shorter
          version on mobile. It is hidden as soon as the field has a value. */}
      <Input
        id="site-search"
        type="search"
        placeholder=" "
        className="peer bg-bg pl-10"
      />
      <span
        aria-hidden="true"
        className="text-text-muted pointer-events-none absolute inset-y-0 right-4 left-10 hidden items-center overflow-hidden whitespace-nowrap peer-placeholder-shown:flex"
      >
        <span className="md:hidden">Search for corduroy, Levi&apos;s…</span>
        <span className="hidden md:inline">
          Search for corduroy, Levi&apos;s, silk scarves…
        </span>
      </span>
    </div>
  );
};
