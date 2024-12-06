import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
} from "../../styles/StudentsStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentSection = () => {
  return (
    <>
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <StudentList></StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
    <ToastContainer />
    </>
  );
};

export default StudentSection;
