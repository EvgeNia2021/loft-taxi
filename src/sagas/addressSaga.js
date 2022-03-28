
import {  put, call, takeEvery } from "redux-saga/effects";
import { addressList } from "../api";
import {
  fetchListRequest,
  fetchListSuccess
} from "../actions";
export function* addressSaga() {
          const result = yield call(addressList);
          yield put(fetchListSuccess(result.addresses));
  
}

export function* addressListSaga() {
  yield takeEvery(fetchListRequest, addressSaga);
}
