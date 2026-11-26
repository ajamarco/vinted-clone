import type { ReactElement } from "react";

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "List",
    description:
      "Snap a few photos, add the size and condition, and set your price.",
  },
  {
    title: "Sell",
    description: "Chat with buyers and accept an offer when it feels right.",
  },
  {
    title: "Ship",
    description:
      "Pack it up, print the label, and send it on to its next home.",
  },
];

export const HowItWorks = (): ReactElement => {
  return (
    <section
      aria-labelledby="how-title"
      className="mx-auto w-full max-w-300 px-6 pb-12 md:px-8 md:pb-16"
    >
      <h2
        id="how-title"
        className="font-heading text-section-sm md:text-section mb-6 font-bold md:mb-8"
      >
        How it works
      </h2>
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="flex items-start gap-4 md:flex-col md:items-stretch md:gap-3"
          >
            {/* The mobile design's 22px sizes have no standard Tailwind step. */}
            <span
              aria-hidden="true"
              className="bg-highlight font-heading text-text flex size-11 shrink-0 items-center justify-center rounded-full text-[22px] font-bold md:size-12 md:text-2xl"
            >
              {index + 1}
            </span>
            <div className="flex flex-col md:gap-3">
              <h3 className="font-heading leading-heading text-[22px] font-semibold md:text-2xl">
                {step.title}
              </h3>
              <p className="text-text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
