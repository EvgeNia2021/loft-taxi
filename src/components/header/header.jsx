import React, { Component } from "react";

class Header extends Component {
  render() {
    // const { navigateTo } = this.props
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header__topline">
              <div className="header__nav">
                <nav>
                  <ul>
                    <li>
                      <button onClick={() => this.props.navigate("map")}>
                        Карта
                      </button>
                    </li>
                    <li>
                      <button onClick={() => this.props.navigate("profile")}>
                        Профиль
                      </button>
                    </li>
                    <li>
                      <button onClick={this.props.unauthorize}>
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