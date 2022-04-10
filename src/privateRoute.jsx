import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ component: Element, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ?
        <Element {...props} /> :
        <Navigate to="/" />
    }
  />
));
