const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    heading: {
      type: String,
    },
    blog: {
      type: String,
    },
  },
  { timestamps: true }
);
const blogModel = new mongoose.model("Blog", blogSchema);
module.exports = blogModel;
