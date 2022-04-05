import { takeEvery, call, put } from "redux-saga/effects"
import { addCard, loadCardData } from '../api'
import { ADD_CARD, cardToStore, getCardSuccess, GET_CARD_REQUEST } from "../actions";

function* getCardSaga(action) {
  const response = yield call(loadCardData, action.payload);
  if (response) {
    yield put(getCardSuccess(response))

  }
}

function* cardSaga(action) {
  const result = yield call(addCard, { ...action.payload});
  if (result.success) {
    yield put(cardToStore(action.payload))

  }
}
export function* profileSaga() {
  yield takeEvery(GET_CARD_REQUEST, getCardSaga);
  yield takeEvery(ADD_CARD, cardSaga);
 
}

