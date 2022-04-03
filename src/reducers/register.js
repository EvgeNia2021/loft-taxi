
import { LOG_IN } from "../actions"


const initialState = {
  isLoggedIn: false,
  token: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        isLoggedIn: true,
        token: action.payload
      }
    }
    default:
      return state;
  }
}


