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
      <ul className="scrollbar-hidden mx-auto flex max-w-300 gap-6 overflow-x-auto px-6 md:px-8 lg:justify-between">
        {CATEGORIES.map((category) => (
          <li key={category}>
            <Link
              href="#"
              className="text-text hover:border-primary hover:text-text aria-[current=page]:border-primary block border-b-2 border-transparent px-1 py-3 whitespace-nowrap no-underline"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
