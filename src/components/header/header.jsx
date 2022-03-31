import React, { Component } from "react";
import { logOut, removeFlag } from "../../actions"
import { connect } from "react-redux"
import { LinkNav } from "../themeConverter/themeConverter"
import { AppBar, Toolbar, Container} from "@material-ui/core";
import HorizontalLogo from "../../components/horizontalLogo/horizontalLogo"
// import { withStyles } from "@material-ui/core";

// const styles = theme => ({
//   AppBar: {
//     backgroundColor: ""
//   }
// })

class Header extends Component {
  unauthorize = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  // removeFlag = (event) => {
  //   event.preventDefault()
  //   this.props.removeFlag()
  // }

  render() {
    // const { navigateTo } = this.props
    return (
      <>
        <div className="header">
          <div className="header__topline">
              <HorizontalLogo />
              <div>
                <nav>
                  <ul  className="header__links">
                    <li className="header__link">
                      <LinkNav to="/map">Карта</LinkNav>
                    </li>
                    <li className="header__link">
                      <LinkNav to="/profile">Профиль</LinkNav>
                    </li>
                    <li className="header__link">
                      <LinkNav to="/login" onClick={this.unauthorize}>Выйти</LinkNav>
                    </li>
                  </ul>
                </nav>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export const HeaderWithLinks = connect(
  null,
  { logOut, removeFlag }
)(Header);