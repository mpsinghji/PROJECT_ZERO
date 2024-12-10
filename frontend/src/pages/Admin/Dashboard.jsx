import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar.jsx";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AttendanceGraph from "../../components/Analysis/Attendance.jsx";


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
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admintoken");
    if (!token) {
      toast.error("Invalid User. Please log in again.");
      setLoading(false);
      navigate("/choose-user");
      return;
    }
  
    axios.get("/api/v1/admin/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  
  }, []);


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
          <AttendanceGraph />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
