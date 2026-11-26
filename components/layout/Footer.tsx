import type { ReactElement } from "react";
import Link from "next/link";

type FooterVisibility = "all" | "mobile" | "desktop";

type FooterLink = {
  label: string;
  visibility: FooterVisibility;
};

type FooterColumn = {
  id: string;
  heading: string;
  visibility: FooterVisibility;
  links: FooterLink[];
};

// The mobile design has two link groups. Its "Sell" group is replaced by moving
// "Seller guide" into Shop and "Fees" into Help, so those two links exist in
// both places and each copy is hidden at the width where it does not belong.
const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "footer-shop",
    heading: "Shop",
    visibility: "all",
    links: [
      { label: "New in", visibility: "all" },
      { label: "Categories", visibility: "all" },
      { label: "Brands", visibility: "all" },
      { label: "Sale", visibility: "all" },
      { label: "Seller guide", visibility: "mobile" },
    ],
  },
  {
    id: "footer-sell",
    heading: "Sell",
    visibility: "desktop",
    links: [
      { label: "List an item", visibility: "all" },
      { label: "Seller guide", visibility: "all" },
      { label: "Shipping", visibility: "all" },
      { label: "Fees", visibility: "all" },
    ],
  },
  {
    id: "footer-help",
    heading: "Help",
    visibility: "all",
    links: [
      { label: "Help centre", visibility: "all" },
      { label: "Returns", visibility: "all" },
      { label: "Safety", visibility: "all" },
      { label: "Contact us", visibility: "all" },
      { label: "Fees", visibility: "mobile" },
    ],
  },
];

const VISIBILITY_STYLES: Record<FooterVisibility, string> = {
  all: "",
  mobile: "md:hidden",
  desktop: "hidden md:block",
};

const FOOTER_LINK_STYLES =
  "inline-block py-1.5 text-surface no-underline hover:text-surface hover:underline focus-visible:outline-surface md:py-0";

export const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-surface pt-12 pb-8 md:py-16">
      <div className="mx-auto w-full max-w-300 px-6 md:px-8">
        {/* The design's 1.5fr and 1fr column split has no standard Tailwind columns. */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] md:gap-8">
          <div className="col-span-2 flex flex-col gap-1 md:col-span-1 md:gap-2">
            <span className="font-heading text-surface text-2xl font-bold">
              Wontid
            </span>
            {/* The 32ch line length has no standard Tailwind width. */}
            <p className="text-border md:max-w-[32ch]">
              A marketplace for pre-loved clothing and accessories.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.id}
              aria-labelledby={column.id}
              className={VISIBILITY_STYLES[column.visibility]}
            >
              {/* The design's 0.04em letter spacing has no standard Tailwind step. */}
              <h2
                id={column.id}
                className="font-body text-surface leading-heading mb-2 text-[15px] font-semibold tracking-[0.04em] uppercase md:mb-3 md:text-base"
              >
                {column.heading}
              </h2>
              <ul className="flex flex-col md:gap-2">
                {column.links.map((link) => (
                  <li
                    key={link.label}
                    className={VISIBILITY_STYLES[link.visibility]}
                  >
                    <Link href="#" className={FOOTER_LINK_STYLES}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="border-border/30 text-border mt-8 border-t pt-6 text-sm">
          © {currentYear} Wontid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
