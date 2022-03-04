import React from "react";

export const Registration = () => {
  return <>
  <h1 className="registration__title">Войти</h1>
    <form>
      <label htmlFor="email">Email*</label>
      <input id="email" type="email" name="email" size="16" />
      <label htmlFor="username">Как Вас зовут?*</label>
      <input id="username" type="username" name="username" size="16" />
      <label htmlFor="password">Придумайте пароль*</label>
      <input id="password" type="password" name="password" size="16" />
    </form>
    <button onClick={() => this.navigateTo("map")}>
      Зарегистрироваться
    </button>
    <div className="registration__subtitle">
      Уже зарегистрированы?
    </div>
    <button onClick={() => this.navigateTo("loginPage")}>Войти</button>
  </>
}