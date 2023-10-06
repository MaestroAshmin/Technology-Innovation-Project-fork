/*Admin Navbar component
Junaid Saleem 103824753
Last edited 5/19/2023*/

import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const TestResultChart = ({ data }) => {
  // Initialize state for the selected postcode and chart data
  const [selectedPostcode, setSelectedPostcode] = useState('');
  const [chartData, setChartData] = useState(null);

  // Function to handle search bar input
  const handleSearch = (event) => {
    const { value } = event.target;
    setSelectedPostcode(value);
    // Update chart data based on the selected postcode
    // You can filter data here based on the selected postcode
    // and format it as required for the pie chart
    // Replace this with your actual data manipulation logic
    const filteredData = data.filter((item) => item.postcode === value);
    // Update chart data with the filtered data
    setChartData({
      labels: filteredData.map((item) => item.postcode),
      datasets: [
        {
          data: filteredData.map((item) => item.positiveCases),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            // Add more colors if needed
          ],
        },
      ],
    });
  };

  // Initial chart data (you can customize this)
  const initialChartData = {
    labels: ['Postcode1', 'Postcode2', 'Postcode3', 'Postcode4'],
    datasets: [
      {
        data: [50, 30, 20, 10], // Replace with your actual data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Pie Chart: Positive Cases by Postcode</h2>
      <div>
        <Pie 
            data={chartData || initialChartData} 
            options={{
                maintainAspectRatio: false,
            }}
            width={300} // Set the desired width
            height={300} // Set the desired height
        />
      </div>
      <input
        type="text"
        placeholder="Search by Postcode"
        value={selectedPostcode}
        onChange={handleSearch}
        className="search-bar"
      />
    </div>
  );
};

export default TestResultChart;