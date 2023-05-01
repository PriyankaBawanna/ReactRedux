import { LOGIN_USER } from "../redux/constant";
import { takeEvery, put } from "redux-saga/effects";
import { login } from "../redux/constant";
import { getRequest } from "../service/http";
import { loginSuccess, loginFail } from "./action.login";
import { response } from "express";
function* checkLoginUser({ ...loginDetails }) {
  const body = {
    email: loginDetails.data.email,
    password: loginDetails.data.password,
  };
  try {
    const response = yield getRequest(login, body);
    if (response == true) {
      yield put(loginSuccess(response));
    } else {
      alert(response.message);
      yield put(loginFail(response));
    }
  } catch {}
}
function* loginUser() {
  yield takeEvery(LOGIN_USER, checkLoginUser);
}
export default loginUser;
