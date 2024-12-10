import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileInfo,
  ProfileDetail,
  Label,
  Value,
} from '../../styles/SettingsProfileStyles';
import Loading from '../../components/Loading/loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSection = () => {
  const [studentProfile, setStudentProfile] = useState({
    name: '',
    rollno: '',
    gender: '',
    mobileno: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        const token = localStorage.getItem("studenttoken"); 
        if (!token) {
          toast.error("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:5000/api/v1/student/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudentProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student profile:", error);
        toast.error("Failed to fetch profile. Please try again later.");
        setLoading(false);
      }
    };

    fetchStudentProfile();
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
          <ProfileHeader>Profile</ProfileHeader>
          <ProfileInfo>
            <ProfileDetail>
              <Label>Name:</Label>
              <Value>{studentProfile.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Roll. No.:</Label>
              <Value>{studentProfile.rollno}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Gender:</Label>
              <Value>{studentProfile.gender}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Mobile No.:</Label>
              <Value>{studentProfile.mobileno}</Value>
            </ProfileDetail>
            <ProfileDetail>
              <Label>Email:</Label>
              <Value>{studentProfile.email}</Value>
            </ProfileDetail>
          </ProfileInfo>
        </Content>
      </ProfileContainer>
      <ToastContainer />
    </>
  );
};

export default ProfileSection;
