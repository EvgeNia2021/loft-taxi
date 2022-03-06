import './App.css';
import React from 'react';
import { Profile } from "./pages/profile/profile";
import Map from "./pages/map/map";
import LoginPage from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Header from "../src/components/header/header";

const PAGES = {
  map: Map,
  profile: Profile,
  loginPage: LoginPage,
  registration: Registration
}

class App extends React.Component {
  state = { page: "loginPage" };

  navigateTo = (page) => {
    this.setState({ page });
  }
  render() {
    const Page = PAGES[this.state.page]
    const noHeaderLogin = PAGES.loginPage
    const noHeaderReg = PAGES.registration

    if ((noHeaderLogin === Page) || (noHeaderReg === Page)) {
      return (
        <>
          <Page navigateTo={this.navigateTo} />

        </>
      );
    }
    else {
      return (
        <>
          <Page navigateTo={this.navigateTo} />
          <Header navigateTo={this.navigateTo} />
        </>
      );
    }
  }
}

export default App;
