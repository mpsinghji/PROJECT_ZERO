import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar.jsx";
import AdminEventCalender from "./EventCalender.jsx";
import AdminPerformance from "./Performance.jsx";
import AdminAnnouncement from "./Announcement.jsx";
import axios from "axios";


import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  StudentDashboardContainer,
  TeacherDashboardContainer,
} from "../../styles/DashboardStyles.js";

const AdminDashboard = () => {
  return (
    <AdminDashboardContainer>
      <AdminSidebar/>
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <SectionTitle>All Events</SectionTitle>
          </Section>
        </TopContent>
        <BottomContent>
          <AdminPerformance/>
          <AdminAnnouncement />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
