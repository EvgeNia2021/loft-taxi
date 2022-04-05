import React, { useEffect, } from "react";
import { HeaderWithLinks } from "../../components/header/header";
import { connect, } from "react-redux";
import { Button, Paper, } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addCard, removeFlag } from "../../actions";
import { ProfileForm } from "./profileForm"


const Profile = ({ cardAdded, addCard, navigate, unauthorize, removeFlag, card }) => {
  useEffect(() => {
    removeFlag();
  }, [])


  return (
    <>
      {!cardAdded ? (
        <div className="container">
          <HeaderWithLinks navigate={navigate} unauthorize={unauthorize} />
          <div className="profile__wrapper" data-testid="profileWrapper">
            <Paper elevation={3} className="profile__paper">
              <h1 className="profile__title">Профиль</h1>
              <div className="profile__subtitle">Введите платежные данные</div>
              <ProfileForm addCard={addCard} />
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


const mapStateToProps = (state) => ({ token: state.auth.token, card: state.card, cardAdded: state.card.cardAdded });
export default connect(mapStateToProps,
  { addCard, removeFlag }
)(Profile)