import { render, screen } from "@testing-library/react";

import { ClosingBand } from "@/components/home/ClosingBand";

describe("ClosingBand", () => {
  it("is a region labelled by its heading, with supporting text", () => {
    render(<ClosingBand />);

    expect(
      screen.getByRole("region", {
        name: "Good clothes deserve a longer life.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Wontid makes passing things on/)).toBeVisible();
  });
});
