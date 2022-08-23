const router = require("express").Router();
const Blog = require("../models/Blog");

// Display Blogs
exports.getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    if (blog) {
      res.status(200).json({
        success: true,
        blog,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to get Blog!",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Server encountered some problem!",
    });
  }
};
