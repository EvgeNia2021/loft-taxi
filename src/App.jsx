import './App.css';
import React from 'react';
import { ProfileWithAuth } from "./pages/profile/profile";
import { Map } from "./pages/map/map";
import { LoginWithAuth } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";


const ProtectedPage = ({ component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return isLoggedIn ? component : <Navigate to='/' />
}


class App extends React.Component {

  render() {
    return (
      <>
        <section>
          <Routes>
            <Route exact path="/" element={<LoginWithAuth />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route path='/map' element={<ProtectedPage component={<Map />} />} />
            <Route path='/profile' element={<ProtectedPage component={<ProfileWithAuth />} />} />
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
  (state) => ({ isLoggedIn: state.auth.isLoggedIn })
)(App);
