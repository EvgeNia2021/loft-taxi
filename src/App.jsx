import './App.css';
import React from 'react';
import { ProfileWithAuth } from "./pages/profile/profile";
import { Map } from "./pages/map/map";
import { LoginWithAuth } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from './actions'
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";


class App extends React.Component {


  unauthorize = (event) => {
    event.preventDefault();
    logOut();
  }

  render() {
    return (
      <>
        <section>
          <Routes>
            <Route exact path="/" element={<LoginWithAuth />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/profile" element={<ProfileWithAuth />} />
            {/* <Route exact path="/map" element={
            <PrivateRoute>
              <Map />
            </PrivateRoute>
          } />
            <Route path="/profile" element={
            <PrivateRoute>
              <ProfileWithAuth />
            </PrivateRoute>
          } /> */}
            <Route exact path="/registration" element={<Registration />} />
          </Routes>
        </section>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  // { logOut }
)(App);
