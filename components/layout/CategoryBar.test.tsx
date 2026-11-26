import { render, screen } from "@testing-library/react";

import { CategoryBar } from "@/components/layout/CategoryBar";

describe("CategoryBar", () => {
  it("lists all browsing categories as links", () => {
    render(<CategoryBar />);

    const navigation = screen.getByRole("navigation", {
      name: "Browse categories",
    });
    const links = screen.getAllByRole("link");

    expect(navigation).toBeInTheDocument();
    expect(links).toHaveLength(9);
    expect(
      screen.getByRole("link", { name: "Hobbies & collectables" }),
    ).toHaveAttribute("href", "#");
  });
});
