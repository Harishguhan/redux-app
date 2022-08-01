import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Counter from "./components/Counter";

test("counter app", () => {
  render(<Counter />);
  const counter = screen.getByTestId("counter");
  const inbtn = screen.getByTestId("increment");

  fireEvent.click(inbtn);
  expect(counter).toHaveTextContent("1");
});