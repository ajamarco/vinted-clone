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
      <Input
        id="site-search"
        type="search"
        placeholder="Search for corduroy, Levi's, silk scarves…"
        className="bg-bg pl-10"
      />
    </div>
  );
};
