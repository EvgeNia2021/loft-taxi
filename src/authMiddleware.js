import { AUTHORIZE, logIn } from "./actions";
import { serverLogIn } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHORIZE) {
    const { email, password } = action.payload;
    const success = await serverLogIn(email, password)
    if (success) {
      store.dispatch(logIn())
    }
  }
  next(action)
};
