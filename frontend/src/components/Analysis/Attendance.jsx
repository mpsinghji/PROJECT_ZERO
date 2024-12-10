import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const AttendanceGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/attendance/getall");

        console.log("API Response:", response.data);

        if (response.data.success && Array.isArray(response.data.data)) {
          const attendanceRecords = response.data.data;

          // Group by date
          const attendanceByDate = {};
          attendanceRecords.forEach((record) => {
            const { date, status } = record;
            if (!attendanceByDate[date]) {
              attendanceByDate[date] = { Present: 0, Absent: 0 };
            }
            attendanceByDate[date][status]++;
          });

          console.log("Attendance Grouped by Date:", attendanceByDate);

          // Prepare data for the chart
          const labels = Object.keys(attendanceByDate); // Dates
          const presentData = labels.map((date) => attendanceByDate[date].Present);
          const absentData = labels.map((date) => attendanceByDate[date].Absent);

          setChartData({
            labels,
            datasets: [
              {
                label: "Present",
                data: presentData,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
              {
                label: "Absent",
                data: absentData,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
              },
            ],
          });
        } else {
          console.warn("No valid attendance data found.");
          setChartData(null);
        }
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div style={{ width: "50%", margin: "0 200px" }}>
      <h2>Attendance Overview</h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true, position: "top" },
            },
          }}
        />
      ) : (
        <p>No attendance data available.</p>
      )}
    </div>
  );
};

export default AttendanceGraph;
