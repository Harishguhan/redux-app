const { Provider } = require("react-redux")
import { render } from '@testing-library/react';
import store from '../../store/store';
import Addata from './Addata';
test('testing a adddata',() =>{
    const { getByTestId } =render(<Provider store={store}><Addata /></Provider>)
})