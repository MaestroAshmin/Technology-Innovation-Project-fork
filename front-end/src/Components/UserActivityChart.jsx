/*Admin Navbar component
Junaid Saleem 103824753
Last edited 5/19/2023*/

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import 'chart.js/auto';
import '../Css/Chart.css';

Chart.register(...registerables);

const UserActivityChart = () => {
  //Sample Data
  const [chartData, setChartData] = useState({
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Active Users in the Last 7 Days',
        data: [10, 20, 15, 25, 30, 18, 12], // Replace with your user activity data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="chart-container">
      <h2 className="chart-title">User Activity in the Last 7 Days</h2>
      <div>
        <Bar
          data={chartData}
          width={300} // Set the desired width
          height={300} // Set the desired height
          options={{
            animation: {
              duration: 1500, // Animation duration in milliseconds
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  display: false, // Remove -axis gridlines
                },
                title: {
                  display: true,
                  text: 'Number of Users',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
              },
              x: {
                grid: {
                  display: false, // Remove x-axis gridlines
                },
                title: {
                  display: true,
                  text: 'Days',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default UserActivityChart;
