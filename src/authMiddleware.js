import { AUTHORIZE, logIn, token } from "./actions";
import { serverLogIn } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHORIZE) {
    const { email, password } = action.payload;
    const success = await serverLogIn(action.payload)
    if (success) {
      store.dispatch(logIn())
      store.dispatch(token())
    }
  } 
    next(action)
};

