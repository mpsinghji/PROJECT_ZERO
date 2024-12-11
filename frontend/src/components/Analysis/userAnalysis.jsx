// src/components/Analysis/AdminStatsGraph.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

const GraphWrapper = styled.div`
  flex: 1;
  height: 400px;
  max-height: 500px;
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: hidden;
  margin: 0 auto;
`;

// Register the components needed for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserAnalysis = ({ totalStudents, totalTeachers, totalAdmins }) => {
  const data = {
    labels: ['Students', 'Teachers', 'Admins'],
    datasets: [
      {
        label: 'Total Count',
        data: [totalStudents, totalTeachers, totalAdmins],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
        borderColor: ['#388e3c', '#1976d2', '#f57c00'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        // text: 'Admin Dashboard Stats',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <GraphWrapper>
      <h2>Admin Dashboard Stats</h2>
      <Bar data={data} options={options} />
    </GraphWrapper>
  );
};

export default UserAnalysis;
