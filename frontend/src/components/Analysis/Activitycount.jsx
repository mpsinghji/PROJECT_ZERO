// ActivityGraph.jsx
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const ActivityGraph = () => {
  const [activityCounts, setActivityCounts] = useState({
    events: 0,
    assignments: 0,
    announcements: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [eventsRes, assignmentsRes, announcementsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/v1/events/count"),
          axios.get("http://localhost:5000/api/v1/assignments/count"),
          axios.get("http://localhost:5000/api/v1/announcements/count"),
        ]);

        setActivityCounts({
          events: eventsRes.data.count,
          assignments: assignmentsRes.data.count,
          announcements: announcementsRes.data.count,
        });
      } catch (error) {
        console.error("Error fetching activity counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const data = {
    labels: ["Events", "Assignments", "Announcements"],
    datasets: [
      {
        label: "Activity Count",
        data: [
          activityCounts.events,
          activityCounts.assignments,
          activityCounts.announcements,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
      <h2>Activity Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityGraph;
