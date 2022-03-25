import { combineReducers } from "redux";
import auth from "./auth"
import { cardReducer } from "./card";

export default combineReducers({ auth, card: cardReducer })