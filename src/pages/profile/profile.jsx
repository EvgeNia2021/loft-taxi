import React, { Component } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect, useDispatch } from "react-redux";
import { Button, Input, FormLabel, Paper, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addCard } from "../../actions";
import PropTypes from 'prop-types';


export class Profile extends Component {
  
  addCard = (event) => {
    event.preventDefault()
    const { cardName, cardNumber, expiryDate, cvc } = event.target;
    this.props.addCard(cardName.value, cardNumber.value, expiryDate.value, cvc.value)
    
  }

  

  render() {
    console.log(this.props.card)
    return (
      <>
        {!this.props.cardAdded ? (
          <div className="container">
            <HeaderWithLinks navigate={this.props.navigate} unauthorize={this.props.unauthorize} />
            <div className="profile__form">
              <Paper elevation={3} className="profile__paper">
                <h1 className="login__title">Профиль</h1>
                <div className="payment">
                  <form onSubmit={this.addCard} className="profile__col">
                    <h5 className="login__title">Введите платежные данные</h5>
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
                    <Paper elevation={3} className="profile__form-right"></Paper>
                    <Button type="submit">Сохранить</Button>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        ) : (
<Paper>
          <div className="paymentUpdated">
            <h5 className="login__title">Платёжные данные обновлены. Теперь вы можете заказывать такси.</h5>
            <Link to="/map"><Button>Перейти на карту</Button></Link>
          </div>
          </Paper>
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
  { addCard }
)(Profile)