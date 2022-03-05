import React from "react";

class LoginPage extends React.Component {
  render() {
    const { navigateTo } = this.props

    return (
      <>
        <h1 className="login__title">Войти</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" size="16" />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" name="password" size="16" />
        </form>
        <div className="login__forgot">
          Забыли пароль?
        </div>
        <button onClick={() => navigateTo("map")}>
          Войти
        </button>
        <div className="login__subtitle">
          Новый пользователь?
        </div>
        <button onClick={() => navigateTo("registration")}>Регистрация</button>
      </>
    );
  }
}
export default LoginPage;