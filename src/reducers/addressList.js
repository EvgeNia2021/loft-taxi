import { FETCH_ADDRESS_LIST } from "../actions"

const initialState = {
  addressLIst: null
}

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_LIST: {
      return { ...action.payload }
    }
    default:
      return state
  }
}