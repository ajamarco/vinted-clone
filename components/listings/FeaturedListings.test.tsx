import { render, screen } from "@testing-library/react";

import { FeaturedListings } from "@/components/listings/FeaturedListings";

describe("FeaturedListings", () => {
  it("is a region labelled by its heading, with a view all link", () => {
    render(<FeaturedListings />);

    expect(
      screen.getByRole("region", { name: "Featured listings" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Featured listings" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View all" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("lists the listings", () => {
    render(<FeaturedListings />);

    expect(screen.getAllByRole("listitem")).toHaveLength(30);
  });
});
