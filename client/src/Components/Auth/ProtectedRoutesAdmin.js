import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  var isAuth;
  if (localStorage.getItem("admintoken")) {
    isAuth = true;
  } else {
    isAuth = false;
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
