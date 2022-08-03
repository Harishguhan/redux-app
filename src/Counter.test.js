import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./components/Counter";
describe("welcome to home", () => {
  test("counter app", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counters");
    const inbtn = screen.getByTestId("increment");
    fireEvent.click(inbtn);
    expect(counter.textContent).toBe("5");
  });
  test("decrement count", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counters");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn);
    expect(counter.textContent).toBe("-1");
  });

});
