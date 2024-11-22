import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
} from '../../styles/AnnouncementStyles';
import styled from "styled-components";


export const AnnouncementContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;


const CheckAnnouncementSection = () => {
  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        <h2>Announcements</h2>
        <AnnouncementList>

        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default CheckAnnouncementSection;
