import { render, screen } from "@testing-library/react";

import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("provides navigation and marketplace actions", () => {
    render(<Navbar />);

    expect(screen.getByRole("link", { name: "Clearout home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("button", { name: "Sell Now" })).toBeEnabled();
    expect(screen.getByRole("button", { name: "Your account" })).toBeEnabled();
  });
});
