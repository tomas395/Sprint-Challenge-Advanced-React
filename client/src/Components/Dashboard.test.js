import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders balls button", () => {
  const { getByText } = render(<Dashboard />);
  const buttonElement = getByText(/google/i);
  expect(buttonElement).toBeInTheDocument();
});
