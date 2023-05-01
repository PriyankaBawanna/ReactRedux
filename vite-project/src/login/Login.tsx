import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./action.login";
import { LOGIN_SUCCESS } from "../redux/constant";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common components/Input";
import "./login.css";

const Login = () => {
  const [fromErrors, setFormsErrors] = useState({});
  const [inputDataNewUser, setInputDataNewUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loginResponse = useSelector((state: any) => state.loginUserReducer);
  console.log("loginResponse", loginResponse.type);
  const loginDetails = {
    email: inputDataNewUser.email,
    password: inputDataNewUser.password,
  };
  const handleUserChange = (event: any) => {
    const updatedForm = { ...inputDataNewUser };
    updatedForm[event.target.name] = event.target.value;
    setInputDataNewUser(updatedForm);
    setFormsErrors(validationUserData(updatedForm));
    console.log("Input", inputDataNewUser);
  };
  const handleUserLogin = () => {
    dispatch(loginUser(loginDetails));

    if (loginResponse.type === LOGIN_SUCCESS) {
      alert("welcome");
      navigate("/homePage");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <h5>Login</h5>
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
          type="Password"
          placeholder="Password"
          name="password"
          value={inputDataNewUser.password}
          onChange={handleUserChange}
        />
        <span>{fromErrors.password}</span>
      </div>
      <button onClick={handleUserLogin}>Login</button>
      <Link to={"/registration"}>Registration</Link>
    </div>
  );
};
export default Login;
