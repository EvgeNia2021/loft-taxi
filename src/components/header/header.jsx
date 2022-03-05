import React from "react";

class Header extends React.Component {
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
                <button onClick={() => navigateTo("loginPage")}>
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