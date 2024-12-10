import styled from "styled-components";

export const StudentsContainer = styled.div`
  display: flex;
  padding-left: 240px;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 500px; /* Adjust based on layout */
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  &:hover {
    background-color: #e6f7ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #555;
  }

  .label {
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const AddStudentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddStudentInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const AddStudentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NoStudentsMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
`;

export const RemoveButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;
