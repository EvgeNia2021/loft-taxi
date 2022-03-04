import './App.css';
import React from 'react';
import { Profile } from "./pages/profile/profile";
import { Map } from "./pages/map/map";
import { LoginPage } from "./pages/login/login";
import { Registration } from "./pages/registration/registration";

const PAGES = {
  map: <Map />,
  profile: <Profile />,
  loginPage: <LoginPage />,
  registration: <Registration />
}

class App extends React.Component {
  state = { currentPage: "loginPage" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }
  render() {
    return (
      <>
        {/* <header>
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
                <button onClick={() => this.navigateTo("loginPage")}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header> */}
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
