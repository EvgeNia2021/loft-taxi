import React from "react";
import { LoginPage } from "./login";
import { render } from "@testing-library/react";

describe("Home", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<LoginPage />);
      expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
      expect(getByLabelText("Пароль:")).toHaveAttribute("name", "password");
    });

  })
  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(<LoginPage isLoggedIn />);
      expect(getByText("Перейти в профиль")).toBeInTheDocument()
    });
  });
});
