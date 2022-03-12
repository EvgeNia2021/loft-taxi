import './App.css';
import React from 'react';
import { ProfileWithAuth } from "./pages/profile/profile";
import { Map } from "./pages/map/map";
import { LoginWithAuth } from "./pages/login/login";
import Registration from "./pages/registration/registration";
// import Header from "../src/components/header/header";
import { withAuth } from './authContext';

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
    if (this.props.isLoggedIn) {
      this.setState({ page });
    } else {
      this.setState({ page: "loginPage" });
    }
  }
  render() {
    const Page = PAGES[this.state.page]
    const noHeaderLogin = PAGES.loginPage
    const noHeaderReg = PAGES.registration

    if ((noHeaderLogin === Page) || (noHeaderReg === Page)) {
      return (
        <>
          {/* <Page navigateTo={this.navigateTo} /> */}
          <section>{PAGES[this.state.page]({ navigate: this.navigateTo })}</section>
        </>
      );
    }
    else {
      return (
        <>
          {/* <Page navigateTo={this.navigateTo} /> */}
          <header className="header">
            <div className="container">
              <div className="header__topline">
                <div className="header__nav">
                  <nav>
                    <ul>
                      <li>
                        <button onClick={() => this.navigateTo("map")}>
                          Карта
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.navigateTo("profile")}>
                          Профиль
                        </button>
                      </li>
                      <li>
                        <button onClick={this.unauthorize}>
                          Выйти
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <section>{PAGES[this.state.page]({ navigate: this.navigateTo })}</section>
          {/* <Header navigateTo={this.navigateTo} /> */}
        </>
      );
    }
  }
}

export default withAuth(App);
