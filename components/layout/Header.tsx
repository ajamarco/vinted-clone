import type { ReactElement } from "react";

import { CategoryBar } from "@/components/layout/CategoryBar";
import { Navbar } from "@/components/layout/Navbar";

export const Header = (): ReactElement => {
  return (
    <header className="border-border bg-surface sticky top-0 z-50 border-b">
      <Navbar />
      <CategoryBar />
    </header>
  );
};
