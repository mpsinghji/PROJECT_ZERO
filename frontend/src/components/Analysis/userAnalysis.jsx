import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import styled from "styled-components";

const GraphWrapper = styled.div`
  flex: 1;
  height: 400px;
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
`;

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UserAnalysis = () => {
  const [trendData, setTrendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get("http://localhost:5000/login-trends");
        const trends = response.data.data;

        const dates = trends.map((trend) => trend.date);
        const loginCounts = trends.map((trend) => trend.loginCount);

        setTrendData({
          labels: dates,
          datasets: [
            {
              label: "User Logins",
              data: loginCounts,
              backgroundColor: "rgba(153, 102, 255, 0.6)",
              borderColor: "rgba(153, 102, 255, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError("Error fetching login trends");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  return (
    <GraphWrapper>
      <h2>Daily User Logins</h2>
      {loading ? (
        <p>Loading login trends...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Bar
          data={trendData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Logins",
                },
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </GraphWrapper>
  );
};

export default UserAnalysis;
