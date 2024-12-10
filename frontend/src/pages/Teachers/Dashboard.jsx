import React from "react";
import Sidebar from "./Sidebar";
import {
  TeacherDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  EventItem,
  EventList,
} from "../../styles/DashboardStyles";
import axios from "axios";
import { useState, useEffect } from "react";


const TeacherDashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/student/count");
        setTotalStudents(response.data.totalStudents);
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/events/getall");
        setEvents(response.data.events || []); // Update events state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchStudentCount();
    fetchEvents();
  }, []);

  return (
    <TeacherDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>{totalStudents}</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          <EventList>
            {events.map((event) => (
              <EventItem key={event._id}>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </EventItem>
            ))}
          </EventList>
        </Section>
      </Content>
    </TeacherDashboardContainer>
  );
};

export default TeacherDashboard;
