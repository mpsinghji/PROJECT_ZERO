import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  Logo,
  DropdownMenu,
  DropdownItem,
} from "../../styles/SidebarStyles";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/choose-user");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo src="../assets/bg1.png" alt="PROJECTZERO" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem
          className={isActive("/admin/dashboard") ? "active" : ""}
          onClick={() => handleNavigation("/admin/dashboard")}
        >
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          Dashboard
        </SidebarNavItem>
        <SidebarNavItem className="dropdown" onClick={toggleDropdown}>
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
        {/* <SidebarNavItem
          className={isActive("/admin/Classes") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Classes")}
        >
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          Classes
        </SidebarNavItem> */}
        <SidebarNavItem
          className={isActive("/admin/Assignment") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Assignment")}
        >
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          Assignment
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Exam") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Exam")}
        >
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          Exams
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Performance") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Performance")}
        >
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          Performance
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Attendance") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Attendance")}
        >
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          Attendance
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Library") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Library")}
        >
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          Library
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Announcement") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Announcement")}
        >
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          Announcement
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/EventCalender") ? "active" : ""}
          onClick={() => handleNavigation("/admin/EventCalender")}
        >
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          Events and Calendar
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/admin/Profile") ? "active" : ""}
          onClick={() => handleNavigation("/admin/Profile")}
        >
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          Settings and Profile
        </SidebarNavItem>
        <SidebarNavItem
          className={isActive("/choose-user") ? "active" : ""}
          onClick={handleLogout}
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

export default AdminSidebar;
