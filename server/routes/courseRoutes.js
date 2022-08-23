const router = require("express").Router();
const Courses = require("../models/Courses");
const { getAllCourse, getACourse } = require("../controllers/courseController");
const upload = require("../utils/Upload");

// Add course
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const newCourse = new Courses({
      name: req.body.name,
      title: req.body.title,
      small_desc: req.body.small_desc,
      main_desc: req.body.main_desc,
      enrolled: req.body.enrolled,
      image: req.file.filename,
    });
    newCourse.save();
    res.status(201).json({
      success: true,
      message: "Course added!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add course!",
    });
  }
});

// Get all courses
router.route("/all").get(getAllCourse);

//Get a course
router.route("/:id").get(getACourse);

module.exports = router;
