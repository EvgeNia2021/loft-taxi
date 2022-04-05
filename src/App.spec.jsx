import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("./pages/login/login", () => ({ LoginWithAuth: () => <div>Please Login</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={{
        dispatch: () => { },
        subscribe: () => { },
        getState: () => ({ auth: { isLoggedIn: false } }),
      }}>
        <Router location={{}}>
          <App />
        </Router>
      </Provider>
    );
    expect(container.innerHTML).toMatch("Please Login");
  })
});

