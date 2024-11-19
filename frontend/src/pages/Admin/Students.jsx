import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "./Sidebar";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";

const Students = () => {
  return (
    <StudentsContainer>
      <AdminSidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm>
              <AddStudentInput
                type='Text'
                placeholder="Enter Student Name"
              />
              <AddStudentInput
                type='Text'
                placeholder="Enter Roll Number"
              />
              <AddStudentInput
                type='Text'
                placeholder="Enter Group"
              />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
            <StudentList>
              
            </StudentList>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
