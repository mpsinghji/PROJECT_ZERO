import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children, roles }) => {
  const { isAuthenticated, userRole } = useAuth();
  console.log("isAuthenticated:", isAuthenticated);
  console.log("userRole:", userRole);
  console.log("allowed roles:", roles);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || (roles && !roles.includes(userRole))) {
    return <Navigate to="/choose-user" />;
  }

  return children;
};

export default ProtectedRoute;
