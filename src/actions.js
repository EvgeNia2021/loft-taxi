export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHORIZE = "AUTHORIZE"
export const ADD_CARD = "ADD_CARD"
export const CARD_TO_STORE = "CARD_TO_STORE"
export const FETCH_ADDRESS_LIST = "FETCH_ADDRESS_LIST"

export const logIn = token => ({ type: LOG_IN, payload: token })
export const logOut = () => ({ type: LOG_OUT })
export const authorize = (email, password) => ({
  type: AUTHORIZE, payload: { email, password },
})
export const addCard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: ADD_CARD, payload: { cardNumber, expiryDate, cardName, cvc},
})
export const cardToStore = data => ({ type: CARD_TO_STORE, payload: data })
