import styled from "styled-components";

// Container for the entire page
export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100vw; 
  background: linear-gradient(to right, #1A252F, #1a252f);
  color: #000;
  margin: 0; 
  padding: 0; 
  overflow: hidden;
`;

// Style for each user section box
export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; 
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

// Input field styles
export const InputField = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 2px solid #dcdcdc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #2193b0;
    background-color: #fff;
  }
`;

// Dropdown (select) styles
export const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 2px solid #dcdcdc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
  outline: none;

  &:focus {
    border-color: #2193b0;
    background-color: #fff;
  }
`;

// Title style
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

// Style for the buttons (Login button)
export const Button = styled.button`
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
  text-align: center;
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
