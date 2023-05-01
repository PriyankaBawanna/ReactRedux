import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_USER } from "../redux/constant";
export const loginUserReducer = (data = [], action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.data;

    case LOGIN_SUCCESS:
      return {
        type: action.type,
        data,
      };

    case LOGIN_FAIL:
      return action.type;
    default:
      return false;
  }
};
