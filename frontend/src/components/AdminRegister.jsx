import { useState } from "react";
import {
  RegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
  PageWrapper,
  ContentWrapper,
} from "../styles/RegisterStyles";
import Sidebar from "../pages/Admin/Sidebar";
import { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "../../../backend/utils/message";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;


const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      role: "admin",
    };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        if (response.status === 409 || message.userExists) {
          toast.error("Admin already exists in the database.");
        } else {
          toast.error("An error occurred during registration.");
        }
      } else {
        toast.success("Admin successfully registered!");
      }
    } catch (error) {
      toast.error('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <GlobalStyle />
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <RegisterContainer>
          <h2>Register as Admin</h2>
          <FormContainer onSubmit={handleRegister}>
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
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </SubmitButton>
          </FormContainer>
        </RegisterContainer>
      </ContentWrapper>
    </PageWrapper>
    <ToastContainer/>
    </>
  );
};

export default AdminRegister;
