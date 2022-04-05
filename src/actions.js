import { createAction } from "redux-actions";


export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHORIZE = "AUTHORIZE"
export const ADD_CARD = "ADD_CARD"
export const CARD_TO_STORE = "CARD_TO_STORE"
export const REMOVE_FLAG = "REMOVE_FLAG"
export const FETCH_ROUTE = "FETCH_ROUTE";
export const SET_ROUTE = "SET_ROUTE";
export const REGISTRATE = "REGISTRATE";
export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";

export const logIn = (token) => ({ type: LOG_IN, payload: token })
export const logOut = () => ({ type: LOG_OUT })
export const authorize = (email, password) => ({
  type: AUTHORIZE, payload: { email, password },
})
export const registrate = (email, name, surname, password) => ({
  type: REGISTRATE, payload: { email, name, surname, password },
});

export const addCard = (cardName, cardNumber, expiryDate, cvc, token) => ({
  type: ADD_CARD, payload: { cardName, cardNumber, expiryDate, cvc, token },
})
export const cardToStore = data => ({ type: CARD_TO_STORE, payload: data })
export const getCardRequest = token => ({ type: GET_CARD_REQUEST, payload: token})
export const getCardSuccess = (data) => ({ type: GET_CARD_SUCCESS, payload: data})

export const removeFlag = () => ({ type: REMOVE_FLAG })
export const fetchRoute = (address1, address2) => ({ type: FETCH_ROUTE, payload: { address1, address2 } });
export const setRoute = (route) => ({ type: SET_ROUTE, payload:  route  });



export const fetchListRequest = createAction("FETCH_LIST_REQUEST");
export const fetchListSuccess = createAction("FETCH_LIST_SUCCESS");

