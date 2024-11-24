import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  BsGraphUp,
  BsPeople,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsCalendarEvent,
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
  // overflow-y: auto; 
  padding-top: 70px;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
  transition: width 0.3s ease-in-out;

  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #34495E; 
    border-radius: 10px; 
  }

  &:hover {
    width: 260px;
  }
  
  @media screen and (max-height: 700px) {
    padding-top: 50px; 
  }
`;


const Sidebar = () => {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
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
        <SidebarNavItem onClick={() => handleNavigation("/choose-user")}>
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
