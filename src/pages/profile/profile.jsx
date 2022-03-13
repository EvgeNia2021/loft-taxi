import React, { Component } from "react";
import { withAuth } from "../../authContext";
import Header from "../../components/header/header";

export class Profile extends Component {
 

  render() {
  return (
  <>
  <Header navigate={this.props.navigate} unauthorize={this.props.unauthorize}/>
  Профиль
  </>
  );
}
}

export const ProfileWithAuth = withAuth(Profile)