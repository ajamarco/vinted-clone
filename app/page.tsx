import type { ReactElement } from "react";

import { ProductGrid } from "@/components/listings/ProductGrid";

const Home = (): ReactElement => {
  return (
    <main className="flex flex-1 flex-col bg-zinc-50 pt-16 lg:pt-26">
      <ProductGrid />
    </main>
  );
};

export default Home;
