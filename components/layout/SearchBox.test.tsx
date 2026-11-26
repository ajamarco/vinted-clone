import { fireEvent, render, screen } from "@testing-library/react";

import { SearchBox } from "@/components/layout/SearchBox";

describe("SearchBox", () => {
  it("is a labelled search landmark that accepts a query", () => {
    render(<SearchBox />);

    const search = screen.getByRole("searchbox", { name: "Search listings" });
    fireEvent.change(search, { target: { value: "dress" } });

    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(search).toHaveValue("dress");
  });
});
