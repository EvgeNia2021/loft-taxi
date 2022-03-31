import {
  SET_ROUTE, DELETE_ROUTE
} from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case SET_ROUTE: {
      return action.payload.route;
    }
    case DELETE_ROUTE: {
      return null;
    }
    default:
      return state;
  }
}

