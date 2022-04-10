import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from './profile';
import { MemoryRouter as Router } from "react-router-dom";

describe('Profile Page', () => {
  it('renders correctly', () => {
    window.URL.createObjectURL = jest.fn();
    const { queryByTestId } = render(
      <Provider store={{
        dispatch: () => { },
        subscribe: () => { },
        getState: () => ({ auth: {}, card: {} }),
      }}>
        <Router location={{}}>
          <Profile />
        </Router>
      </Provider>);

    expect(queryByTestId('profileWrapper')).toBeTruthy();
  })
})