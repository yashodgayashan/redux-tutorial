import counterReducer from "./counter";
import userReducer from "./userInfo";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  userInfo: userReducer
});

export default reducers;
