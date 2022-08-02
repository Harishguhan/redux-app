import { render } from "@testing-library/react";
import React from "react";
import Addata from "./components/Addata";

test('Add data',() =>{
    render(<Addata />);
    const content = screen.getByText('ADD DATA')
});