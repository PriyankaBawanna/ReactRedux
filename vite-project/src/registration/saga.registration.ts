import { takeEvery, put } from "redux-saga/effects";
import { register } from "../redux/constant";
import axios from "axios";
import { ADD_USER } from "../redux/constant";
import { getRegister } from "../service/http";
import { response } from "express";
function* setNewUser({ ...userData }) {
  const body = {
    name: userData.userData.name,
    email: userData.userData.email,
    mobile: userData.userData.mobile,
    password: userData.userData.password,
  };

  try {
    const response = yield getRegister(register, body);
  } catch {
    alert("Error");
  }
}
function* newUserRegistration() {
  yield takeEvery(ADD_USER, setNewUser);
}
export default newUserRegistration;
