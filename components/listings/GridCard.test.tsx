import { render, screen } from "@testing-library/react";

import { GridCard } from "@/components/listings/GridCard";

const cardProps = {
  image: "/image001.webp",
  brand: "Zara",
  price: "£18.00",
  condition: "Like new",
  title: "Floral Midi Dress",
  size: "UK 12",
} as const;

describe("GridCard", () => {
  it("is a single link that names the listing and its price", () => {
    render(<GridCard {...cardProps} />);

    const link = screen.getByRole("link", { name: /Floral Midi Dress/ });

    expect(link).toHaveAttribute("href", "#");
    expect(link).toHaveAccessibleName(/£18\.00/);
  });

  it("shows the brand, title, price, size and condition", () => {
    render(<GridCard {...cardProps} />);

    expect(screen.getByText("Zara")).toBeInTheDocument();
    expect(screen.getByText("Floral Midi Dress")).toBeInTheDocument();
    expect(screen.getByText("£18.00")).toBeInTheDocument();
    expect(screen.getByText("UK 12")).toBeInTheDocument();
    expect(screen.getByText("Like new")).toBeInTheDocument();
  });

  it("shows no badge when the listing has none", () => {
    render(<GridCard {...cardProps} />);

    expect(screen.queryByText("New")).not.toBeInTheDocument();
    expect(screen.queryByText("Sale")).not.toBeInTheDocument();
  });

  it.each([
    ["new", "New"],
    ["sale", "Sale"],
  ] as const)("shows the %s badge", (badge, label) => {
    render(<GridCard {...cardProps} badge={badge} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
