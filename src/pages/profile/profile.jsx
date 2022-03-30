import React, { Component, useEffect, useState } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect, useDispatch } from "react-redux";
import { Button, Input, FormLabel, Paper, makeStyles, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addCard, removeFlag } from "../../actions";
import PropTypes from 'prop-types';


export class Profile extends Component {

  addCard = (event) => {
    event.preventDefault()
    const { cardName, cardNumber, expiryDate, cvc } = event.target;
    this.props.addCard(cardName.value, cardNumber.value, expiryDate.value, cvc.value)

  }

  componentWillUnmount() {
    this.props.removeFlag()
  }


  render() {
    console.log(this.props.card)


    return (
      <>
        {!this.props.cardAdded ? (
          <div className="container">
            <HeaderWithLinks navigate={this.props.navigate} unauthorize={this.props.unauthorize} />
            <div className="profile__wrapper">
              <Paper elevation={3} className="profile__paper">
                <h1 className="profile__title">Профиль</h1>
                <div className="profile__subtitle">Введите платежные данные</div>
                <form onSubmit={this.addCard} className="profile__container">
                  <div className="profile__form">
                    <div className="profile__form-left">
                      <FormLabel className="form__label" htmlFor="cardName">Имя владельца</FormLabel>
                      <Input className="form__input" id="cardName" name="cardName" size="16" />
                      <FormLabel className="form__label" htmlFor="cardNumber">Номер карты</FormLabel>
                      <Input className="form__input" id="cardNumber" name="cardNumber" size="16" />
                      <FormLabel className="form__label" htmlFor="expiryDate">MM/YY</FormLabel>
                      <Input className="form__input" id="expiryDate" name="expiryDate" size="16" />
                      <FormLabel className="form__label" htmlFor="cvc">CVC</FormLabel>
                      <Input className="form__input" id="cvc" name="cvc" size="16" />
                    </div>
                    <div className="profile__form-right">
                      <Paper elevation={3} className="profile__right-paper">
                        <FormLabel className="form__label" htmlFor="cardNumber">Номер карты</FormLabel>
                        <FormLabel className="form__label" htmlFor="expiryDate">MM/YY</FormLabel>
                      </Paper>
                    </div>
                  </div>
                  <Button variant="contained" color="primary" type="submit">Сохранить</Button>
                </form>
              </Paper>
            </div>
          </div>

        ) : (
          <div className="profile__wrapper">
            <Paper elevation={3} className="profile__paper modal">
              <h1 className="profile__title">Профиль</h1>
              <div className="paymentUpdated">
                <h5 className="profile__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</h5>
              </div>
              <Link to="/map"><Button variant="contained" color="primary">Перейти на карту</Button></Link>
            </Paper>
          </div>
        )}
      </>

    );
  }

}

Profile.propTypes = {
  addCard: PropTypes.func,
  cardAdded: PropTypes.bool,
};

export const ProfileWithAuth = connect(
  state => ({ card: state.card, cardAdded: state.card.cardAdded }),
  { addCard, removeFlag }
)(Profile)