const mongoose = require("mongoose");
const requestSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
    unique: true,
  },
  myreq: {
    type: String,
  },
});
const requestModel = mongoose.model("Request", requestSchema);
module.exports = requestModel;
