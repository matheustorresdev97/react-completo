import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../user-context";
import { useContext } from "react";

export function ProtectedRoute(props) {
  const { login } = useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
}
