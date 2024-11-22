import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import styled from "styled-components";
import {
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from '../../styles/AssignmentsStyles';


export const AssignmentsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const AdminAssignment = () => {
  return (
    <AssignmentsContainer>
      
      <AdminSidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment deadline"
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>

          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  )
}

export default AdminAssignment