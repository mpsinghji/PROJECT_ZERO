import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import styled from "styled-components";

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

const AttendanceGraph = () => {
  const [chartData, setChartData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/attendance/getall");
        if (response.data.success && Array.isArray(response.data.data)) {
          const attendanceRecords = response.data.data;

          const filteredRecords = attendanceRecords.filter((record) => {
            const recordDate = new Date(record.date);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (start && end) return recordDate >= start && recordDate <= end;
            if (start) return recordDate >= start;
            if (end) return recordDate <= end;
            return true;
          });

          if (filteredRecords.length > 0) {
            const attendanceByDate = {};
            filteredRecords.forEach(({ date, status }) => {
              if (!attendanceByDate[date]) attendanceByDate[date] = { Present: 0, Absent: 0 };
              attendanceByDate[date][status]++;
            });

            const labels = Object.keys(attendanceByDate);
            const presentData = labels.map((date) => attendanceByDate[date].Present);
            const absentData = labels.map((date) => attendanceByDate[date].Absent);

            setChartData({
              labels,
              datasets: [
                { label: "Present", data: presentData, backgroundColor: "rgba(75, 192, 192, 0.6)" },
                { label: "Absent", data: absentData, backgroundColor: "rgba(255, 99, 132, 0.6)" },
              ],
            });
          } else {
            setChartData(null);
          }
        } else {
          setChartData(null);
        }
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendance();
  }, [startDate, endDate]);

  // const handleStartDateChange = (event) => setStartDate(event.target.value);
  // const handleEndDateChange = (event) => setEndDate(event.target.value);

  return (
    <GraphWrapper>
      <h2>Attendance</h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true, // Critical for filling container size
            plugins: {
              legend: { display: true, position: "top" },
            },
          }}
          style={{ height: "100%", width: "100%" }} // Full size of GraphWrapper
        />
      ) : (
        <p>No attendance data available for the selected date range.</p>
      )}
    </GraphWrapper>
  );
};

export default AttendanceGraph;
