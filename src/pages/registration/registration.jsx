import React, { Component } from "react";
import { Link } from "react-router-dom"
import {  Paper } from "@material-ui/core";
import Logo from "../../components/sideLogo/sideLogo"
import { LinkNav } from "../../components/themeConverter/themeConverter"
import { RegistrationForm } from "./registrationForm";
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { Navigate } from "react-router-dom";
import { registrate } from "../../actions";

export class Registration extends Component {
  render() {
  // const Registration = ({ isLoggedIn, registrate }) => {
    console.log(this.props.register)
    return (
      <>
       {this.props.isLoggedIn ? <Navigate to='/profile' /> : (
        <div className="login__container">
          <Logo />
          <div className="login__form">
            <Paper elevation={3} className="registration__paper">
             <RegistrationForm registrate={registrate} />
              <div className="login__new">
            <div className="subtitle">
            Уже зарегистрированы?
              </div>
              <LinkNav to="/">Войти</LinkNav>
            </div>
            </Paper>
          </div>
        </div>
          )} 
      </>
    );
  }
 } 

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default connect(
  (state) => ({ isLoggedIn: state.register.isLoggedIn, register: state.register })
)(Registration);
// const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn });
// export default connect(mapStateToProps,
//   { registrate }
// )(Registration)
