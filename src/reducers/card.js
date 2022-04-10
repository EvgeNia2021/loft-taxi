import { CARD_TO_STORE, GET_CARD_SUCCESS, REMOVE_FLAG } from "../actions"

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
      return {
        ...action.payload,
        cardAdded: true
      }
    }

    case REMOVE_FLAG: {
      return {
        cardAdded: false
      }
    }

    case GET_CARD_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}