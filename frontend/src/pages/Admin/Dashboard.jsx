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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AttendanceGraph from "../../components/Analysis/Attendance.jsx";
import PaymentGraph from "../../components/Analysis/paymentDisplay.jsx";
import ActivityGraph from "../../components/Analysis/Activitycount.jsx";
import UserAnalysis from "../../components/Analysis/userAnalysis.jsx";


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

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData({
          totalStudents: response.data.totalStudents,
          totalTeachers: response.data.totalTeachers,
          totalAdmins: response.data.totalAdmins,
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
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
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <>
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
            <PaymentGraph />
          </BottomContent>
          <BottomContent>
            <ActivityGraph />
            <UserAnalysis />
          </BottomContent>
        </Content>
      </AdminDashboardContainer>
    </>
  );
};

export default AdminDashboard;
