import { ADD_USER } from "../redux/constant";

export const addUser = ({ ...userData }) => {
  console.log("Add user Action is called ");
  console.log("User Data ", userData);
  return {
    type: ADD_USER,
    userData,
  };
};
