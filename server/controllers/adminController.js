const router = require("express").Router();
const Admin = require("../models/Admin");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// login
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const admin = await Admin.findOne({ email: email });
      if (admin != null) {
        const isMatch = await bcryptjs.compare(password, admin.password);
        if (admin.email === email && isMatch) {
          // Generate JWT Token
          const token = jwt.sign(
            { adminID: admin._id },
            process.env.JWT_SECTET_KEY,
            { expiresIn: "5d" }
          );
          res.status(201).json({
            success: true,
            message: "Logged in successfully!",
            token,
            admin,
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
          message: "You are not a registered admin!",
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
