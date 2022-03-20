import React, { Component } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect } from "react-redux";

export class Profile extends Component {

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
  null
)(Profile)