import React, { Component } from "react";

export class Registration extends Component {
  render() {
    return (
      <>
        <h1 className="registration__title">Регистрация</h1>
        <form>
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" name="email" size="16" />
          <label htmlFor="username">Как Вас зовут?*</label>
          <input id="username" type="username" name="username" size="16" />
          <label htmlFor="password">Придумайте пароль*</label>
          <input id="password" type="password" name="password" size="16" />
        </form>
        <button onClick={() => this.props.navigate("map")}>
          Зарегистрироваться
        </button>
        <div className="registration__subtitle">
          Уже зарегистрированы?
        </div>
        <button onClick={() => this.props.navigate("loginPage")}>Войти</button>
      </>
    );
  }
}

