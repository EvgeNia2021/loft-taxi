import React, { useState }  from "react";
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { addCard } from "../../actions";
import { useDispatch } from "react-redux";


export const ProfileForm = ({useDispatchHook = useDispatch, token}) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatchHook()
  const onSubmit = (data) => {
    const { cardName, cardNumber, expiryDate, cvc, token } = data
    dispatch(addCard(cardName, cardNumber, expiryDate, cvc, token))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile__container">
                  <div className="profile__form">
                    <div className="profile__form-left">
                      <div className="profile__group">
                      <FormLabel className="form__label" htmlFor="cardName">Имя владельца</FormLabel>
                      <Input {...register('cardName')} value={cardName} onChange={(e) => setCardName(e.target.value)} className="form__input" id="cardName" name="cardName" size="16" required />
                      </div>
                      <div className="profile__group"><FormLabel className="form__label" htmlFor="cardNumber">Номер карты</FormLabel>
                      <Input {...register('cardNumber')} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="form__input" id="cardNumber" name="cardNumber" size="16" required />
                      </div>
                      <div className="profile__group2">
                      <div className="profile__group"> <FormLabel className="form__label" htmlFor="expiryDate">MM/YY</FormLabel>
                      <Input {...register('expiryDate')} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="form__input" id="expiryDate" name="expiryDate" size="16" required />
                      </div>
                      <div className="profile__group"><FormLabel className="form__label" htmlFor="cvc">CVC</FormLabel>
                      <Input {...register('cvc')} value={cvc} onChange={(e) => setCvc(e.target.value)} className="form__input" id="cvc" name="cvc" size="16" required />
                    </div>
                    </div>
                    </div>
                    <div className="profile__form-right">
                      <Paper elevation={3} className="profile__right-paper">
                        {/* <div ref={this.myRef}></div> */}
                        <div className="display__card">
            <div className="display__header">
              <div className="display__expiry">{expiryDate}</div>
            </div>
            <div className="display__number">{cardNumber}</div>
            <div className="display__logo">
              
            </div>
          </div>
                      </Paper>
                    </div>
                  </div>
                  <Button variant="contained" color="primary" type="submit">Сохранить</Button>
                </form>
    )
}