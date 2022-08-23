import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Auth/Admin/Admin";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Blog from "./Body/Blog/Blog";
import Home from "./Body/Home/Home";
import Notice from "./Body/Notice/Notice";
import Profile from "./Body/Profile/Profile";
import Request from "./Body/Request/Request";
import Support from "./Body/Support/Support";
import Navbar from "./Navbar/Navbar";
import PrivateRoute from "./Auth/ProtectedRoutes";
import PrivateRouteAdmin from "./Auth/ProtectedRoutesAdmin";

const Mid = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/request"
          element={
            <PrivateRoute>
              <Request />
            </PrivateRoute>
          }
        />
        <Route
          path="/support"
          element={
            <PrivateRoute>
              <Support />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/notice"
          element={
            <PrivateRoute>
              <Notice />
            </PrivateRoute>
          }
        />
        {/* Admin */}
        <Route path="/adminlogin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Mid;
