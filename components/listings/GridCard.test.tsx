import { render, screen } from "@testing-library/react";

import { GridCard } from "@/components/listings/GridCard";

describe("GridCard", () => {
  it("shows the listing details and condition", () => {
    render(
      <GridCard
        image="/image001.webp"
        price="£18.00"
        condition="Like new"
        title="Zara Floral Midi Dress"
        size="UK 12"
      />,
    );

    expect(
      screen.getByRole("img", { name: "Zara Floral Midi Dress" }),
    ).toBeInTheDocument();
    expect(screen.getByText("£18.00")).toBeInTheDocument();
    expect(screen.getByText("Like new")).toBeInTheDocument();
    expect(screen.getByText("UK 12")).toBeInTheDocument();
  });
});
