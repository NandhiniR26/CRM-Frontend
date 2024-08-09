// SalesChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'January', sales: 4000 },
  { month: 'February', sales: 3000 },
  { month: 'March', sales: 5000 },
  { month: 'April', sales: 2000 },
  // Add data for all months
];

const SalesChart = () => {
  return (
    <div>
      <h2>Sales Performance</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SalesChart;
