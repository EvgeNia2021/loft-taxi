import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import { HeaderWithLinks } from "../../components/header/header";
import OrderForm from "./orderForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { drawRouteParams } from "./drawRouteParams"
import { getCardRequest } from "../../actions";
import { Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
window.URL.createObjectURL = function () { };

class Map extends Component {
  map = null;
  mapContainer = React.createRef();



  componentDidMount() {

    const { token, getCardRequest } = this.props;
    mapboxgl.accessToken = "pk.eyJ1IjoiZXZnZW5pYTIwMjIiLCJhIjoiY2wwbWVxMWJtMDB3MTNpbXpxdzZxYnY4cyJ9.t1LPL9k1zEpfzpMYw8uyRg"
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 12,
    })
    getCardRequest(token)
  }


  componentDidUpdate(prevProps) {
    const { coordinates } = this.props;
    const { coordinates: prevCoords } = prevProps;

    if (prevCoords !== coordinates) {
      this.drawPath(coordinates)
    }
  }
  //   if (coordinates) {
  //     this.map.flyTo({
  //       center: coordinates[0],
  //       zoom: 15,
  //     });

  //     var mapRouteLayer = this.map.getLayer('route');

  //     if (mapRouteLayer) {
  //       this.map.removeLayer('route').removeSource('route');
  //     }

  //     this.map.addLayer(drawRouteParams(coordinates));
  //   }
  // }

  resetRoute = () => {
    if (this.map && this.map.getLayer('route')) {
      this.map.flyTo({
        center: [30.3056504, 59.9429126],
        zoom: 10,
      });
      this.map.removeLayer("route")
      this.map.removeLayer("start1")
      this.map.removeLayer("start2")
      this.map.removeLayer("start3")
      this.map.removeLayer("end1")
      this.map.removeLayer("end2")
      this.map.removeLayer("end3")
      this.map.removeSource("route")
      this.map.removeSource("circle-start")
      this.map.removeSource("circle-end")
    }
  }

  componentWillUnmount() {
    this.map.remove()
  }

  drawPath(coordinates) {

    if (this.map && this.map.isStyleLoaded() && coordinates.length) {
      drawRouteParams(this.map, coordinates)
    }
  }


  render() {
    return (
      <>
        <HeaderWithLinks unauthorize={this.props.unauthorize} />
        <div data-testid="map" className="map" ref={(el) => (this.mapContainer = el)} />
        {this.props.card.cardNumber ? (
          <OrderForm resetRoute={this.resetRoute} />
        ) : (<div>
          <Paper elevation={4} className="order__placed">
            <div className="order__fill-text">
              <div className="order__fill-title">Заполните данные банковской карты</div>
            </div>
            <Link to="/profile"> <Button variant="contained" color="primary" className="f24">Перейти в профиль</Button></Link>

          </Paper>
        </div>)}


      </>
    );
  }

}

Map.propTypes = {
  cardAdded: PropTypes.bool
};

export default connect(
  (state) => ({ card: state.card, route: state.route, token: state.auth.token, coordinates: state.route.coordinates }),
  { getCardRequest }
)(Map)