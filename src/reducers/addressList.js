import { handleActions } from "redux-actions";
import {
  fetchListSuccess
} from "../actions";

export const addressList = handleActions(
  {
    [fetchListSuccess]: (_state, action) => action.payload
  },
  []
);



