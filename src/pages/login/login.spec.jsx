import React from "react";
import { LoginPage } from "./login";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("./loginForm", () => ({ LoginForm: () => <>Login form</> }));
describe("Login", () => {
  describe("when logged out", () => {
    it("renders login form", () => {
      const { container } = render(
        <Provider
          store={{
            dispatch: () => { },
            subscribe: () => { },
            getState: () => ({ auth: { isLoggedIn: false } }),
          }}
        >
          <Router location={{}}>
            <LoginPage />
          </Router>
        </Provider>
      );
      expect(container.innerHTML).toMatch("Login form");
    });
  })
});