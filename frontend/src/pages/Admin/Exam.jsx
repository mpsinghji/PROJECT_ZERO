import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from '../../styles/ExamStyles';


const AdminExam = () => {
  // const calculateTotalMarks = () => {
  //   let total = 0;
  //   for (let i = 0; i < examData.length; i++) {
  //     total += examData[i].marks;
  //   }
  //   return total;
  // };
  return (
    <ExamContainer>
      <SidebarContainer>
        <AdminSidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            required
          />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            required
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
            required
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks:</h2>
        <h3>Exam Details:</h3>
      </Content>
    </ExamContainer>
  )
}

export default AdminExam