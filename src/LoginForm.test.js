import { render,screen } from "@testing-library/react";

import React from "react";
import LoginForm from "./LoginForm";

test('test the input fieds', () => {
    render(<LoginForm />);

    const username = screen.getByTestId('username');
    expect(username.textContent).toBe('');

});