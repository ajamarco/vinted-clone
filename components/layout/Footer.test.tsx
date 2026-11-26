import { render, screen, within } from "@testing-library/react";

import { Footer } from "@/components/layout/Footer";

describe("Footer", () => {
  it("is a contentinfo landmark with the Wontid name", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByText(
        "A marketplace for pre-loved clothing and accessories.",
      ),
    ).toBeInTheDocument();
  });

  // jsdom applies no CSS, so the links that are only shown on mobile
  // ("Seller guide" in Shop, "Fees" in Help) are in the list as well.
  it.each([
    ["Shop", ["New in", "Categories", "Brands", "Sale", "Seller guide"]],
    ["Sell", ["List an item", "Seller guide", "Shipping", "Fees"]],
    ["Help", ["Help centre", "Returns", "Safety", "Contact us", "Fees"]],
  ])("has a %s navigation with its links", (heading, labels) => {
    render(<Footer />);

    const navigation = screen.getByRole("navigation", { name: heading });
    const links = within(navigation).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual(labels);
  });

  it("shows the copyright line with the current year", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} Wontid. All rights reserved.`,
      ),
    ).toBeInTheDocument();
  });
});
