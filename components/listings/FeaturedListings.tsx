import type { ReactElement } from "react";
import Link from "next/link";

import { ProductGrid } from "@/components/listings/ProductGrid";

export const FeaturedListings = (): ReactElement => {
  return (
    <section
      id="featured"
      aria-labelledby="featured-title"
      className="mx-auto w-full max-w-300 px-6 py-12 md:px-8 md:py-16"
    >
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="featured-title" className="font-heading text-section font-bold">
          Featured listings
        </h2>
        <Link
          href="#"
          className="text-primary hover:text-primary-hover font-semibold underline underline-offset-3"
        >
          View all
        </Link>
      </div>
      <ProductGrid />
    </section>
  );
};
