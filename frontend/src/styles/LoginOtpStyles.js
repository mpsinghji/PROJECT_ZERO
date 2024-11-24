import styled from 'styled-components';

// Container for the OTP page (no gradient background, just center alignment)
export const LoginPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Box for the OTP form, with a simple border and padding
export const LoginBox = styled.div`
  background: white;  // Solid white background for the box
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;  // Light border for the box
`;

// Heading style for the OTP page
export const Heading = styled.h2`
  color: #333;  // Dark color for better contrast
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 500;
`;

// Input fields for the OTP form with a clean design
export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #ddd;  // Light border for the input fields
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #ffffff;
`;

// Submit button with a solid color and hover effect
export const SubmitButton = styled.button`
  background-color: #1db196;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128670;
  }

  &:active {
    background-color: #1db196;
  }
`;

// Message text under the OTP input area
export const Message = styled.p`
  color: #333;  // Dark color for readability
  margin-top: 20px;
  font-size: 14px;
`;
