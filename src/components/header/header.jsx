import React, {Component} from "react";
import { withAuth } from '../../authContext'

class Header extends Component {
  unauthorize = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("loginPage")
  }
  render() {
    const { navigateTo } = this.props
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header__topline">
              <div className="header__nav">
                <nav>
                  <ul>
                    <li>
                      <button onClick={() => navigateTo("map")}>
                        Карта
                      </button>
                    </li>
                    <li>
                      <button onClick={() => navigateTo("profile")}>
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
      </>
    );
  }
}

export default Header;