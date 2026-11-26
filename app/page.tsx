import type { ReactElement } from "react";

import { CategoryChips } from "@/components/home/CategoryChips";
import { ClosingBand } from "@/components/home/ClosingBand";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedListings } from "@/components/listings/FeaturedListings";

const Home = (): ReactElement => {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <CategoryChips />
      <FeaturedListings />
      <HowItWorks />
      <ClosingBand />
    </main>
  );
};

export default Home;
