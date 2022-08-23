const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  address: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
});
const adminModel = new mongoose.model("Admin", adminSchema);
module.exports = adminModel;
