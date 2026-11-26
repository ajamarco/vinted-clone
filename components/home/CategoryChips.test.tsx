import { render, screen, within } from "@testing-library/react";

import { CategoryChips } from "@/components/home/CategoryChips";

describe("CategoryChips", () => {
  it("is a region labelled by its heading", () => {
    render(<CategoryChips />);

    expect(
      screen.getByRole("region", { name: "Shop by category" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Shop by category" }),
    ).toBeInTheDocument();
  });

  it("lists the six categories as links, in order", () => {
    render(<CategoryChips />);

    const region = screen.getByRole("region", { name: "Shop by category" });
    const links = within(region).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "Dresses",
      "Jackets",
      "Denim",
      "Shoes",
      "Bags",
      "Accessories",
    ]);
  });
});
