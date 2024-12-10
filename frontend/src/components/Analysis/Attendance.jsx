import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const AttendanceGraph = () => {
  const [chartData, setChartData] = useState(null);
  const [startDate, setStartDate] = useState(""); // Start date state
  const [endDate, setEndDate] = useState(""); // End date state

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/attendance/getall");

        console.log("API Response:", response.data);

        if (response.data.success && Array.isArray(response.data.data)) {
          const attendanceRecords = response.data.data;

          // Filter records based on the selected date range
          const filteredRecords = attendanceRecords.filter((record) => {
            const recordDate = new Date(record.date);

            // If no range is selected, show all records
            if (!startDate && !endDate) {
              return true;
            }

            // Convert selected startDate and endDate to Date objects
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            // Check if the record's date falls within the range
            if (start && end) {
              return recordDate >= start && recordDate <= end;
            } else if (start) {
              return recordDate >= start;
            } else if (end) {
              return recordDate <= end;
            }

            return true;
          });

          if (filteredRecords.length > 0) {
            // Group by date
            const attendanceByDate = {};
            filteredRecords.forEach((record) => {
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
            console.warn("No attendance data found for the selected range.");
            setChartData(null);
          }
        } else {
          console.warn("No valid attendance data found.");
          setChartData(null);
        }
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendance();
  }, [startDate, endDate]); // Re-fetch when the date range changes

  // Handle start date change
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // Handle end date change
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div style={{ width: "50%", margin: "0 200px" }}>
      <h2>Attendance Overview</h2>

      {/* Date Range Selector */}
      {/* <div>
        <label htmlFor="start-date">Start Date: </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date: </label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div> */}

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
        <p>No attendance data available for the selected date range.</p>
      )}
    </div>
  );
};

export default AttendanceGraph;
