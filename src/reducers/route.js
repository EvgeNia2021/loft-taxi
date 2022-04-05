import {
  SET_ROUTE
} from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_ROUTE: {
      return {coordinates: action.payload};
    }
    default:
      return state;
  }
}

