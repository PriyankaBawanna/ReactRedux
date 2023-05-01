import {
  regEx,
  noRegEx,
  regExLowerCase,
  regExUpperCase,
  regSymbol,
} from "../redux/constant";
export const validationUserData = (values: any) => {
  const errors = {};

  if (!values.name) {
    errors.name = "user name is required ";
  } else if (values.name.length < 3) {
    errors.name = "please enter valid name  ";
  }

  if (!values.email) {
    errors.email = "Email is required ";
  }
  if (!values.password) {
    errors.password = "password    is required ";
  }

  if (!values.mobile) {
    errors.mobile = "Contact Number is required ";
  }
  return errors;
};
