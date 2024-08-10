const mongoose = require('mongoose');

const ExpenditureSchema = new mongoose.Schema({
  content: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Expenditure = mongoose.model('Expenditure', ExpenditureSchema);
module.exports = Expenditure;
