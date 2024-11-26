import React, { useState } from "react";
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/teacher/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      navigate("/teacher/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid credentials or email not registered"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <TeacherSignInContainer>
        <h2>Teacher Sign In</h2>
        <FormContainer>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton onClick={handleLogin} disabled={loading}>
            {loading ? "Processing..." : "Sign In"}
          </SubmitButton>
        </FormContainer>
        {error && <p style={{ color: "Black" }}>{error}</p>}
      </TeacherSignInContainer>
    </>
  );
};

export default TeacherSignIn;
