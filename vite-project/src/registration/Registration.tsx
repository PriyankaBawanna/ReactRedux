import React, { useState } from "react";
import { addUser } from "./action.registration";
import { useDispatch } from "react-redux";
import Input from "../common components/Input";
import { validationUserData } from "../common components/FromValidation";
import "./registration.css";
import { Link } from "react-router-dom";
const Registration = () => {
  const dispatch = useDispatch();

  const [fromErrors, setFormsErrors] = useState({});
  const [inputDataNewUser, setInputDataNewUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [spinnerShow, setShowSpinner] = useState(false);
  const user = {
    name: inputDataNewUser.name,
    mobile: inputDataNewUser.mobile,
    email: inputDataNewUser.email,
    password: inputDataNewUser.password,
  };

  const newUserRegister = (user: object) => {
    setShowSpinner(true);
    setTimeout(() => {
      if (
        inputDataNewUser.email &&
        inputDataNewUser.password &&
        inputDataNewUser.name &&
        inputDataNewUser.mobile
      ) {
        dispatch(addUser({ ...user }));
        setShowSpinner(false);
      } else {
        alert("please complete the from ");
        setShowSpinner(false);
      }
    }, 3000);
  };

  const handleUserChange = (event: any) => {
    const updatedForm = { ...inputDataNewUser };
    updatedForm[event.target.name] = event.target.value;
    setInputDataNewUser(updatedForm);
    setFormsErrors(validationUserData(updatedForm));
    console.log("Input", inputDataNewUser);
  };
  return (
    <div className="register">
      <h6>Register</h6>
      <div>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={inputDataNewUser.name}
          onChange={handleUserChange}
        />

        <span>{fromErrors.name}</span>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={inputDataNewUser.email}
          onChange={handleUserChange}
        />

        <span>{fromErrors.email}</span>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={inputDataNewUser.mobile}
          onChange={handleUserChange}
        />
        <span>{fromErrors.mobile}</span>
      </div>
      <div>
        <Input
          type="Password"
          placeholder="Password"
          name="password"
          value={inputDataNewUser.password}
          onChange={handleUserChange}
        />
        <span>{fromErrors.password}</span>
      </div>
      {}
      <button onClick={() => newUserRegister(user)}>Register</button>
      <Link to={"/"}>Login</Link>
    </div>
  );
};
export default Registration;
