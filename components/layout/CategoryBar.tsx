import type { ReactElement } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Women",
  "Men",
  "Designer",
  "Kids",
  "Home",
  "Electronics",
  "Entertainment",
  "Hobbies & collectables",
  "Sports",
];

export const CategoryBar = (): ReactElement => {
  return (
    <nav aria-label="Categories" className="border-border border-t">
      {/* The row scrolls sideways on narrow screens, and the items never shrink
          or wrap, so the ones that do not fit are cut off at the edge. */}
      <ul className="scrollbar-hidden mx-auto flex max-w-300 gap-5 overflow-x-auto px-6 md:gap-6 md:px-8 lg:justify-between">
        {CATEGORIES.map((category) => (
          <li key={category} className="shrink-0">
            {/* The mobile design's 15px text has no standard Tailwind size. The
                focus outline is drawn inside so the scrolling row cannot clip it. */}
            <Link
              href="#"
              className="text-text hover:border-primary hover:text-text aria-[current=page]:border-primary block border-b-2 border-transparent px-1 py-3 text-[15px] whitespace-nowrap no-underline focus-visible:-outline-offset-2 md:text-base"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
