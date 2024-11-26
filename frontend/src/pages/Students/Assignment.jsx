import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AssignmentsContainer,
  SidebarContainer,
  Content,
  AssignmentCard,
  AssignmentTitle,
  AssignmentDescription,
  AssignmentDoneMessage,
  AssignmentButton,
} from '../../styles/AssignmentsStyles';

import Sidebar from './Sidebar'; 

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const handleDoAssignment = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/assignments/done/${id}`);
      
      if (response.data.success) {
        setAssignments((prevAssignments) =>
          prevAssignments.map((assignment) =>
            assignment._id === id ? { ...assignment, done: true } : assignment
          )
        );
        alert("Marked as completed");
      }
    } catch (error) {
      console.error('Error updating assignment:', error);
    }
  };

  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar /> 
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>

        <div>
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <AssignmentCard key={assignment._id}>
                <AssignmentTitle>{assignment.title}</AssignmentTitle>
                <AssignmentDescription>{assignment.description}</AssignmentDescription>
                {assignment.done ? (
                  <AssignmentDoneMessage>Assignment Done</AssignmentDoneMessage>
                ) : (
                  <AssignmentButton onClick={() => handleDoAssignment(assignment._id)}>
                    Mark as Done
                  </AssignmentButton>
                )}
              </AssignmentCard>
            ))
          ) : (
            <p>No assignments available</p>
          )}
        </div>
      </Content>
    </AssignmentsContainer>
  );
};

export default StudentAssignments;