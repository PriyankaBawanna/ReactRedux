import { USER_DETAILS } from "../redux/constant";

export const getUserDetailsReducer = (data = [], action: any) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        data: action.data,
      };
  }
};
