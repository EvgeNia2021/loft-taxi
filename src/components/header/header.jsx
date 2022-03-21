import React, { Component } from "react";
import { logOut } from "../../actions"
// import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "@material-ui/core";


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
                      <Link to="/map">Карта</Link>
                    </li>
                    <li>
                      <Link to="/profile">Профиль</Link>
                    </li>
                    <li>
                      <Link onClick={this.unauthorize}>Выйти</Link>
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