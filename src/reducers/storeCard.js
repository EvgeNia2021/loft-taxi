import { CARD_TO_STORE } from "../actions"

const initialState = {
  storage: []
}

export default function (state = initialState.storage, action) {
  switch (action.type) {
    case CARD_TO_STORE: {
      return [...state, action.payload]
    }
    default:
      return state
  }
}

