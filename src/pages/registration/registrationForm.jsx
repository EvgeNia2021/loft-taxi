import React from "react";
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { registrate } from "../../actions";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';



export const RegistrationForm = ({useDispatchHook = useDispatch }) => {

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatchHook()
  const onSubmit = (data) => {
    const { email, name, surname, password } = data
    dispatch(registrate(email, name, surname, password))
  }

  return (
    <form className="form__text"  onSubmit={handleSubmit(onSubmit) }>
    <h1 className="form__title">Регистрация</h1>
    <div className="form__group">
      <FormLabel className="form__label" htmlFor="email" >Email*</FormLabel>
      <Input className="form__input" id="email" type="email" name="email" size="16" placeholder="mail@mail.ru" {...register('email')} />
    </div>
    <div className="form__group">
      <FormLabel className="form__label" htmlFor="username" >Ваше имя*</FormLabel>
      <Input className="form__input" id="name" type="name" name="name" size="16" placeholder="Петр" {...register('name')} />
    </div>
    <div className="form__group">
      <FormLabel className="form__label" htmlFor="username" >Ваша фамилия*</FormLabel>
      <Input className="form__input" id="surname" type="surname" name="surname" size="16" placeholder="Петров" {...register('surname')} />
    </div>
    <div className="form__group">
      <FormLabel className="form__label" htmlFor="password" >Придумайте пароль*</FormLabel>
      <Input className="form__input" id="password" type="password" name="password" size="16" placeholder="*************" {...register('password')} />
    </div>
    <Button
        variant="contained" color="primary" type="submit" data-testid="authButton">Зарегистрироваться</Button>
  </form>
  )
}

RegistrationForm.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
};