// components/ExpenditureReport.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenditureReport = ({ period }) => {
  const [expenditures, setExpenditures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      try {
        const response = await axios.get(`/adminId?period=${period}`, config);
        setExpenditures(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [period]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>{period.charAt(0).toUpperCase() + period.slice(1)} Expenditures</h2>
      <ul>
        {expenditures.map((exp) => (
          <li key={exp._id}>{exp.content} - {exp.amount} - {new Date(exp.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenditureReport;
