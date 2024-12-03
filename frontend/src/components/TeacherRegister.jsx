import { useState } from "react";
import {
  RegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/RegisterStyles";
import Sidebar from "../pages/Admin/Sidebar";
import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "../../../backend/utils/message";

const ScrollLockStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeacherRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      role: "teacher", 
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
          toast.error("Teacher already exists in the database.");
        }else{
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        toast.success("Teacher successfully registered!");
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <ScrollLockStyle/>
    <PageWrapper>
      <Sidebar />
      <ContentWrapper>
        <RegisterContainer>
          <h2>Register as Teacher</h2>
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

export default TeacherRegister;
