import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "./Sidebar";
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from '../../styles/TeachersStyles';

const Teachers = () => {
  return (
    <TeachersContainer>
      <AdminSidebar/>
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <AddTeacherForm>
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher name"
            />
            <AddTeacherInput
              type="email"
              placeholder="Enter teacher email"
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher subject"
            />
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherList>
            
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  )
}

export default Teachers