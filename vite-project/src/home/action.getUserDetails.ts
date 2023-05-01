import { USER_DETAILS } from "../redux/constant";
export const getUser = (data: any) => {
  return {
    type: USER_DETAILS,
    data,
  };
};
