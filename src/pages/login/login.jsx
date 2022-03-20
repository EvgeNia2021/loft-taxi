import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { authorize } from "../../actions";
import { Link } from "react-router-dom"
// import { ProfileWithAuth } from "../profile/profile";
import { Navigate} from "react-router-dom";

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
              <button to="/profile" type="submit">Войти</button>
              <div className="login__subtitle">
                Новый пользователь?
              </div>
            </form>
            <Link to="/registration">Регистрация</Link>
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