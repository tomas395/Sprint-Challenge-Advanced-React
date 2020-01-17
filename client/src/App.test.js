import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("tests if there is a darkmode class", () => {
  const { getByTestId } = render(<App />);
  const whateverElement = getByTestId("darkmodeswitcher");
  expect(whateverElement).toBeTruthy();
});
