import React from "react";
import { Map } from "./map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("Map", () => {
  it("map renders correctly", () => {
    const { getByTestId } = render(<Map />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      center: [12.33194, 45.43972],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 12,
    });
  });
});
