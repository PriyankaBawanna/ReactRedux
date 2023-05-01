import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { addToCart } from "./redux/action";

import { list } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { AnyArray } from "mongoose";
import React from "react";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import Home from "./routes/routes";
function App() {
  const [count, setCount] = useState(0);
  const dispacth = useDispatch();
  let dataList = useSelector((state: any) => state.cartData);
  console.log("Data in Main Componet ", dataList);

  return (
    <>
      {/* <Registration />
      <Login />
      <button onClick={() => dispacth(list())}>Call Product List</button> */}
      <Home />
    </>
  );
}

export default App;
