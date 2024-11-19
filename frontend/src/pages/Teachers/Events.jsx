// EventSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
} from "../../styles/EventCalendarStyles";

const EventSection = () => {
  
  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Events & Calendar</h1>
        <div>Current Time: {new Date().toLocaleString()}</div>
        <CalendarContainer>
          {/* Display Calendar Here */}
          {/* For example: <Calendar /> */}
          Calendar
        </CalendarContainer>
        <h2>Add New Event</h2>
        <AddEventForm>
          <EventInput
            type="text"
            placeholder="Enter Event"
          />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>
        <Events>
          <h2>Events</h2>
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};
export default EventSection;
