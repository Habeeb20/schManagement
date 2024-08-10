const express = require('express');
const Expenditure = require('../../models/finance/Expenditure');
const expenditureRouter = express.Router();

// Add expenditure
expenditureRouter.post('/postexpenditure', async (req, res) => {
  const { content, amount, date, adminId } = req.body;
  try {
    const expenditure = new Expenditure({ content, amount, date, adminId });
    await expenditure.save();
    res.status(201).json(expenditure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all expenditures for an admin
expenditureRouter.get('/:adminId', async (req, res) => {
  const { adminId } = req.params;
  try {
    const expenditures = await Expenditure.find({ adminId });
    res.status(200).json(expenditures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = expenditureRouter;
