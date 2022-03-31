import { fork } from "redux-saga/effects";
import { authSaga } from "./authSaga"
import { profileSaga } from "./profileSaga";
import { addressListSaga } from "./addressSaga"
import { routesSaga } from "./routeSaga"


export function* rootSaga() {
  yield fork(authSaga);
  yield fork(profileSaga);
  yield fork(addressListSaga);
  yield fork(routesSaga);
}
