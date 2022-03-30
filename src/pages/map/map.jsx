import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { HeaderWithLinks } from "../../components/header/header";
import  OrderForm from "./orderForm";

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

  writeRoute = () => {
    const { route } = this.props;
    if (route.length > 0) {
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#c2423a",
          "line-width": 8
        }
      });
      this.map.flyTo({
        center: route[0],
        zoom: 15
      });
    } else if (this.map.getLayer("route") !== undefined) {
      this.map.removeLayer("route");
      this.map.removeSource("route");
    }
  };

  render() {
    return(
    <>
    <HeaderWithLinks unauthorize={this.props.unauthorize} removeFlag={this.props.removeFlag}/>
    <OrderForm />
    {/* <div className="map-wrapper"> */}
      <div data-testid="map" className="map" ref={this.mapContainer} />
    {/* </div> */}
    </>
    );
  }
}
