import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/StudentSignInStyles";

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      navigate("/student/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid credentials or email not registered"
      );
    }
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
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
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
