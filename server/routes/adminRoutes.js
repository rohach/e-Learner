const router = require("express").Router();
const Admin = require("../models/Admin");
const upload = require("../utils/Upload");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginAdmin } = require("../controllers/adminController");

// Register
router.post("/register", upload.single("image"), async (req, res) => {
  const { name, email, password, address, phone, image, desc } = req.body;
  const admin = await Admin.findOne({ email: email });
  if (admin) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(req.body.password, salt);
      const doc = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address,
        phone: req.body.phone,
        image: req.file.filename,
        desc: req.body.desc,
      });
      await doc.save();

      res.status(201).send({
        message: "Registration success!",
        doc,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Registration Failed!",
      });
    }
  }
});

// Login
router.route("/adminlogin").post(loginAdmin);

module.exports = router;
