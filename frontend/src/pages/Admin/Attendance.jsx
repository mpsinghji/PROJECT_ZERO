import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import {
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  SubmitButton,
} from '../../styles/AttendanceStyles';
import styled from "styled-components";

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const AdminAttendance = () => {
  return (
    <AttendanceContainer>
      <AdminSidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
                <AttendanceItem>
                  <StudentName></StudentName>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                    />
                    Absent
                  </CheckboxLabel>
                </AttendanceItem>
          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  )
}

export default AdminAttendance