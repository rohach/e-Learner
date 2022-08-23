const mongoose = require("mongoose");
const recentSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
});
const recentModel = new mongoose.model("Recent", recentSchema);
module.exports = recentModel;
