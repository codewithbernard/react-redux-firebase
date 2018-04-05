import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";

export default combineReducers({
  data,
  auth
});
