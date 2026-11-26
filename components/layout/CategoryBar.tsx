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
    <nav
      aria-label="Browse categories"
      className="fixed top-16 right-0 left-0 z-40 hidden border-b border-gray-200 bg-white lg:block"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center gap-1">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <Link
                href="#"
                className="inline-block rounded-md px-3.5 py-2.5 text-sm font-medium whitespace-nowrap text-gray-600 transition-colors duration-150 hover:bg-[#005d4b]/5 hover:text-[#005d4b] focus-visible:ring-2 focus-visible:ring-[#005d4b] focus-visible:ring-offset-1 focus-visible:outline-none"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
