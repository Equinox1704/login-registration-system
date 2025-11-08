const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,           
    default: ""
  },
  role: {
    type: String,           
    default: "User"
  },
  status: {
    type: String,           
    default: "Active"
  }
});

module.exports = mongoose.model('User', userSchema);
