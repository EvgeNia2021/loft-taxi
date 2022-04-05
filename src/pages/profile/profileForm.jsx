import React, { useState } from "react";
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { addCard } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core"
import CardLogo from "../../components/cardLogo"
import CardIcon from "../../components/cardIcon"
import MasterCircle from "../../components/masterCircle";

const useStyles = makeStyles({
  input: {
    width: "100%",
    borderBottom: "1px solid #E0E0E0",
    fontWeight: 700,
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
    color: "#828282",
    fontWeight: 400,
  },
  button: {
    fontSize: 21,

  },
  display: {
    width: 337,
  height: 172,
  padding: "18px 16px 16px 28px",
  },
  leftCircle: {
position: "relative",
marginRight: "-10px",
opacity: "80%",
  },
  rightCircle: {
    position: "absolute",
    right: 60
  }
})

export const ProfileForm = ({ useDispatchHook = useDispatch }) => {
  const classes = useStyles();
  const card = useSelector(state => state.card)
  const token = useSelector(state => state.auth.token)
  const [cardName, setCardName] = useState(card.cardName);
  const [cardNumber, setCardNumber] = useState(card.cardNumber);
  const [expiryDate, setExpiryDate] = useState(card.expiryDate);
  const [cvc, setCvc] = useState(card.cvc);
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatchHook()
  const onSubmit = (data) => {
    const { cardName, cardNumber, expiryDate, cvc } = data
    dispatch(addCard(cardName, cardNumber, expiryDate, cvc, token))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile__container">
      <div className="profile__form">
        <div className="profile__form-left">
          <div className="profile__group">
            <FormLabel className={classes.label} htmlFor="cardName">Имя владельца</FormLabel>
            <Input {...register('cardName')} value={cardName} onChange={(e) => setCardName(e.target.value)} className={classes.input} id="cardName" name="cardName" size="16" required />
          </div>
          <div className="profile__group"><FormLabel className={classes.label} htmlFor="cardNumber">Номер карты</FormLabel>
            <Input {...register('cardNumber')} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className={classes.input} id="cardNumber" name="cardNumber" size="16" required />
          </div>
          <div className="profile__group2">
            <div className="profile__group"> <FormLabel className={classes.label} htmlFor="expiryDate">MM/YY</FormLabel>
              <Input {...register('expiryDate')} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className={classes.input} id="expiryDate" name="expiryDate" size="16" required />
            </div>
            <div className="profile__group"><FormLabel className={classes.label} htmlFor="cvc">CVC</FormLabel>
              <Input {...register('cvc')} value={cvc} onChange={(e) => setCvc(e.target.value)} className={classes.input} id="cvc" name="cvc" size="16" required />
            </div>
          </div>
        </div>
        <div className="profile__form-right">
          <Paper elevation={3} className={classes.display}>
            {/* <div ref={this.myRef}></div> */}
            <div className="display__card">
              <div className="display__header">
                <CardLogo />
                <div className="display__expiry">{expiryDate}</div>
              </div>
              <div className="display__number">{cardNumber}</div>
              <div className="card__footer">
              <CardIcon />
                <div className="display__master">
                  <div className="left-circle">
                  <MasterCircle  /></div>
                  <div className="right-circle" >
                  <MasterCircle /></div>
                </div>
              </div>
              </div>
          </Paper>
        </div>
      </div>
      <Button variant="contained" color="primary" type="submit" className={classes.button} >Сохранить</Button>
    </form>
  )
}