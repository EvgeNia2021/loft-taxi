import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { authorize } from "../../actions";
import { Navigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import Logo from "../../components/sideLogo/sideLogo"
import { LinkNav } from "../../components/themeConverter/themeConverter"


export class LoginPage extends Component {
  authorize = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authorize(email.value, password.value)
  }

  render() {

    return (
      <>
        {this.props.isLoggedIn ? <Navigate to='/map' /> : (
          <div className="login__container">
            <Logo />
            <div className="login__form">
            <Paper elevation={3}>
            <form className="form__text" onSubmit={this.authorize}>
              <h1 className="form__title">Войти</h1>
              <div className="form__group">
              <FormLabel className="form__label" htmlFor="email">Email</FormLabel>
              <Input className="form__input" id="email" type="email" name="email" placeholder="mail@mail.ru" />
              </div>
              <div className="form__group">
              <FormLabel className="form__label" htmlFor="password">Пароль</FormLabel>
              <Input className="form__input" id="password" type="password" name="password" placeholder="*************" />
              </div>
              <div className="login__forgot">
                Забыли пароль?
              </div>
              <Button
                variant="contained" color="primary" to="/profile" type="submit">Войти</Button>
            </form>
            <div className="login__new">
            <div className="login__subtitle">
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
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};
export const LoginWithAuth = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authorize }
)(LoginPage);