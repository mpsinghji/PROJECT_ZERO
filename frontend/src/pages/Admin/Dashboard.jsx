import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar.jsx";
import AdminPerformance from "./Performance.jsx";
import AdminAnnouncement from "./Announcement.jsx";
import Loading from "../../components/Loading/loading.jsx";
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
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found. Please log in again.");
        }

        const response = await axios.get("http://localhost:5000/api/admin/users/count", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
          const status = err.response?.status;

          if (status === 401) {
            setError("Session expired. Redirecting to login...");
            setTimeout(() => {
              window.location.href = "/admin-signin";
            }, 2000); 
          } else {
            setError("Failed to fetch data. Please try again later.");
          }
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
    return <Loading />;
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