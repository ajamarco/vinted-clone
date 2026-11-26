import { render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it.each(["primary", "secondary", "destructive"] as const)(
    "renders the %s variant as an enabled button",
    (variant) => {
      render(<Button variant={variant}>Start browsing</Button>);

      expect(
        screen.getByRole("button", { name: "Start browsing" }),
      ).toBeEnabled();
    },
  );

  it("renders as a link when given an href", () => {
    render(<Button href="/sell">List an item</Button>);

    expect(screen.getByRole("link", { name: "List an item" })).toHaveAttribute(
      "href",
      "/sell",
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Button disabled>Sell</Button>);

    expect(screen.getByRole("button", { name: "Sell" })).toBeDisabled();
  });
});
