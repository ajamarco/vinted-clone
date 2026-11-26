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
  { id: "second", className: "mt-8 rotate-[1.5deg]" },
  { id: "third", className: "-mt-4 rotate-1" },
  { id: "fourth", className: "mt-4 -rotate-[1.5deg]" },
];

export const Hero = (): ReactElement => {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-300 px-6 py-12 md:px-8 md:py-16"
    >
      {/* The design switches to two columns at 900px, which has no standard breakpoint. */}
      <div className="border-border relative grid items-center gap-12 rounded-lg border-2 border-dashed px-6 py-8 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:px-12 min-[900px]:py-16">
        <span
          aria-hidden="true"
          className="border-border pointer-events-none absolute inset-1.5 rounded-md border opacity-60"
        />

        <div className="relative flex flex-col gap-6">
          {/* The design's 0.06em letter spacing has no standard Tailwind step. */}
          <p className="text-text-muted text-xs font-semibold tracking-[0.06em] uppercase">
            Second-hand clothing &amp; accessories
          </p>
          {/* The 14ch line length has no standard Tailwind width. */}
          <h1
            id="hero-title"
            className="font-heading text-hero max-w-[14ch] font-bold tracking-[-0.02em]"
          >
            Pre-loved pieces, the second time around.
          </h1>
          {/* The 36ch line length has no standard Tailwind width. */}
          <p className="text-text-muted max-w-[36ch] text-xl leading-relaxed">
            Buy and sell good clothes that already have a story, from people
            with wardrobes a lot like yours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#featured">Start browsing</Button>
            <Button href="#" variant="secondary">
              List an item
            </Button>
          </div>
        </div>

        <div
          role="group"
          aria-label="A pinned-up display of example listings"
          className="relative grid w-full max-w-115 grid-cols-2 gap-4 justify-self-center"
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
