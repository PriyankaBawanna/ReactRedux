import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { addNewUser } from "../registration/reducer.registration";
import { loginUserReducer } from "../login/reducer.login";
export default combineReducers({
  cartData,
  addNewUser,
  loginUserReducer,
});
