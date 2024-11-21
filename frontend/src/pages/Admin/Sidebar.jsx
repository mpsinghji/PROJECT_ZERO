import React from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  Logo
} from "../../styles/SidebarStyles";
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
  BsBoxArrowRight,
} from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate(); // Using React Router's navigate hook

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the path passed to the function
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo src="../assets/bg1.png" alt="PROJECTZERO" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem onClick={() => handleNavigation("/admin-register")}>
          <SidebarIcon><FaUserPlus /></SidebarIcon>
          Register
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/dashboard")}>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Classes")}>
          <SidebarIcon><BsPeople /></SidebarIcon>
          Classes
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Students")}>
          <SidebarIcon><BsPeople /></SidebarIcon>
          Students
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Teachers")}>
          <SidebarIcon><BsPerson /></SidebarIcon>
          Teachers
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Assignment")}>
          <SidebarIcon><BsFileText /></SidebarIcon>
          Assignment
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Exam")}>
          <SidebarIcon><BsBook /></SidebarIcon>
          Exams
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Performance")}>
          <SidebarIcon><BsGraphDown /></SidebarIcon>
          Performance
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Attendance")}>
          <SidebarIcon><BsCalendar /></SidebarIcon>
          Attendance
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Library")}>
          <SidebarIcon><BsBook /></SidebarIcon>
          Library
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Announcement")}>
          <SidebarIcon><BsChatDots /></SidebarIcon>
          Announcement
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/EventCalender")}>
          <SidebarIcon><BsCalendarEvent /></SidebarIcon>
          Events and Calender
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/admin/Profile")}>
          <SidebarIcon><BsGear /></SidebarIcon>
          Settings and Profile
        </SidebarNavItem>
        <SidebarNavItem onClick={() => handleNavigation("/")}>
          <SidebarIcon><BsBoxArrowRight /></SidebarIcon>
          Log Out
        </SidebarNavItem>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default AdminSidebar;
