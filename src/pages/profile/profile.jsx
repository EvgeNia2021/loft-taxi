import React, { Component } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect } from "react-redux";
import { logIn, logOut } from "../../actions";

export class Profile extends Component {
//  unauthorize = (event) => {
//     event.preventDefault();
//     this.props.logOut();
//     this.navigateTo("loginPage")
//   }

  render() {
    return (
      <>
        <HeaderWithLinks navigate={this.props.navigate} unauthorize={this.props.unauthorize} />
        Профиль
      </>
    );
  }
}

export const ProfileWithAuth = connect(
  null, { logIn, logOut }
)(Profile)