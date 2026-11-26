import type { ReactElement } from "react";

export const ClosingBand = (): ReactElement => {
  return (
    <section
      aria-labelledby="band-title"
      className="border-border bg-surface border-y py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-180 flex-col gap-4 px-6 text-center md:px-8">
        <h2 id="band-title" className="font-heading text-section font-bold">
          Good clothes deserve a longer life.
        </h2>
        <p className="text-text-muted text-lg">
          Every piece bought second-hand is one that stays in use and out of
          landfill. Wontid makes passing things on as easy as buying new.
        </p>
      </div>
    </section>
  );
};
