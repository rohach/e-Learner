const router = require("express").Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const upload = require("../utils/Upload");

// login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcryptjs.compare(password, user.password);
        if (user.email === email && isMatch) {
          // Generate JWT Token
          const token = jwt.sign(
            { userID: user._id },
            process.env.JWT_SECTET_KEY,
            { expiresIn: "5d" }
          );
          res.status(200).json({
            success: true,
            message: "Logged in successfully!",
            token,
            user,
          });
        } else {
          res.status(500).json({
            success: false,
            message: "Email or Password is not valid!",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "You are not a registered User!",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Sorry, you can't login!",
    });
  }
};

// Get a user detail
exports.getUserDetail = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json({
      success: false,
      message: "Unable to locate the user!",
    });
  } else {
    res.status(200).json({
      user,
    });
  }
};
