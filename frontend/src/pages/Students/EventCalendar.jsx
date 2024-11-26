import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EventCalendarContainer,
  Content,
  Event,
  Events
} from "../../styles/EventCalendarStyles.js";
import Sidebar from "./Sidebar.jsx";

const StudentEventSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/events/getall"
        );
        setEvents(response.data.events || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Event Calendar</h1>
        <Events>
        {events.map((event) => (
          <Event key={event._id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </Event>
          
        ))}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default StudentEventSection;
