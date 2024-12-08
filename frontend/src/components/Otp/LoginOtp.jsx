import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { LoginPageContainer, LoginBox, Heading, InputField, SubmitButton, Message } from "../../styles/LoginOtpStyles.js";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;


const LoginOtpPage = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (otp === "") {
      setMessage("Please enter the OTP.");
    } else {
      setMessage("OTP submitted successfully!");
    }
  };

  return (
    <>
      <GlobalStyle />
      <LoginPageContainer>
        <LoginBox>
          <Heading>Enter OTP</Heading>
          <InputField
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          {message && <Message>{message}</Message>}
        </LoginBox>
      </LoginPageContainer>
    </>
  );
};

export default LoginOtpPage;
