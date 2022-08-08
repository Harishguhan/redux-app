import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders learn react link', () => {
  const { getByTestId } = render(<LoginForm />);
  
  const username = getByTestId('username');
  const email = getByTestId('email');
  const mobilenumber = getByTestId('mobilenumber');
  const cityname = getByTestId('cityname');
  const btn = getByTestId('btn');

    

  // fireEvent.change(username,{target:{name:"name",value:"harishguhan"}});
  fireEvent.change(email,{target:{name:"email",value:"harishguhan@dorustree.in"}});
  fireEvent.change(mobilenumber,{target:{name:"mobilenumber",value:"9025099853"}});
  fireEvent.change(cityname,{target:{name:"cityname",value:"Trichy"}});



  expect(username.value).toBe('haihs');
  expect(email.value).toBe('harishguhan@dorustree.in');
  expect(mobilenumber.value).toBe('9025099853');
  expect(cityname.value).toBe('Trichy');

  expect(username).toBeInTheDocument;
  expect(email).toBeInTheDocument;
  expect(mobilenumber).toBeInTheDocument;
  expect(cityname).toBeInTheDocument;
  
});

