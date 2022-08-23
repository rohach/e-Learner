const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    small_desc: {
      type: String,
    },
    main_desc: {
      type: String,
    },
    enrolled: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
const coursesModel = new mongoose.model("Courses", coursesSchema);
module.exports = coursesModel;
