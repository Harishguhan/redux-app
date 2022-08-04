import React from "react";
import EditData from "./components/EditData";
import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Addata from "./components/Addata";
import '@testing-library/jest-dom/extend-expect';

describe("testing App comonent", () => {
  test("app test", () => {
    beforeEach(() => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Addata />
        </Router>
      </Provider>
    );
    test('username, mobilenumber ', () => {
      const username = getByTestId('username');

      console.log(username)

      
    });
    });
 
  });

});
