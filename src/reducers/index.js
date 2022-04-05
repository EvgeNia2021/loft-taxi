import { combineReducers } from "redux";
import auth from "./auth"
import { cardReducer } from "./card";
import { addressList } from "./addressList";
import route from "./route";
import register from "./register";

export default combineReducers({ auth, card: cardReducer, addressList: addressList, route, register })

