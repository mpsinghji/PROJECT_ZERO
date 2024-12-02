import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    // Optionally render a loader or return null until auth state is determined
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/choose-user" />;
  }

  return children;
};

export default ProtectedRoute;
