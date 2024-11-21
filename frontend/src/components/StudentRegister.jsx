import { useState } from "react";
import {
  RegisterContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/RegisterStyles";
import Sidebar from "../pages/Admin/Sidebar";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex: 1; /* Take the remaining width */
  padding: 20px;
  background-color: #f7f9fc; /* Light background color */
  min-height: 100vh; /* Ensure it matches sidebar height */
`;

const StudentRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollno, setRollno] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      role: "student",
      rollno,
      mobileno,
    };

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setSuccessMessage('Student successfully registered!');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Sidebar /> 
      <ContentWrapper>
        <RegisterContainer>
          <h2>Register Student</h2>
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
            <InputField
              type="text"
              placeholder="Roll Number"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              required
            />
            <InputField
              type="text"
              placeholder="Mobile Number"
              value={mobileno}
              onChange={(e) => setMobileno(e.target.value)}
              required
            />
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </SubmitButton>
          </FormContainer>

          {(successMessage || errorMessage) && (
            <div className={`message ${successMessage ? "success" : "error"}`}>
              {successMessage || errorMessage}
            </div>
          )}
        </RegisterContainer>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StudentRegister;
