import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Arial", sans-serif;

`;

export const LoadingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LoadingBox = styled.div`
  background: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;  /* Light border for the box */
`;

export const Heading = styled.h2`
  color: #333;
  font-family: "Arial", sans-serif;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const LoadingSpinner = styled.div`
  margin-left: 40%;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top: 4px solid #1db196;  /* Spinner color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;
