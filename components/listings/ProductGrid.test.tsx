import { render, screen } from "@testing-library/react";

import { ProductGrid } from "@/components/listings/ProductGrid";

describe("ProductGrid", () => {
  it("renders the complete listing collection", () => {
    render(<ProductGrid />);

    expect(
      screen.getByRole("region", { name: "Listings" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(30);
    expect(screen.getByText("Zara Floral Midi Dress")).toBeInTheDocument();
    expect(screen.getByText("Decathlon TPE Yoga Mat")).toBeInTheDocument();
  });
});
