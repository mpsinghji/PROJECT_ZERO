import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  ClassContainer,
  SidebarContainer,
  Content,
  ClassHeader,
  ClassList,
  ClassItem,
} from "../../styles/ClassesStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassSection = () => {
  return (
    <>
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList></ClassList>
      </Content>
    </ClassContainer>
    <ToastContainer />
    </>
  );
};

export default ClassSection;
