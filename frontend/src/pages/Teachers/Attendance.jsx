import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;



const CheckAttendanceSection = () => {
  return (
    <>
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
              <React.Fragment>
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
                
              </React.Fragment>
          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
    <ToastContainer />
    </>
  );
};

export default CheckAttendanceSection;
