const router = require("express").Router();
const New = require("../models/New");

exports.getNewArrival = async (req, res) => {
  const newArrival = await New.findById(req.params.id);
  if (!newArrival) {
    res.status(400).json({
      succeess: false,
      message: "Unable to locate the product!",
    });
  } else {
    res.status(200).json({
      newArrival,
    });
  }
};

exports.getAllNewArrivals = async (req, res) => {
  const newArrival = await New.find();
  if (!newArrival) {
    res.status(400).json({
      succeess: false,
      message: "Unable to locate the product!",
    });
  } else {
    res.status(200).json({
      newArrival,
    });
  }
};
