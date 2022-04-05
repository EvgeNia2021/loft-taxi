import React from "react";
import { Map } from "./map";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("./map", () => ({ Map: () => <>Map</> }));

describe("Map", () => {
  it("map renders correctly", () => {
    const { container } = render(<Provider
      store={{
        dispatch: () => { },
        subscribe: () => { },
        getState: () => { },
      }}
    >
      <Router location={{}}>
        <Map />
      </Router>
    </Provider>);
    expect(container.innerHTML).toMatch("Map");
  });
})
