import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="login" replace />;

  if (requiredRole && user.role !== requiredRole) {
    return <h2>⛔ Unauthorized - Access Denied</h2>;
  }

  return children;
};

export default PrivateRoute;
