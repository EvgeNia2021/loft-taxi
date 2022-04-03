import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { Navigate } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Logo from "../../components/sideLogo/sideLogo"
import { LinkNav } from "../../components/themeConverter/themeConverter"
import {LoginForm } from "./loginForm"


export class LoginPage extends Component {


  render() {
    console.log(this.props.auth)
    return (
      <>
        {this.props.isLoggedIn ? <Navigate to='/map' /> : (
          <div className="login__container">
            <Logo />
            <div className="login__form">
            <Paper elevation={3} className="login__paper">
            <LoginForm />
            <div className="login__new">
            <div className="subtitle">
                Новый пользователь?
              </div>
            <LinkNav to="/registration">Регистрация</LinkNav>
            </div>
            </Paper>
            </div>
          </div>
        )}
      </>
    );
  }
}

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  // logIn: PropTypes.func,
  // navigate: PropTypes.func,
};
export const LoginWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, auth: state.auth })
)(LoginPage);