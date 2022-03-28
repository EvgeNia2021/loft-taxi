import { fork } from "redux-saga/effects";
import { authSaga } from "./authSaga"
import { profileSaga } from "./profileSaga";
import { addressListSaga } from "./addressSaga"


export function* rootSaga() {
  yield fork(authSaga);
  yield fork(profileSaga);
  yield fork(addressListSaga);
}
