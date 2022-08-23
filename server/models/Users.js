const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
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

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
