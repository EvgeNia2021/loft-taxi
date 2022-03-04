import React from "react";

const Header = () => {
    return (
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
                <button onClick={() => this.navigateTo("loginPage")}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
          </div>
                </div>
            </div>
        </header>
    );
};

export default Header;