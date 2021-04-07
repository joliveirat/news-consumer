import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/news consumer/i);
  expect(headingElement).toBeInTheDocument();
});
