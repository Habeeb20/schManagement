// components/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const FinanceStudentForm = () => {
  const [name, setName] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [datePaid, setDatePaid] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      await axios.post('/poststudent', { name, amountPaid, datePaid, purpose, adminId: 'adminId' }, config);
      // Handle success
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount Paid"
          value={amountPaid}
          onChange={(e) => setAmountPaid(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date Paid"
          value={datePaid}
          onChange={(e) => setDatePaid(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default FinanceStudentForm;
