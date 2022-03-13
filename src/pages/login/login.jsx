import React, { Component } from "react";
import { withAuth } from "../../authContext"
import PropTypes from 'prop-types';

export class LoginPage extends Component {
  authorize = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }
  goToProfilePage = (event) => {
    event.preventDefault();
    this.props.navigate("profile")
  }

  goToRegPage = (event) => {
    event.preventDefault();
    this.props.navigate("registration")
  }

  render() {

    return (
      <>
        {this.props.isLoggedIn ? (
          <p>Вы авторизированы <button onClick={this.goToProfilePage}>Перейти в профиль</button></p>
        ) : (
          <div>
            <form onSubmit={this.authorize}>
              <h1 className="login__title">Войти</h1>
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" size="16" />
              <label htmlFor="password">Пароль:</label>
              <input id="password" type="password" name="password" size="16" />
              <div className="login__forgot">
                Забыли пароль?
              </div>
              <button type="submit">

                Войти
              </button>
              <div className="login__subtitle">
                Новый пользователь?
              </div>
            </form>
            <button onClick={this.goToRegPage}>Регистрация</button>
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
export const LoginWithAuth = withAuth(LoginPage);