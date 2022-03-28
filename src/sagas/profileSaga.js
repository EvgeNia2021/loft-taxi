import { takeEvery, call, put, select, take } from "redux-saga/effects"
import { addCard } from '../api'
import { ADD_CARD, cardToStore } from "../actions";



function* cardSaga(action) {

  const result = yield call(addCard, { ...action.payload });
  if (result.success) {
    yield put(cardToStore(action.payload))

  }
}
export function* profileSaga() {
  yield takeEvery(ADD_CARD, cardSaga);
}

