import { takeEvery, call, put } from "redux-saga/effects"
import {serverLogIn} from "../api"
import { AUTHORIZE, logIn } from "../actions"

export function* authorizeSaga(action) {
  const  data  = action.payload;
  const result = yield call(serverLogIn, data)
  if(result.success) {
    yield put(logIn())
  }
}

export function* authSaga() {
  yield takeEvery(AUTHORIZE, authorizeSaga);
}

// export default function* rootSaga() {
//   yield all([
//   fork(authSaga),
//   fork(profileSaga)
//   ]);
//   }