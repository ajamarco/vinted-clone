import { fireEvent, render, screen } from "@testing-library/react";

import { SearchBox } from "@/components/layout/SearchBox";

describe("SearchBox", () => {
  it("accepts a search query", () => {
    render(<SearchBox />);

    const search = screen.getByRole("searchbox", {
      name: "Search Clearout",
    });
    fireEvent.change(search, { target: { value: "dress" } });

    expect(search).toHaveValue("dress");
  });
});
