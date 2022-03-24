import React, { Component } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect } from "react-redux";
import { Button, Input, FormLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addCard } from "../../actions";
import PropTypes from 'prop-types';

export class Profile extends Component {
  addCard= (event) => {
    event.preventDefault()
    const { cardName, cardNumber, expiryDate, cvc  } = event.target;
    this.props.addCard(cardName.value, cardNumber.value, expiryDate.value, cvc.value)
  }

  render() {
    return (
      <>
        <HeaderWithLinks navigate={this.props.navigate} unauthorize={this.props.unauthorize} />
        <h1 className="login__title">Профиль</h1>
        <div className="payment">
        <form onSubmit={this.addCard}>
              <h5 className="login__title">Введите платежные данные</h5>
              <FormLabel htmlFor="cardName">Имя владельца</FormLabel>
              <Input id="cardName" name="cardName" size="16" />
              <FormLabel htmlFor="cardNumber">Номер карты</FormLabel>
              <Input id="cardNumber" name="cardNumber" size="16" />
              <FormLabel htmlFor="expiryDate">MM/YY</FormLabel>
              <Input id="expiryDate" name="expiryDate" size="16" />
              <FormLabel htmlFor="cvc">CVC</FormLabel>
              <Input id="cvc" name="cvc" size="16" />
              <Button  type="submit">Сохранить</Button>
            </form>
           
            </div>
            <div className="paymentUpdated">
            <h5 className="login__title">Платёжные данные обновлены. Теперь вы можете заказывать такси.</h5>
            <Link to="/map"><Button>Перейти на карту</Button></Link>
            </div>
      </>
    );
  }
}

Profile.propTypes = {
  addCard: PropTypes.func
};

export const ProfileWithAuth = connect(
  null,
  { addCard }
)(Profile)