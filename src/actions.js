export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHORIZE = "AUTHORIZE"
export const AUTH_TOKEN = "AUTH_TOKEN"
export const ADD_CARD = "ADD_CARD"

export const logIn = () => ({ type: LOG_IN })
export const logOut = () => ({ type: LOG_OUT })
export const authorize = (email, password) => ({
  type: AUTHORIZE, payload: { email, password },
})
export const addCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: ADD_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token },
})
export const token = () => ({type: AUTH_TOKEN})