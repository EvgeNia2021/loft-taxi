import { ADD_CARD, cardToStore } from "./actions";
import { addCard } from './api'

export const addCardMiddleware = (store) => (next) => async (action) => {
  
  if (action.type === ADD_CARD) {
    const { auth: { token } } = store.getState()
    const result = await addCard({ ...action.payload, token })
    if (result.success) {
      store.dispatch(cardToStore(action.payload))
  } 
}
    next(action)
};

