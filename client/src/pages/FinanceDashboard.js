

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinanceDashboard = () => {
  const [students, setStudents] = useState([]);
  const [expenditures, setExpenditures] = useState([]);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const [balance, setBalance] = useState(0);
  const [numberOfStudentsPaid, setNumberOfStudentsPaid] = useState(0);
  const [totalOutstanding, setTotalOutstanding] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      try {
        const studentResponse = await axios.get('/adminId', config);
        setStudents(studentResponse.data);
        const expenditureResponse = await axios.get('/expenditures/adminId', config);
        setExpenditures(expenditureResponse.data);
        calculateTotals(studentResponse.data, expenditureResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const calculateTotals = (students, expenditures) => {
    const totalPaid = students.reduce((acc, student) => acc + student.amountPaid, 0);
    const totalExp = expenditures.reduce((acc, exp) => acc + exp.amount, 0);
    setTotalAmountPaid(totalPaid);
    setTotalExpenditure(totalExp);
    setBalance(totalPaid - totalExp);
    setNumberOfStudentsPaid(students.length);
    setTotalOutstanding(students.length * 1000 - totalPaid); // Assuming total outstanding is calculated this way
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>Total Amount Paid: {totalAmountPaid}</div>
        <div>Total Expenditure: {totalExpenditure}</div>
        <div>Balance: {balance}</div>
        <div>Number of Students Paid: {numberOfStudentsPaid}</div>
        <div>Total Outstanding: {totalOutstanding}</div>
      </div>
      {/* Implement more detailed views and functionalities here */}
    </div>
  );
};

export default FinanceDashboard;
