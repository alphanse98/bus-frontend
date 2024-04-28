import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Register from "../page/Register";
import BusBooking from "../page/BusBooking";
import PassangerList from "../page/PassangerList";

const AppRoute = () => {
  function AuthenticatedRoute({ children }) {
    if (localStorage.getItem("AuthToken")) {
      return children;
    }
    return <Navigate to="/" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>

        <Route path="*" element={<BusBooking />}></Route>
        <Route path="/BusBooking" element={<BusBooking />}></Route>
        <Route path="/PassangerList" element={<PassangerList />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
