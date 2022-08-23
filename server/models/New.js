const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});
const newModel = mongoose.model("New Arrival", newSchema);
module.exports = newModel;
