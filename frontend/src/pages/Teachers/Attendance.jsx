import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  Content,
  AttendanceContent,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  SubmitButton,
} from "../../styles/AttendanceStyles";
import styled from "styled-components";
import axios from "axios";

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  // Fetch students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/attendance/students");
        console.log("Response Status:", response.status); // Log the status
        console.log("API Response:", response.data); // Log the data
    
        // Check if the data is an array
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error("Data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    
    
    fetchStudents();
  }, []);
  

  // Handle checkbox changes
  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // Submit attendance
  const handleSubmit = async () => {
    try {
      // Send the attendance data to the server
      await axios.post("http://localhost:5000/api/v1/attendance/attendance", { attendance });
      alert("Attendance submitted successfully!");
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance.");
    }
  };
  

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
          {Array.isArray(students) && students.length > 0 ? (
  students.map((student) => (
    <AttendanceItem key={student._id}>
      <StudentName>{student.rollno}</StudentName> {/* Displaying roll number */}
      <CheckboxLabel>
        <input
          type="radio"
          name={`attendance-${student._id}`}
          onChange={() => handleAttendanceChange(student._id, "Present")}
        />
        Present
      </CheckboxLabel>
      <CheckboxLabel>
        <input
          type="radio"
          name={`attendance-${student._id}`}
          onChange={() => handleAttendanceChange(student._id, "Absent")}
        />
        Absent
      </CheckboxLabel>
    </AttendanceItem>
  ))
) : (
  <p>No students found.</p>
)}


          </AttendanceList>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;