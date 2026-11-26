import type { ReactElement } from "react";
import Link from "next/link";

type FooterColumn = {
  id: string;
  heading: string;
  links: string[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "footer-shop",
    heading: "Shop",
    links: ["New in", "Categories", "Brands", "Sale"],
  },
  {
    id: "footer-sell",
    heading: "Sell",
    links: ["List an item", "Seller guide", "Shipping", "Fees"],
  },
  {
    id: "footer-help",
    heading: "Help",
    links: ["Help centre", "Returns", "Safety", "Contact us"],
  },
];

const FOOTER_LINK_STYLES =
  "text-surface no-underline hover:text-surface hover:underline focus-visible:outline-surface";

export const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-surface py-12 md:py-16">
      <div className="mx-auto w-full max-w-300 px-6 md:px-8">
        {/* The design's 1.5fr and 1fr column split has no standard Tailwind columns. */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-surface text-2xl font-bold">
              Wontid
            </span>
            {/* The 32ch line length has no standard Tailwind width. */}
            <p className="text-border max-w-[32ch]">
              A marketplace for pre-loved clothing and accessories.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.id} aria-labelledby={column.id}>
              {/* The design's 0.04em letter spacing has no standard Tailwind step. */}
              <h2
                id={column.id}
                className="font-body text-surface leading-heading mb-3 text-base font-semibold tracking-[0.04em] uppercase"
              >
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-2">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link href="#" className={FOOTER_LINK_STYLES}>
                      {label}
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
