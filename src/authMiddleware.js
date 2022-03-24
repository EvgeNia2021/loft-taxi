import { AUTHORIZE, logIn, token } from "./actions";
import { serverLogIn } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHORIZE) {
    const { email, password } = action.payload;
    const result = await serverLogIn(action.payload)

if (result.success) {
store.dispatch(logIn(result.token))
}
  } 
    next(action)
};

