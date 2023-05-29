//^ Creating a Snapshot test for the Navbar component
// import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '../Components/Navbar'
import Home from '../pages/Home';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store/store'

//  Run command npm test in the comand line of the root directory


test('renders Navbar correctly', () => {
    const { container } = render(
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Navbar />
            </BrowserRouter>
        </Provider>
    
    );
    expect(container).toMatchSnapshot();
  });
  