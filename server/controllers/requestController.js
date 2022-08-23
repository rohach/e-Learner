const router = require("express").Router();
const Request = require("../models/Requests");

// Create request
exports.createRequest = async (req, res) => {
  const newRequest = await Request.create(req.body);
  if (newRequest) {
    res.status(201).json({
      success: true,
      message: "Request sent successfully!",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to create the request!",
    });
  }
};

// Get all request
exports.getAllRequest = async (req, res) => {
  const newRequest = await Request.find();
  if (newRequest) {
    res.status(200).json({
      success: true,
      newRequest,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get requests!",
    });
  }
};

// Get a request
exports.getARequest = async (req, res) => {
  const newRequest = await Request.findById(req.params.id);
  if (newRequest) {
    res.status(200).json({
      success: true,
      newRequest,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get the request!",
    });
  }
};
