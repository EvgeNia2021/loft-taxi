import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { HeaderWithLinks } from "../../components/header/header";
import OrderForm from "./orderForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { drawRouteParams } from "./drawRouteParams"
window.URL.createObjectURL = function () { };

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

 

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiZXZnZW5pYTIwMjIiLCJhIjoiY2wwbWVxMWJtMDB3MTNpbXpxdzZxYnY4cyJ9.t1LPL9k1zEpfzpMYw8uyRg"
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 12,
    })

  }
  

  componentDidUpdate() {
    const coordinates = this.props.route;

    if (coordinates) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 15,
      });

      var mapRouteLayer = this.map.getLayer('route');

      if (mapRouteLayer) {
        this.map.removeLayer('route').removeSource('route');
      }

      this.map.addLayer(drawRouteParams(coordinates));
    }
  }

  componentWillUnmount() {
   this.map.remove()
  }



  render() {
    return (
      <>
        <HeaderWithLinks unauthorize={this.props.unauthorize} />
        <div data-testid="map" className="map" ref={(el) => (this.mapContainer = el)} />
        {this.props.cardAdded ? (
          <OrderForm />
        ) : (<div></div>)}
     
        
      </>
    );
  }

}

Map.propTypes = {
  cardAdded: PropTypes.bool
};

export default connect(
  (state) => ({ cardAdded: state.card.cardAdded, route: state.route }),
)(Map)