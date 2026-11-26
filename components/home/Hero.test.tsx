import { render, screen } from "@testing-library/react";

import { Hero } from "@/components/home/Hero";

describe("Hero", () => {
  it("has the main heading, labelling its section", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Pre-loved pieces, the second time around.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: "Pre-loved pieces, the second time around.",
      }),
    ).toBeInTheDocument();
  });

  it("offers browsing and listing links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: "Start browsing" }),
    ).toHaveAttribute("href", "#featured");
    expect(screen.getByRole("link", { name: "List an item" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("labels the decorative collage of example listings", () => {
    render(<Hero />);

    expect(
      screen.getByRole("group", {
        name: "A pinned-up display of example listings",
      }),
    ).toBeInTheDocument();
  });
});
