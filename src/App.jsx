import './App.css';
import React from 'react';
import { ProfileWithAuth } from "./pages/profile/profile";
import { Map } from "./pages/map/map";
import { LoginWithAuth } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";
import { withAuth } from './authContext';
import PropTypes from 'prop-types';

const PAGES = {
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  loginPage: (props) => <LoginWithAuth {...props} />,
  registration: (props) => <Registration {...props} />
}

class App extends React.Component {
  state = { page: "loginPage" };

  unauthorize = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.navigateTo("loginPage")
  }


  navigateTo = (page) => {
    if (this.props.isLoggedIn || page === "loginPage" || page === "registration") {
      this.setState({ page });
    } else {
      this.setState({ page: "loginPage"});
    }
  }
  render() {
    return (
      <>
        <section>{PAGES[this.state.page]({ navigate: this.navigateTo, unauthorize: this.unauthorize })}</section>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};
export default withAuth(App);
