import { ADD_USER } from "../redux/constant";

export const addNewUser = (data = [], action: any) => {
  switch (action.type) {
    case ADD_USER:
      console.log("Login User ", action);
      return [action.data];
    default:
      return data;
  }
};
