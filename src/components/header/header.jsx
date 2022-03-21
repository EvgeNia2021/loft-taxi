import React, { Component } from "react";
import { logOut } from "../../actions"
import { connect } from "react-redux"
import { LinkNav } from "../themeConverter/themeConverter"

class Header extends Component {
  unauthorize = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

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
                      <LinkNav to="/map">Карта</LinkNav>
                    </li>
                    <li>
                      <LinkNav to="/profile">Профиль</LinkNav>
                    </li>
                    <li>
                      <LinkNav to="/login" onClick={this.unauthorize}>Выйти</LinkNav>
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

export const HeaderWithLinks = connect(
  null,
  { logOut }
)(Header);