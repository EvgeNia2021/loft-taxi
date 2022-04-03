import React from "react";
import { Button, Input, FormLabel } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { authorize } from "../../actions";
import { useDispatch } from "react-redux";


export const LoginForm = ({useDispatchHook = useDispatch}) => {

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatchHook()
  const onSubmit = (data) => {
    const { email, password } = data
    dispatch(authorize(email, password))
  }

  return (
    <form className="form__text" onSubmit={handleSubmit(onSubmit) }>
      <h1 className="form__title">Войти</h1>
      <div className="form__group">
        <FormLabel className="form__label" htmlFor="email">Email</FormLabel>
        <Input {...register('email')} className="form__input" id="email" type="email" name="email" placeholder="mail@mail.ru" />
      </div>
      <div className="form__group">
        <FormLabel className="form__label" htmlFor="password">Пароль</FormLabel>
        <Input {...register('password')}  className="form__input" id="password" type="password" name="password" placeholder="*************" />
      </div>
      <div className="login__forgot">
        Забыли пароль?
      </div>
      <Button
        variant="contained" color="primary" type="submit" data-testid="authButton">Войти</Button>
    </form>
  )
}
// authorize = (event) => {
//   event.preventDefault()
//   const { email, password } = event.target;
//   this.props.authorize(email.value, password.value)
// }

