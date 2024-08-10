const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amountPaid: { type: Number, required: true, default: 0 },
  datePaid: { type: Date, required: true },
  purpose: { type: String, required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
