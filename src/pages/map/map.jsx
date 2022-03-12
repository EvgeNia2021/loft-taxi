import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZXZnZW5pYTIwMjIiLCJhIjoiY2wwbWVxMWJtMDB3MTNpbXpxdzZxYnY4cyJ9.t1LPL9k1zEpfzpMYw8uyRg"
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [12.33194, 45.43972],
      zoom: 12,
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
    </div>
  }
}
