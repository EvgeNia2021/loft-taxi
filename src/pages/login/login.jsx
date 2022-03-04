import React from "react";

export const LoginPage = () => {
  return <>
    <h1 className="login__title">Войти</h1>
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="16" />
      <label htmlFor="password">Пароль:</label>
      <input id="password" type="password" name="password" size="16" />
    </form>
    <button onClick={() => this.navigateTo("map")}>
      Войти
    </button>
    <div className="login__subtitle">
      Новый пользователь?
    </div>
    <button onClick={() => this.navigateTo("registration")}>Регистрация</button>
  </>
}