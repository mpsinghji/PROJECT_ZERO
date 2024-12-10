import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const PaymentGraph = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/payments");

        if (response.data.success) {
          const payments = response.data.data;

          const dates = [];
          const paymentCounts = [];
          payments.forEach((payment) => {
            dates.push(payment.date);
            paymentCounts.push(payment.count);
          });

          setPaymentData({
            labels: dates,
            datasets: [
              {
                label: "Payments Received",
                data: paymentCounts,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: false,
              },
            ],
          });
        } else {
          setError("Failed to fetch payment data");
        }
      } catch (error) {
        setError("Error fetching payments");
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, []);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Payments Overview</h2>
      {loading ? (
        <p>Loading payment data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Line
          data={paymentData}
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
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    return `${value}`; 
                  },
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default PaymentGraph;