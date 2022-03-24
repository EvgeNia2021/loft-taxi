import { ADD_CARD, token, cardToStore } from "./actions";
import { addCard } from './api'

export const addCardMiddleware = (store) => (next) => async (action) => {
  
  if (action.type === ADD_CARD) {
    const { auth: { token } } = store.getState()
    const { cardNumber, expiryDate, cardName, cvc } = action.payload;
    const result = await addCard({ ...action.payload, token })
    console.log(result)
    if (result) {
      store.dispatch(cardToStore())
      console.log()
  } 
}
    next(action)
};

