import styled from 'styled-components';

// Container for the entire assignments page
export const AssignmentsContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: "Arial", sans-serif;

`;

// Sidebar container
export const SidebarContainer = styled.div`
  width: 250px;
  color: #ecf0f1;
`;

// Main content area
export const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;

  h1 {
    color: #34495e;
    font-size: 2rem;
    margin-bottom: 20px;
  }
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
export const AssignmentTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
`;

// Assignment description
export const AssignmentDescription = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  margin: 0;
`;

// Message indicating assignment completion
export const AssignmentDoneMessage = styled.span`
  color: #27ae60;
  font-weight: bold;
  font-size: 1.2rem;
`;

// Button for submitting assignments
export const AssignmentButton = styled.button`
  align-self: flex-start;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;