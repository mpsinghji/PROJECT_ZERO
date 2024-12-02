import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BsGraphUp,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
  BsBoxArrowRight,
} from "react-icons/bs";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  Logo,
} from "../../styles/SidebarStyles";
import bg1 from "../../assets/bg1.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/choose-user");
      localStorage.clear();
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo src={bg1} alt="Logo" onClick={() => navigate("/student/dashboard")} />
      </SidebarHeader>
      <SidebarHeader>Student</SidebarHeader>
      <SidebarNav>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/dashboard")}
          className={isActive("/student/dashboard")}
        >
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/assignments")}
          className={isActive("/student/assignments")}
        >
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          Assignments
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/exams")}
          className={isActive("/student/exams")}
        >
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          Exams
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/performance")}
          className={isActive("/student/performance")}
        >
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          Performance
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/attendance")}
          className={isActive("/student/attendance")}
        >
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          Attendance
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/library")}
          className={isActive("/student/library")}
        >
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          Library
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/communication")}
          className={isActive("/student/communication")}
        >
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          Announcement
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/EventCalendar")}
          className={isActive("/student/EventCalendar")}
        >
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          Events and Calendar
        </SidebarNavItem>
        <SidebarNavItem
          onClick={() => handleNavigation("/student/settings")}
          className={isActive("/student/settings")}
        >
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          Profile
        </SidebarNavItem>
        <SidebarNavItem
          onClick={handleLogout}
          className={isActive("/choose-user")}
        >
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
