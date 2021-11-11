const mongoose = require('mongoose');

const model = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  number: Number,
});

module.exports = mongoose.model('User', model);
