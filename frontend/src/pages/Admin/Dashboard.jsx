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
import { createGlobalStyle } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Arial", sans-serif;
    background: #ecf0f1;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`;

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

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please log in again.");
      setLoading(false);
      window.location.href = "/admin-signin";
      return;
    }

    const fetchData = async () => {
      try {
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
            toast.error("Session expired. Redirecting to login...");
            setTimeout(() => {
              window.location.href = "/admin-signin";
            }, 2000); 
          } else {
            toast.error("Failed to fetch data. Please try again later.");
          }
          setError(true);
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
    return toast.error("Something went Wrong!");
  }

  return (
    <>
    <GlobalStyle />
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
    </>
  );
};

export default AdminDashboard;
