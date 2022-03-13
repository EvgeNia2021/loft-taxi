import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/profile/profile", () => ({ ProfileWithAuth: () => <div>Profile page</div> }));
jest.mock("./pages/login/login", () => ({ LoginWithAuth: () => <div>Login page</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login page");
  });


});
