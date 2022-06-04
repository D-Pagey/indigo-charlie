import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home imageUrl="/image.png" />);

    const heading = screen.getByRole("heading", {
      name: /Welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});