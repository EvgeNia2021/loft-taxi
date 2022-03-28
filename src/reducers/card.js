import { CARD_TO_STORE } from "../actions"

const initialState = {
  cardNumber: null,
  expiryDate: null,
  cardName: null,
  cvc: null,
  cardAdded: false
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_TO_STORE: {
      return { ...action.payload,
        cardAdded: true }
    }
    default:
      return state
  }
}

