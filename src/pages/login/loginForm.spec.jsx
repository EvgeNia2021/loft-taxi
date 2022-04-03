import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { LoginForm } from "./loginForm";

describe("LoginForm", () => {
  describe("on submit", () => {
    it("dispatches login credentials", async () => {
      const mockDispatch = jest.fn();
      const { getByLabelText, queryByTestId } = render(
        <LoginForm useDispatchHook={() => mockDispatch} />
      );
      const emailInput = getByLabelText("Email");
      const passwordInput = getByLabelText("Пароль");

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "testemail" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });
        fireEvent.click(queryByTestId("authButton"));
      });

      expect(mockDispatch).toBeCalledWith({
        payload: { email: "testemail", password: "testpassword" },
        type: "AUTHORIZE",
      });
    });
  });
});
