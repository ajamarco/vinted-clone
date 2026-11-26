import type { ReactElement } from "react";
import Link from "next/link";

import { SearchBox } from "@/components/layout/SearchBox";
import { Button } from "@/components/ui/button";

const NAV_LINK_STYLES =
  "border-b-2 border-transparent py-2 font-semibold text-text no-underline hover:border-primary hover:text-text aria-[current=page]:border-primary";

// On mobile the "Sign in" link is at least 44px tall, as in the mobile design.
const MOBILE_TAP_TARGET_STYLES =
  "max-md:inline-flex max-md:min-h-11 max-md:items-center";

export const Navbar = (): ReactElement => {
  return (
    <nav
      aria-label="Main"
      className="mx-auto flex w-full max-w-300 flex-wrap items-center gap-x-3 gap-y-2 px-6 py-3 md:gap-x-6 md:gap-y-3 md:px-8"
    >
      <Link
        href="/"
        className="group flex shrink-0 items-center gap-2 no-underline"
        aria-label="Wontid home"
      >
        <span className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-shadow duration-150 group-hover:shadow-md">
          <i
            className="fa-solid fa-rotate text-on-primary text-sm"
            aria-hidden="true"
          />
        </span>
        {/* The design's -0.01em letter spacing has no standard Tailwind step. */}
        <span className="font-heading text-primary group-hover:text-primary-hover text-2xl leading-none font-bold tracking-[-0.01em] select-none">
          Wontid
        </span>
      </Link>

      <SearchBox />

      <div className="ml-auto flex items-center gap-3 md:gap-6">
        {/* The mobile design has no "Browse" link. */}
        <Link
          href="#"
          aria-current="page"
          className={`${NAV_LINK_STYLES} max-md:hidden`}
        >
          Browse
        </Link>
        <Link
          href="#"
          className={`${NAV_LINK_STYLES} ${MOBILE_TAP_TARGET_STYLES}`}
        >
          Sign in
        </Link>
        <Button href="#">Sell</Button>
      </div>
    </nav>
  );
};
