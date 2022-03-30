import { handleActions } from "redux-actions";
import {
  fetchRouteSuccess, fetchRouteRequest, clearRoute
} from "../actions";

export const drawRoute = handleActions(
  {
    [fetchRouteRequest]: () => [],
    [fetchRouteSuccess]: (_, action) => action.payload,
    [clearRoute]: () => []
  },
  []
);
