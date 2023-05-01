import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_FAIL } from "../redux/constant";
export const loginUser = (data: any) => {
  return {
    type: LOGIN_USER,
    data: data,
  };
};
export const loginSuccess = (response: any) => {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};

export const loginFail = (error: any) => {
  return {
    type: LOGIN_FAIL,
    error,
  };
};
