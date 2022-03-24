import { combineReducers } from "redux";
import auth from "./auth"
import storeCard from "./storeCard";

export default combineReducers({ auth, storeCard })