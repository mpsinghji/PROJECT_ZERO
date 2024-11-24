import React, { useState } from 'react';

const LoginOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (otp === '') {
      setMessage('Please enter the OTP.');
    } else {
      setMessage('OTP submitted successfully!');
    }
  };

  return (
    <LoginPageContainer>
      <LoginBox>
        <Heading>Enter OTP</Heading>
        <InputField
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        {message && <Message>{message}</Message>}
      </LoginBox>
    </LoginPageContainer>
  );
};

export default LoginOtpPage;
