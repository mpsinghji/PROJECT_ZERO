import { useState } from "react";
import axios from "axios";
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminSignInStyles";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError(null);
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/admin/dashboard"); 
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage); 
    }
  };

  return (
    <>
      <GlobalStyle />
      <AdminSignInContainer>
        <h2>Admin Sign In</h2>
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
          <SubmitButton onClick={handleLogin}>Sign In</SubmitButton>
        </FormContainer>
        {error && <p style={{ color: "Black" }}>{error}</p>} 
      </AdminSignInContainer>
    </>
  );
};

export default AdminSignIn;