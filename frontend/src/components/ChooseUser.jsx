import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ChooseUserContainer,
  RoleSelector,
  RoleTab,
  UserSection,
  Title,
  Button,
  InputField,
  Spinner,
  Circle,
} from "../styles/ChooseUserStyles";
import { createGlobalStyle } from "styled-components";
import { useAuth } from "../context/authContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie"; 

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", sans-serif;
    background: #ecf0f1;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;

const ChooseUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("admin");
  const { setIsAuthenticated, setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const roleUrls = {
      admin: "http://localhost:5000/api/v1/admin/login",
      student: "http://localhost:5000/api/v1/student/login",
      teacher: "http://localhost:5000/api/v1/teacher/login",
    };

    try {
      const response = await axios.post(roleUrls[role], {
        email,
        password,
      });

      console.log(response);
      const tokenKey = `${role}token`;
      const token =
        response.data?.[tokenKey] || response.data?.data?.[tokenKey];

      if (!token) {
        throw new Error("Token not found in response");
      }

      Cookies.set(tokenKey, token, { expires: 1, secure: true });
      // localStorage.setItem(tokenKey, token);
      setIsAuthenticated(true);
      setUserRole(role);
      navigate(`/${role}/dashboard`);
      // if (role === "admin") navigate("/admin/dashboard");
      // else if (role === "student") navigate("/student/dashboard");
      // else if (role === "teacher") navigate("/teacher/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const tokenKey = `${role}token`;
  // const token = localStorage.getItem(tokenKey);
  const token = Cookies.get(tokenKey);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    console.log("Selected Role:", selectedRole);
};


  return (
    <>
      <GlobalStyle />
      <ChooseUserContainer>
        <div className="overlay"></div>
        <Title>Login</Title>
        <RoleSelector>
          <RoleTab
            className={role === "admin" ? "active" : ""}
            onClick={() => handleRoleSelection("admin")}
          >
            Admin
          </RoleTab>
          <RoleTab
            className={role === "student" ? "active" : ""}
            onClick={() => handleRoleSelection("student")}
          >
            Student
          </RoleTab>
          <RoleTab
            className={role === "teacher" ? "active" : ""}
            onClick={() => handleRoleSelection("teacher")}
          >
            Teacher
          </RoleTab>
        </RoleSelector>

        <UserSection className={role}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <InputField
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <InputField
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button as="button" type="submit" disabled={loading}>
              {loading ? (
                <Spinner>
                  <Circle />
                </Spinner>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </UserSection>
      </ChooseUserContainer>
      <ToastContainer />
    </>
  );
};

export default ChooseUser;
