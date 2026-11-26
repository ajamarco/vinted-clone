import type { ReactElement } from "react";

import { FeaturedListings } from "@/components/listings/FeaturedListings";

const Home = (): ReactElement => {
  return (
    <main className="flex flex-1 flex-col">
      <FeaturedListings />
    </main>
  );
};

export default Home;
