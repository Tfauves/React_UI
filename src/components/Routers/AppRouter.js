import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/Navbar";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
