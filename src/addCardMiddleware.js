import { ADD_CARD, token } from "./actions";
import { addCard } from './api'

export const addCardMiddleware = (store) => (next) => async (action) => {
  if (action.type === ADD_CARD) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
    const success = await addCard(action.payload)
    if (success) {
      store.dispatch(addCard())
      store.dispatch(token())
    }
  } 
    next(action)
};

