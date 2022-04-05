import React, { Component, useEffect, useState } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect, useDispatch } from "react-redux";
import { Button, Input, FormLabel, Paper, makeStyles, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addCard, removeFlag } from "../../actions";
import PropTypes from 'prop-types';
import { ProfileForm } from "./profileForm"


const Profile = ({ cardAdded, addCard, navigate, unauthorize, removeFlag, card}) => {
  useEffect(() => {
      removeFlag();
}, [])


  

  // addCard = (event) => {
  //   event.preventDefault()
  //   const { cardName, cardNumber, expiryDate, cvc } = event.target;
  //   this.props.addCard(cardName.value, cardNumber.value, expiryDate.value, cvc.value, token)

  // }

  

  // render() {
    console.log(card)


    return (
      <>
        {!cardAdded ? (
          <div className="container">
            <HeaderWithLinks navigate={navigate} unauthorize={unauthorize} />
            <div className="profile__wrapper">
              <Paper elevation={3} className="profile__paper">
                <h1 className="profile__title">Профиль</h1>
                <div className="profile__subtitle">Введите платежные данные</div>
                <ProfileForm  addCard={addCard} />
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

// }
// Profile.propTypes = {
//   addCard: PropTypes.func,
//   cardAdded: PropTypes.bool,
//   loadProfile: PropTypes.array,
//   token: PropTypes.string,
// };

const mapStateToProps = (state) => ({ token: state.auth.token, card: state.card, cardAdded: state.card.cardAdded });
export default connect(mapStateToProps,
  { addCard, removeFlag }
)(Profile)