const router = require("express").Router();
const Courses = require("../models/Courses");

// Get all courses
exports.getAllCourse = async (req, res) => {
  try {
    const courses = await Courses.find();
    if (courses) {
      res.status(200).json({
        success: true,
        courses,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to retrive courses!",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Server encountered some problem!",
    });
  }
};

// Get a course
exports.getACourse = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);
    if (course) {
      res.status(200).json({
        success: true,
        course,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to get your course!",
      });
    }
  } catch (error) {
    res.status(400).json({
      succesS: false,
      message: "Server encountered some problem!",
    });
  }
};
