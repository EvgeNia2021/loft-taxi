import { call, put, takeEvery } from 'redux-saga/effects';
import { logIn, REGISTRATE  } from '../actions';
import { reg } from '../api';

export function* regSaga(action) {
  const  data  = action.payload;
    const register = yield call(reg, data);
    if (register.success) {
      yield put(logIn(register.token));
    } 
  }
export function* registrationSaga() {
  yield takeEvery(REGISTRATE, regSaga);
}

