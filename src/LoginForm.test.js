import { render,screen } from "@testing-library/react";

import React from "react";
import LoginForm from "./LoginForm";

test('test the input fieds', () => {
    render(<LoginForm />);

    const username = screen.getByTestId('username');;
    const email = screen.getByTestId('email');
    const mobilenumber = screen.getByTestId('mobilenumber');
    const cityname = screen.getByTestId('cityname')

    expect(username.textContent).toBe('');
    expect(email.textContent).toBe('');
    expect(mobilenumber.textContent).toBe('');
    expect(cityname.textContent).toBe('');

});