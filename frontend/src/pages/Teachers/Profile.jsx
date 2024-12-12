import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Loading from '../../components/Loading/loading';
import axios from 'axios'; // Add axios import
import { ProfileContainer, SidebarContainer, Content, ProfileHeader, ProfileDetails, ProfileLabel, ProfileInfo, EditButton } from '../../styles/SettingsProfileStyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    qualification: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacherProfile = async () => {
      try {
        // const token = localStorage.getItem("teachertoken");
        const token = Cookies.get("teachertoken");
        if (!token) {
          toast.error("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/v1/teacher/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTeacherInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching teacher profile:", error);
        toast.error("Failed to fetch profile. Please try again later.");
        setLoading(false);
      }
    };

    fetchTeacherProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProfileContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <ProfileHeader>Profile Details</ProfileHeader>
          <ProfileDetails>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileInfo>{teacherInfo.name}</ProfileInfo>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInfo>{teacherInfo.email}</ProfileInfo>
            <ProfileLabel>Phone:</ProfileLabel>
            <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
            <ProfileLabel>Address:</ProfileLabel>
            <ProfileInfo>{teacherInfo.address}</ProfileInfo>
            <ProfileLabel>Qualification:</ProfileLabel>
            <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
          </ProfileDetails>
          <EditButton>Edit Profile</EditButton>
        </Content>
      </ProfileContainer>
      <ToastContainer />
    </>
  );
};

export default TeacherProfileSection;
