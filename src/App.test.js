import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router } from "react-router-dom";
import Addata from "./components/Addata";

describe("testing App comonent", () => {
  test("app test", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Addata />
          </Router>
        </Provider>
      );
    });
    it("Rnders the form",() =>{
        const username = screen.getByTestId("userName");

        expect(username).toBeInTheDocument();
    });

    it("submit the form",() =>{
        const username = screen.getByTestId("userName");

        fireEvent.change(username,{target:{value:"some value"}})
        expect(username).toHaveTextContent("");

    })
  });
});
