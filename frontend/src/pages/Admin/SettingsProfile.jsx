import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import AdminSidebar from "./Sidebar";
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from '../../styles/SettingsProfileStyles';
import Loading from "../../components/Loading/loading";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

const AdminSettingProfile = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        // const token = localStorage.getItem("admintoken");
        const token = Cookies.get("admintoken");
        if (!token) {
          toast.error("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/v1/admin/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdminInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admin profile:", error);
        toast.error("Failed to fetch profile. Please try again later.");
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProfileContainer>
        <SidebarContainer>
          <AdminSidebar />
        </SidebarContainer>
        <Content>
          <ProfileHeader>Profile Details</ProfileHeader>
          <ProfileDetails>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileInfo>{adminInfo.name}</ProfileInfo>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInfo>{adminInfo.email}</ProfileInfo>
            <ProfileLabel>Phone:</ProfileLabel>
            <ProfileInfo>{adminInfo.phone}</ProfileInfo>
            <ProfileLabel>Address:</ProfileLabel>
            <ProfileInfo>{adminInfo.address}</ProfileInfo>
            <ProfileLabel>Qualification:</ProfileLabel>
            <ProfileInfo>{adminInfo.qualification}</ProfileInfo>
          </ProfileDetails>
          <EditButton>Edit Profile</EditButton>
        </Content>
      </ProfileContainer>
      <ToastContainer />
    </>
  );
};

export default AdminSettingProfile;
