// AssignmentSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from "../../styles/AssignmentsStyles";
import styled from "styled-components";

export const AssignmentsContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;


const AssignmentSection = () => {

  return (
    <AssignmentsContainer>
      <Sidebar />
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
            <AddAssignmentButton type="submit">
              Add Assignment
            </AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
