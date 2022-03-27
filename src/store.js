import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"
// import { authMiddleware } from "./authMiddleware";
import { addCardMiddleware} from "./addCardMiddleware"
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./sagas/authSaga"
import { profileSaga } from "./sagas/profileSaga"

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, addCardMiddleware))

sagaMiddleware.run(authSaga, profileSaga)
