import { takeEvery, call, put, select } from "redux-saga/effects"
import { addCard } from '../api'
import { ADD_CARD, cardToStore } from "../actions";

const getToken = state => state.auth
export function* cardSaga(action) {
  const token = yield select(getToken)
  const result = yield call({ addCard, ...action.payload, token })
  if (result.success) {
    yield put(cardToStore(action.payload))
  }
}

export function* profileSaga() {
  yield takeEvery(ADD_CARD, cardSaga);
}