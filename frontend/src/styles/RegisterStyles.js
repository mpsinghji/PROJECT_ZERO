import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full viewport height */
  min-width: 100vw; /* Full viewport width */
  background: #ecf0f1; /* Light background to fill the screen */
  font-family: "Arial", sans-serif;
  color: #000;
  margin: 0; /* Remove any margin to avoid unwanted space */
  padding: 0; /* Remove padding */
  overflow: hidden; /* Prevent scrolling */
`;

export const ScrollLockStyle = `
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* Prevent scrolling on the page */
  }
`;

export const PageHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #2c3e50;
  padding: 0 10px;
  max-width: 90%; /* Limit width to prevent stretching on large screens */
  box-sizing: border-box;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px; /* Restrict width for larger screens */
  background: #34495e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: hidden;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #ddd;
  }

  &:focus {
    border: 2px solid #fff;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  margin: 20px 0;
  background-color: #16a085;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #1abc9c;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

export const MessageContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  background-color: ${({ isSuccess }) => (isSuccess ? "#2ecc71" : "#e74c3c")};
  color: white;
  box-sizing: border-box;
`;

