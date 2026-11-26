import type { ReactElement } from "react";

import { CollageCard } from "@/components/home/CollageCard";
import { Button } from "@/components/ui/button";

type CollageEntry = {
  id: string;
  className: string;
};

const COLLAGE_IMAGE = "/image001.webp";

// The design's 1.5deg tilts have no standard Tailwind rotation.
const COLLAGE_ENTRIES: CollageEntry[] = [
  { id: "first", className: "-rotate-2" },
  { id: "second", className: "mt-6 rotate-[1.5deg] md:mt-8" },
  { id: "third", className: "-mt-2 rotate-1 md:-mt-4" },
  { id: "fourth", className: "mt-2 -rotate-[1.5deg] md:mt-4" },
];

export const Hero = (): ReactElement => {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-300 px-4 py-8 md:px-8 md:py-16"
    >
      {/* The design switches to two columns at 900px, which has no standard breakpoint. */}
      <div className="border-border relative grid items-center gap-8 rounded-lg border-2 border-dashed px-5 py-8 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:px-12 min-[900px]:py-16 md:gap-12 md:px-6">
        <span
          aria-hidden="true"
          className="border-border pointer-events-none absolute inset-1.5 rounded-md border opacity-60"
        />

        <div className="relative flex flex-col gap-4 md:gap-6">
          {/* The design's 0.06em letter spacing has no standard Tailwind step. */}
          <p className="text-text-muted text-xs font-semibold tracking-[0.06em] uppercase">
            Second-hand clothing &amp; accessories
          </p>
          {/* The 14ch line length has no standard Tailwind width. */}
          <h1
            id="hero-title"
            className="font-heading text-hero font-bold tracking-[-0.02em] md:max-w-[14ch]"
          >
            Pre-loved pieces, the second time around.
          </h1>
          {/* The 36ch line length has no standard Tailwind width. */}
          <p className="text-text-muted text-lg leading-relaxed md:max-w-[36ch] md:text-xl">
            Buy and sell good clothes that already have a story, from people
            with wardrobes a lot like yours.
          </p>
          <div className="mt-2 flex flex-col gap-3 md:mt-0 md:flex-row md:flex-wrap">
            <Button href="#featured">Start browsing</Button>
            <Button href="#" variant="secondary">
              List an item
            </Button>
          </div>
        </div>

        <div
          role="group"
          aria-label="A pinned-up display of example listings"
          className="relative grid w-full grid-cols-2 gap-3 justify-self-center px-1 md:max-w-115 md:gap-4 md:px-0"
        >
          {COLLAGE_ENTRIES.map((entry) => (
            <CollageCard
              key={entry.id}
              image={COLLAGE_IMAGE}
              className={entry.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
