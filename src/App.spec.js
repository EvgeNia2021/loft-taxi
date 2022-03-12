import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/login/login", () => ({ LoginWithAuth: () => <div>Login page</div> }));
jest.mock("./pages/map/map", () => ({ Map: () => <div>Map page</div> }));
jest.mock("./pages/profile/profile", () => ({ ProfileWithAuth: () => <div>Profile page</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login page");
  });

  describe("when clicked on nav bar buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App isLoggedIn />);
      fireEvent.click(getByText("Карта"));
      expect(container.innerHTML).toMatch("Map page");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile page");
    });
  });
});
