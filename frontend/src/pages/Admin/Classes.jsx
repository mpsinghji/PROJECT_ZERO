import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import {
  Content,
  ClassesContainer,
  ClassesContent,
  ClassHeader,
  ClassList,
  AddClassForm,
  AddClassInput,
  AddClassButton,

} from "../../styles/ClassesStyles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminClasses = () => {
  return (
    <>
    <ClassesContainer>
      <AdminSidebar/>
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput
              type="text"
              placeholder="Enter Class Name"
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>

          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
    <ToastContainer />
    </>
  )
};

export default AdminClasses;
