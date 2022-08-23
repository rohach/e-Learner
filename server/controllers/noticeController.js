const router = require("express").Router();
const Notice = require("../models/Notice");

// Get all notices
exports.getAllNotices = async (req, res) => {
  const notice = await Notice.find();
  if (notice) {
    res.status(200).json({
      success: true,
      notice,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get notices!",
    });
  }
};

// Get single notice
exports.getANotice = async (req, res) => {
  const notice = await Notice.findById(req.params.id);
  if (notice) {
    res.status(200).json({
      success: true,
      notice,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to  the notice!",
    });
  }
};
