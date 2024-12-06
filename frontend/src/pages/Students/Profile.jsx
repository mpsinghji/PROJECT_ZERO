import React from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSection = () => {
  const studentProfile = {
    name: 'John Doe',
    RollNo: 18,
    Gender: 'Male',
    Mobile: '123456789',
    email: 'john.doe@example.com'
  };

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
            <Value>{studentProfile.RollNo}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Gender:</Label>
            <Value>{studentProfile.Gender}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Mobile No.:</Label>
            <Value>{studentProfile.Mobile}</Value>
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