import { render, screen, within } from "@testing-library/react";

import { HowItWorks } from "@/components/home/HowItWorks";

describe("HowItWorks", () => {
  it("is a region labelled by its heading", () => {
    render(<HowItWorks />);

    expect(
      screen.getByRole("region", { name: "How it works" }),
    ).toBeInTheDocument();
  });

  it("lists the List, Sell and Ship steps in order", () => {
    render(<HowItWorks />);

    const steps = within(screen.getByRole("list")).getAllByRole("listitem");

    expect(steps).toHaveLength(3);
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent),
    ).toEqual(["List", "Sell", "Ship"]);
    expect(
      screen.getByText(
        "Snap a few photos, add the size and condition, and set your price.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Pack it up, print the label, and send it on to its next home.",
      ),
    ).toBeInTheDocument();
  });
});
