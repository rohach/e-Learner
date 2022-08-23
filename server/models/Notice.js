const mongoose = require("mongoose");
const noticeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
const noticeModel = new mongoose.model("Notice", noticeSchema);
module.exports = noticeModel;
