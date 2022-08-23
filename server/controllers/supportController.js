const router = require("express").Router();
const Support = require("../models/Support");

// Create
exports.createSupport = async (req, res) => {
  const newSupport = await Support.create(req.body);
  if (newSupport) {
    res.status(201).json({
      success: true,
      message: "Query sent!",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to send query!",
    });
  }
};

// Display all
exports.getAllSupports = async (req, res) => {
  const newSupport = await Support.find();
  if (newSupport) {
    res.status(200).json({
      success: true,
      newSupport,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to find query!",
    });
  }
};

// Get single
exports.getASupports = async (req, res) => {
  const newSupport = await Support.findById(req.params.id);
  if (newSupport) {
    res.status(200).json({
      success: true,
      newSupport,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to find query!",
    });
  }
};
