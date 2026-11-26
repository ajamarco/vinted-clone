import { render, screen } from "@testing-library/react";

import { ProductGrid } from "@/components/listings/ProductGrid";

describe("ProductGrid", () => {
  it("renders the complete listing collection", () => {
    render(<ProductGrid />);

    expect(screen.getAllByRole("listitem")).toHaveLength(30);
    expect(screen.getByText("Silk Blouse")).toBeInTheDocument();
    expect(screen.getByText("TPE Yoga Mat")).toBeInTheDocument();
  });

  it("marks new-with-tags listings as New and has some Sale listings", () => {
    render(<ProductGrid />);

    expect(screen.getAllByText("New")).toHaveLength(5);
    expect(screen.getAllByText("Sale")).toHaveLength(6);
  });

  it("gives every listing a brand", () => {
    render(<ProductGrid />);

    expect(screen.getByText("& Other Stories")).toBeInTheDocument();
    expect(screen.getByText("Unbranded")).toBeInTheDocument();
  });
});
