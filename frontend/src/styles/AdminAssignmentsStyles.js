import styled from 'styled-components';

// Page container for admin view
export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Arial", sans-serif;

`;

// Sidebar container
export const SidebarContainer = styled.div`
  width: 250px;
  color: #ecf0f1;
`;

// Content container for the main body
export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;

  h1 {
    color: #34495e;
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

// Form container for creating assignments
export const FormContainer = styled.div`
  margin-bottom: 20px;
`;

// Assignment form
export const AssignmentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Input field for title
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

// Textarea for description
export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

// Button to submit form
export const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

// List of assignments
export const AssignmentList = styled.div`
  margin-top: 20px;
`;

// Individual assignment card
export const AssignmentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

// Assignment title
export const Title = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
`;

// Assignment description
export const Description = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  margin: 0;
`;