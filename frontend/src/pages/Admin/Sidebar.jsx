import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  Logo,
  DropdownMenu,
  DropdownItem
} from "../../styles/SidebarStyles";
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
import { FaUserPlus } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";


const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); 
  };


  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo src="../assets/bg1.png" alt="PROJECTZERO" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem onClick={() => handleNavigation("/admin/dashboard")}>
          <SidebarIcon><BsGraphUp /></SidebarIcon>
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem onClick={toggleDropdown}>
          <SidebarIcon>
            <FaUserPlus />
          </SidebarIcon>
          Register
         <IoIosArrowDropdown />

        </SidebarNavItem>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => handleNavigation("/admin-register")}>
              Admin
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/student-register")}>
              Student
            </DropdownItem>
            <DropdownItem onClick={() => handleNavigation("/teacher-register")}>
              Teacher
            </DropdownItem>
          </DropdownMenu>
        )}
        <SidebarNavItem onClick={() => handleNavigation("/admin/Classes")}>
          <SidebarIcon><BsPeople /></SidebarIcon>
          Classes
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