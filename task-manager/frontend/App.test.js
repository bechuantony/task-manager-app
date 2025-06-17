import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders task heading", () => {
  render(<App />);
  const heading = screen.getByText(/tasks/i);
  expect(heading).toBeInTheDocument();
});