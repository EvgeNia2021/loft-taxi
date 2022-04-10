import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, REGISTRATE, authFailure } from '../actions';
import { reg } from '../api';

export function* regSaga(action) {
  try {
  const data = action.payload;
  const register = yield call(reg, data);
  if (register.success) {
    yield put(logIn(register.token));
  } else if (register.error) yield put(authFailure());
} catch (e) {
  console.log("error");
}
}
export function* registrationSaga() {
  yield takeEvery(REGISTRATE, regSaga);
}

