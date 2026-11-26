import { render, screen, within } from "@testing-library/react";

import { CategoryBar } from "@/components/layout/CategoryBar";

describe("CategoryBar", () => {
  it("lists all categories as links, in order", () => {
    render(<CategoryBar />);

    const navigation = screen.getByRole("navigation", { name: "Categories" });
    const links = within(navigation).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "Women",
      "Men",
      "Designer",
      "Kids",
      "Home",
      "Electronics",
      "Entertainment",
      "Hobbies & collectables",
      "Sports",
    ]);
    expect(
      within(navigation).getByRole("link", { name: "Hobbies & collectables" }),
    ).toHaveAttribute("href", "#");
  });
});
