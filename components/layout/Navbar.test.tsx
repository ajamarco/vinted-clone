import { render, screen, within } from "@testing-library/react";

import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("links the logo to the home page", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Wontid home" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("provides browse, sign in and sell links", () => {
    render(<Navbar />);

    const navigation = screen.getByRole("navigation", { name: "Main" });

    expect(
      within(navigation).getByRole("link", { name: "Browse" }),
    ).toHaveAttribute("aria-current", "page");
    expect(
      within(navigation).getByRole("link", { name: "Sign in" }),
    ).toBeInTheDocument();
    expect(
      within(navigation).getByRole("link", { name: "Sell" }),
    ).toBeInTheDocument();
  });

  it("includes a labelled search field", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("searchbox", { name: "Search listings" }),
    ).toBeInTheDocument();
  });
});
