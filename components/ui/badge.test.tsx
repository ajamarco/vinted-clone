import { render, screen } from "@testing-library/react";

import { Badge } from "@/components/ui/badge";

describe("Badge", () => {
  it.each([
    ["sale", "Sale"],
    ["new", "New"],
  ] as const)("renders the %s variant text", (variant, text) => {
    render(<Badge variant={variant}>{text}</Badge>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
