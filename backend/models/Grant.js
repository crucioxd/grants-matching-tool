const mongoose = require('mongoose');

const grantSchema = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  location: { type: String, required: true },
  sector: { type: String, required: true },
});

const Grant = mongoose.model('Grant', grantSchema);
module.exports = Grant;
