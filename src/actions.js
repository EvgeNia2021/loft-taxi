import { createAction } from "redux-actions";


export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHORIZE = "AUTHORIZE"
export const ADD_CARD = "ADD_CARD"
export const CARD_TO_STORE = "CARD_TO_STORE"
export const REMOVE_FLAG = "REMOVE_FLAG"
export const FETCH_ROUTE = 'FETCH_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';
export const DELETE_ROUTE = 'REMOVE_ROUTE';

export const logIn = token => ({ type: LOG_IN, payload: token })
export const logOut = () => ({ type: LOG_OUT })
export const authorize = (email, password) => ({
  type: AUTHORIZE, payload: { email, password },
})
export const addCard = (cardNumber, expiryDate, cardName, cvc) => ({
  type: ADD_CARD, payload: { cardNumber, expiryDate, cardName, cvc },
})
export const cardToStore = data => ({ type: CARD_TO_STORE, payload: data })
export const removeFlag = () => ({ type: REMOVE_FLAG })
export const fetchRoute = (address1, address2) => ({ type: FETCH_ROUTE, payload: { address1, address2 },
});
export const setRoute = (route) => ({ type: SET_ROUTE, payload: { route } });
export const deleteRoute = () => ({ type: DELETE_ROUTE });


export const fetchListRequest = createAction("FETCH_LIST_REQUEST");
export const fetchListSuccess = createAction("FETCH_LIST_SUCCESS");
