import { combineReducers } from "redux";
import auth from "./auth"
import { cardReducer } from "./card";
import { addressList } from "./addressList";

export default combineReducers({ auth, card: cardReducer, addressList: addressList  })

