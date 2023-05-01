import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "./action.getUserDetails";
import "./homePage.css";
const HomePage = () => {
  let negivate = useNavigate();
  let loginResponse = useSelector((state: any) => state.loginUserReducer);
  const email = loginResponse.data.email;

  const handleLogOutUser = () => {
    negivate("/");
  };

  return (
    <div className="header">
      <div>Home Page </div>
      <div>
        <div>User Email :{email}</div>
        <button onClick={handleLogOutUser}>LogOut</button>
      </div>
    </div>
  );
};
export default HomePage;
