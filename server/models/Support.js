const mongoose = require("mongoose");
const supportSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  query: {
    type: String,
  },
  tags: {
    type: String,
  },
  needs: {
    type: String,
  },
});
const supportModel = new mongoose.model("Support", supportSchema);
module.exports = supportModel;
