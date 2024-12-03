import React, { useState, useEffect } from "react";
import AdminSidebar from "./Sidebar";
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
} from "../../styles/StudentsStyles";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <StudentsContainer>
      <AdminSidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <StudentList>
            {/* {students.map((student) => (
              <p key={student._id}>{`${student.name} - ${student.rollNumber} - ${student.group}`}</p>
            ))} */}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
