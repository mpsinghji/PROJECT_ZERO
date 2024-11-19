import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import axios from "axios";
import {
  Content,
  ClassesContainer,
  ClassesContent,
  ClassHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ClassContainer,
  ClassesHeader,
  SidebarContainer,
  GradeHeader,
} from "../../styles/ClassesStyles";

const AdminClasses = () => {
  return (
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
  )
};

export default AdminClasses;
