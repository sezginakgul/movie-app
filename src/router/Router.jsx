import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
