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
      <h2 id="how-title" className="font-heading text-section mb-8 font-bold">
        How it works
      </h2>
      <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span
              aria-hidden="true"
              className="bg-highlight font-heading text-text flex size-12 items-center justify-center rounded-full text-2xl font-bold"
            >
              {index + 1}
            </span>
            <h3 className="font-heading leading-heading text-2xl font-semibold">
              {step.title}
            </h3>
            <p className="text-text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
