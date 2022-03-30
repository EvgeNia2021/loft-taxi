import { takeLatest, put, call, fork } from "redux-saga/effects";
import { route } from "./api.js";
import { fetchRouteRequest, fetchRouteSuccess } from "./actions";

// function* routeWatcher() {
//   yield takeLatest(fetchRouteRequest.toString(), routeFlow);
// }

export function* routeFlow(action) {
    const [addressFrom, addressTo] = action.payload;
    const payload = yield call(route, addressFrom, addressTo);
    yield put(fetchRouteSuccess(payload));
}

export default function*() {
  yield fork(routeWatcher);
}
