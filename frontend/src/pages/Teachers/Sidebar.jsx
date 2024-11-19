import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
  BsQuestionSquare,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  Logo
} from "../../styles/SidebarStyles";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #1A252F;
  color: #ECF0F1;
  // overflow-y: auto; /* Allow vertical scrolling */
  padding-top: 70px;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
  transition: width 0.3s ease-in-out;

  /* Add scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px; /* Customize scrollbar width */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #34495E; /* Customize scrollbar color */
    border-radius: 10px; /* Rounded scrollbar */
  }

  &:hover {
    width: 260px;
  }
  
  @media screen and (max-height: 700px) {
    padding-top: 50px; /* Reduce padding for small screens */
  }
`;


const Sidebar = () => {
  const navigate = useNavigate(); // Using React Router's navigate hook

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the path passed to the function
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo src={"../assets/bg1.png"} alt="Logo" />
      </SidebarHeader>
      <SidebarHeader>Teacher</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/dashboard")}>
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/classes")}>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          Classes
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/students")}>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          Students
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/teachers")}>
          <SidebarIcon>
            <BsPerson />
          </SidebarIcon>
          Teachers
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/assignments")}>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          Assignments
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/exams")}>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          Exams
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/performance")}>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          Performance
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/attendance")}>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          Attendance
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/communication")}>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          Announcement
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/events")}>
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          Events & Calendar
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/teacher/settings")}>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          Settings & Profile
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/")}>
          <SidebarIcon>
            <BsBoxArrowRight />
          </SidebarIcon>
          Log Out
        </SidebarNavItem>
      </SidebarNav>
    </SidebarContainer>
  );
};
export default Sidebar;
