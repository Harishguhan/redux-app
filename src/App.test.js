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
            <App />
          </Router>
        </Provider>
      );
    });
    // it("Renders the form", () => {
    //   const username = screen.getByTestId("");
    //   const email = screen.getByTestId("emailaddress");
    //   const mobilenumber = screen.getByTestId("");
    //   expect(username).toBeInTheDocument();
    //   expect(email).toBeInTheDocument();
    //   expect(mobilenumber).toBeInTheDocument();
    // });

    // it("submit the form", () => {
    //   const username = screen.getByTestId("userName");
    //   const email = screen.getByTestId("email");
    //   fireEvent.change(username, { target: { value: "some value" } });
    //   fireEvent.change(email, { target: { value: "some value" } });
    //   fireEvent.change(mobilenumber, {
    //     target: { value: "1212121211", length: 10 },
    //   });
    //   expect(username).toHaveTextContent("");
    //   expect(username.textContent).toBe("harish");
    //   expect(email).toHaveTextContent("");
    //   expect(mobilenumber).toHaveTextContent("");
    // });
  });
});
