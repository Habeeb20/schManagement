const express = require('express');
const Student = require('../../models/finance/Student');
const studentRouter = express.Router();

// Add student
studentRouter.post('/poststudent', async (req, res) => {
  const { name, amountPaid, datePaid, purpose, adminId } = req.body;
  try {
    const student = new Student({ name, amountPaid, datePaid, purpose, adminId });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all students for an admin
studentRouter.get('/:adminId', async (req, res) => {
  const { adminId } = req.params;
  try {
    const students = await Student.find({ adminId });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = studentRouter;
