import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import Logo from "../../components/sideLogo/sideLogo"
import { LinkNav } from "../../components/themeConverter/themeConverter"

export class Registration extends Component {
  render() {
    return (
      <>
        <div className="login__container">
          <Logo />
          <div className="login__form">
            <Paper elevation={3} className="registration__paper">
              <form className="form__text">
                <h1 className="form__title">Регистрация</h1>
                <div className="form__group">
                  <FormLabel className="form__label" htmlFor="email" >Email*</FormLabel>
                  <Input className="form__input" id="email" type="email" name="email" size="16" placeholder="mail@mail.ru" />
                </div>
                <div className="form__group">
                  <FormLabel className="form__label" htmlFor="username" >Как Вас зовут?*</FormLabel>
                  <Input className="form__input" id="username" type="username" name="username" size="16" placeholder="Петр Александрович" />
                </div>
                <div className="form__group">
                  <FormLabel className="form__label" htmlFor="password" >Придумайте пароль*</FormLabel>
                  <Input className="form__input" id="password" type="password" name="password" size="16" placeholder="*************" />
                </div>
                <Button variant="contained" color="primary" onClick={() => this.props.navigate("map")}>
                Зарегистрироваться
              </Button>
              </form>
              <div className="login__new">
            <div className="subtitle">
            Уже зарегистрированы?
              </div>
              <LinkNav to="/profile">Войти</LinkNav>
            </div>
            </Paper>
          </div>
        </div>
      </>
    );
  }
}

