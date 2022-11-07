import React from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../auth/firebase";
import Login from "../pages/Login";

const PrivateRouter = () => {
  return <div>{auth.currentUser ? <Outlet /> : <Login />}</div>;
};

export default PrivateRouter;
