import type { ReactElement } from "react";
import Link from "next/link";

import { SearchBox } from "@/components/layout/SearchBox";

export const Navbar = (): ReactElement => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4 lg:gap-6">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
            aria-label="Clearout home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#005d4b] shadow-sm transition-shadow duration-150 group-hover:shadow-md">
              <i
                className="fa-solid fa-rotate text-sm text-white"
                aria-hidden="true"
              />
            </span>
            {/* No standard text size preserves the original 1.35rem wordmark. */}
            <span className="text-[1.35rem] leading-none font-extrabold tracking-tight text-[#005d4b] select-none">
              Clearout
            </span>
          </Link>

          <SearchBox />

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-full bg-[#005d4b] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#00705a] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-0 active:shadow-sm"
            >
              <i
                className="fa-solid fa-tag mr-1.5 text-xs"
                aria-hidden="true"
              />
              Sell Now
            </button>

            <button
              type="button"
              aria-label="Your account"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#005d4b] transition-colors duration-150 hover:bg-[#005d4b]/10 focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-2 focus-visible:outline-none active:bg-[#005d4b]/20"
            >
              {/* No standard text size matches the original 1.55rem icon. */}
              <i
                className="fa-solid fa-circle-user text-[1.55rem]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
