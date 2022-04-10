import { takeEvery, call, put } from "redux-saga/effects"
import { serverLogIn } from "../api"
import { AUTHORIZE, logIn, authFailure } from "../actions"

export function* authorizeSaga(action) {
  try {
  const data = action.payload;
  const result = yield call(serverLogIn, data)
  if (result.success) {
    yield put(logIn(result.token))
  } else if (result.error) {
    yield put(authFailure());
  }
} catch (e) {
  console.log("error");
}
}

export function* authSaga() {
  yield takeEvery(AUTHORIZE, authorizeSaga);
}
