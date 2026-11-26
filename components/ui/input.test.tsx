import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "@/components/ui/input";

describe("Input", () => {
  it("is reachable by its label and accepts text", () => {
    render(
      <>
        <label htmlFor="title">Item title</label>
        <Input id="title" />
      </>,
    );

    const input = screen.getByLabelText("Item title");
    fireEvent.change(input, { target: { value: "Corduroy chore jacket" } });

    expect(input).toHaveValue("Corduroy chore jacket");
  });

  it("exposes its error state and description", () => {
    render(
      <>
        <label htmlFor="price">Price</label>
        <Input id="price" aria-invalid="true" aria-describedby="price-error" />
        <span id="price-error">Enter a price of at least £1.</span>
      </>,
    );

    const input = screen.getByLabelText("Price");

    expect(input).toBeInvalid();
    expect(input).toHaveAccessibleDescription("Enter a price of at least £1.");
  });
});
