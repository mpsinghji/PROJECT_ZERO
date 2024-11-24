import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar.jsx";
import AdminPerformance from "./Performance.jsx";
import AdminAnnouncement from "./Announcement.jsx";
import LoadingPage from "../../components/Loading/loading.jsx";
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
} from "../../styles/DashboardStyles.js";

const AdminDashboard = () => {
  const [data, setData] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalAdmins: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/users/count");

        if (isMounted) {
          setData({
            totalStudents: response.data.totalStudents,
            totalTeachers: response.data.totalTeachers,
            totalAdmins: response.data.totalAdmins,
          });
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching data:", err.response?.data || err.message);
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <LoadingPage/>
    // return <div>Loading</div>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AdminDashboardContainer>
      <AdminSidebar />
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Admins</CardTitle>
                <CardContent>{data.totalAdmins}</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>{data.totalTeachers}</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>{data.totalStudents}</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <SectionTitle>All Events</SectionTitle>
          </Section>
        </TopContent>

        <BottomContent>
          <AdminPerformance />
          <AdminAnnouncement />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;