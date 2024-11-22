// StudentAssignments.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
} from '../../styles/AssignmentsStyles';

const StudentAssignments=()=>{
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
        
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;