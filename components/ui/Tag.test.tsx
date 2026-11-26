import { render, screen } from "@testing-library/react";

import { Tag } from "@/components/ui/Tag";

describe("Tag", () => {
  it("renders its text", () => {
    render(<Tag>Size M</Tag>);

    expect(screen.getByText("Size M")).toBeInTheDocument();
  });
});
