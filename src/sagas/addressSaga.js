import { put, call} from "redux-saga/effects";
import { addressList } from "./api.js";
import {
  FETCH_ADDRESS_LIST
} from "./actions";

function* addressListSaga() {
          const result = yield call(addressList);
          yield put(FETCH_ADDRESS_LIST(result.addresses));
  
}

export function* addressListSaga() {
  yield takeEvery(FETCH_ADDRESS_LIST, addressListSaga);
}
