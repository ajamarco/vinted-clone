"use client";

import type { ReactElement } from "react";
import { useState } from "react";

export const SearchBox = (): ReactElement => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="min-w-0 flex-1">
      <div
        className={[
          "relative flex items-center rounded-full border transition-all duration-200",
          searchFocused
            ? "border-[#005d4b] bg-white shadow-[0_0_0_3px_rgba(0,93,75,0.12)]"
            : "border-gray-200 bg-gray-100 hover:border-gray-300",
        ].join(" ")}
      >
        <i
          className={[
            "fa-solid fa-magnifying-glass pointer-events-none absolute left-4 text-sm transition-colors duration-200",
            searchFocused ? "text-[#005d4b]" : "text-gray-400",
          ].join(" ")}
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search for brands, items, or sellers..."
          aria-label="Search Clearout"
          className="w-full rounded-full bg-transparent py-2.5 pr-5 pl-10 text-sm text-gray-800 caret-[#005d4b] outline-none placeholder:text-gray-400"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>
    </div>
  );
};
