import type { ReactElement } from "react";
import Link from "next/link";

import { AccessoriesIcon } from "@/components/ui/icons/AccessoriesIcon";
import { BagIcon } from "@/components/ui/icons/BagIcon";
import { DenimIcon } from "@/components/ui/icons/DenimIcon";
import { DressIcon } from "@/components/ui/icons/DressIcon";
import { JacketIcon } from "@/components/ui/icons/JacketIcon";
import { ShoeIcon } from "@/components/ui/icons/ShoeIcon";

type CategoryChip = {
  slug: string;
  label: string;
  Icon: () => ReactElement;
};

const CATEGORY_CHIPS: CategoryChip[] = [
  { slug: "dresses", label: "Dresses", Icon: DressIcon },
  { slug: "jackets", label: "Jackets", Icon: JacketIcon },
  { slug: "denim", label: "Denim", Icon: DenimIcon },
  { slug: "shoes", label: "Shoes", Icon: ShoeIcon },
  { slug: "bags", label: "Bags", Icon: BagIcon },
  { slug: "accessories", label: "Accessories", Icon: AccessoriesIcon },
];

export const CategoryChips = (): ReactElement => {
  return (
    // The mobile design has no category chips, so the section is hidden below 768px.
    <section
      aria-labelledby="category-title"
      className="mx-auto hidden w-full max-w-300 px-6 pb-4 md:block md:px-8"
    >
      <h2
        id="category-title"
        className="font-heading leading-heading mb-4 text-xl font-bold"
      >
        Shop by category
      </h2>
      <ul className="scrollbar-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
        {CATEGORY_CHIPS.map(({ slug, label, Icon }) => (
          <li key={slug} className="shrink-0 snap-start">
            <Link
              href="#"
              className="border-border bg-surface text-text hover:border-primary hover:text-text inline-flex min-h-11 items-center gap-2 rounded-sm border px-4 py-2 font-semibold no-underline transition-colors duration-200"
            >
              <span className="text-primary">
                <Icon />
              </span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
