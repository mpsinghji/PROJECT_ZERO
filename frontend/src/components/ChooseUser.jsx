import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChooseUserContainer, UserSection, Title, Button, InputField, Select } from "../styles/ChooseUserStyles";
import { createGlobalStyle } from "styled-components";
import { useAuth } from "../context/authContext.jsx";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", sans-serif;
    background: #ecf0f1; /* Fallback color */
    overflow: hidden; /* Prevent scrolling */
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
  const [role, setRole] = useState("admin"); // Default role is Admin
  const { setIsAuthenticated } = useAuth(); // Get the authentication state and setter function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roleUrls = {
      admin: "http://localhost:5000/api/admin/login",
      student: "http://localhost:5000/api/student/login",
      teacher: "http://localhost:5000/api/teacher/login",
    };

    try {
      const response = await axios.post(roleUrls[role], {
        email,
        password,
      });

      console.log(response); // Log the full response

      // Check if token exists in response
      const token = response.data?.token;

      if (!token) {
        throw new Error("Token not found in response");
      }

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Mark the user as authenticated
      setIsAuthenticated(true);

      // Redirect based on role
      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "student") navigate("/student/dashboard");
      else if (role === "teacher") navigate("/teacher/dashboard");

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <ChooseUserContainer>
        <div className="overlay"></div>
        <Title>Login</Title>
        <UserSection>
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
            <div>
              <label>Role:</label>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </Select>
            </div>
            <Button as="button" type="submit">Login</Button>
          </form>
        </UserSection>
      </ChooseUserContainer>
    </>
  );
};

export default ChooseUser;
