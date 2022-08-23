const router = require("express").Router();
const Recent = require("../models/Recent");

// Display
exports.getRecent = async (req, res) => {
  try {
    const recent = await Recent.find();
    res.status(200).json({
      success: true,
      recent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to obtain recent arrivals!",
    });
  }
};
