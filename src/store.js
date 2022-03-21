import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"
import { authMiddleware } from "./authMiddleware";
import { addCardMiddleware} from "./addCardMiddleware"

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, addCardMiddleware))

