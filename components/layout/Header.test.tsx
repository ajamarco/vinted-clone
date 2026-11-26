import { render, screen } from "@testing-library/react";

import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("contains the main and category navigation", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Categories" }),
    ).toBeInTheDocument();
  });
});
