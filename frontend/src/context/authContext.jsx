import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading/loading";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // const adminToken = localStorage.getItem("admintoken");
  // const studentToken = localStorage.getItem("studenttoken");
  // const teacherToken = localStorage.getItem("teachertoken");
    const adminToken = Cookies.get("admintoken");
    const studentToken = Cookies.get("studenttoken");
    const teacherToken = Cookies.get("teachertoken");

    if (adminToken) {
        setIsAuthenticated(true);
        setUserRole('admin');
    } else if (studentToken) {
        setIsAuthenticated(true);
        setUserRole('student');
    } else if (teacherToken) {
        setIsAuthenticated(true);
        setUserRole('teacher');
    } else {
        setIsAuthenticated(false);
        setUserRole(null);
    }
    setLoading(false);
}, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, setIsAuthenticated, setUserRole }}>
        {children}
    </AuthContext.Provider>
);
};
