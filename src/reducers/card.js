import { CARD_TO_STORE, REMOVE_FLAG, ADD_CARD, loadProfile } from "../actions"

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
        cardAdded: true 
      }
    }
  
    case REMOVE_FLAG: {
      return { 
        cardAdded: false 
      }
    }

    case loadProfile: {
      return { ...action.payload
      }
    }
  
    default:
      return state
  }
}