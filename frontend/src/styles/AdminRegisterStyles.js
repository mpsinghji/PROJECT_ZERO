import styled, { keyframes } from 'styled-components';

// Container for the registration form
export const AdminRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #FF69B4, #FFA07A, #90EE90); /* Gradient background */
  height: 100vh; /* Full height of the viewport */
`;

// Form container with styling for the form
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Styling for input fields
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Submit button styling
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #FF4500;
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  display: flex; /* To align spinner with the text */
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #FF6347;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:disabled {
    background-color: #FF6347;
    cursor: not-allowed;
  }
`;

// Spinner animation using keyframes
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Spinner styling
export const Spinner = styled.span`
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  margin-right: 10px; /* Space between spinner and text */
`;

// Message display for success/error
export const Message = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  z-index: 1000;

  &.success {
    background-color: #4CAF50; /* Green */
  }

  &.error {
    background-color: #f44336; /* Red */
  }
`;
