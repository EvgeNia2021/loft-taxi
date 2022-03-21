import { LOG_IN, LOG_OUT, AUTH_TOKEN } from "../actions"

const initialState = {
  isLoggedIn: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        isLoggedIn: true,
        token: AUTH_TOKEN
      }
    }
    case LOG_OUT: {
      return {
        isLoggedIn: false

      }
    }
    default:
      return state
  }
}