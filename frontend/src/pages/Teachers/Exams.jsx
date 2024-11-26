import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
} from "../../styles/ExamStyles";
import axios from "axios";

const CheckExamSection = () => {
  const [examData, setExamData] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [batch, setBatch] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/exam/getall");
      console.log(response.data);
      if (Array.isArray(response.data)) {
        setExamData(response.data);
      } else {
        setExamData([response.data]);
      }
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = { subjectName, subjectCode, batch, date };
    try {
      const response = await axios.post("http://localhost:5000/api/v1/exam", newExam);
      if (typeof response.data === "object") {
        setExamData([...examData, response.data]);
        setSubjectName('');
        setSubjectCode('');
        setBatch('');
        setDate('');
      } else {
        console.error("Error: API response data is not an object");
      }
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Subject Name:</FormLabel>
          <FormInput
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />
          <FormLabel>Subject Code:</FormLabel>
          <FormInput
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            required
          />
          <FormLabel>Batch:</FormLabel>
          <FormInput
            type="text"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            required
          />
          <FormLabel>Date:</FormLabel>
          <FormInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        
        <h3>Exam Details:</h3>
        <ul>
          {examData.map((exam, index) => (
            <li key={index}>
              <p><strong>Subject Name:</strong> {exam.subjectName}</p>
              <p><strong>Subject Code:</strong> {exam.subjectCode}</p>
              <p><strong>Batch:</strong> {exam.batch}</p>
              <p><strong>Date:</strong> {exam.date}</p>
            </li>
          ))}
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default CheckExamSection;
