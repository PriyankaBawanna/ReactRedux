import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../redux/constant";
function Protected({ children }) {
  let loginResponse = useSelector((state: any) => state.loginUserReducer);
  console.log("loginResponse user route", loginResponse.type);
  if (loginResponse.type === LOGIN_SUCCESS) {
    return children;
  }
  if (loginResponse.type === LOGIN_FAIL) {
    return <>Error page</>;
  }
}
export default Protected;
