const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  name: String,
  email: String,
  bikeModel: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Buyer', buyerSchema);
