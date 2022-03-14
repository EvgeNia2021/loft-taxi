import React from "react";
import { Profile } from "./profile";
import { render } from "@testing-library/react";

describe("Profile", () => {
  it("profile renders correctly", () => {
    const { container } = render(<Profile />);
    expect(container.innerHTML).toMatch("Профиль")
  });
});
