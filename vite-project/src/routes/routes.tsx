import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "../login/Login";
import HomePage from "../home/HomePage";
import { routesPath } from "../redux/constant";
import Protected from "./Protected";
import Registration from "../registration/Registration";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route
            path={"/homePage"}
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />

          <Route path="*" element={<>Error</>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
