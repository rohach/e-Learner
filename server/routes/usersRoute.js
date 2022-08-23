const router = require("express").Router();
const { loginUser, getUserDetail } = require("../controllers/usersController");
const upload = require("../utils/Upload");
const User = require("../models/Users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", upload.single("image"), async (req, res) => {
  const { name, email, password, address, phone, image, desc } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  } else {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(req.body.password, salt);
      const doc = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address,
        phone: req.body.phone,
        image: req.file.filename,
        desc: req.body.desc,
      });
      await doc.save();

      const saved_user = await User.findOne({ email: email });
      // Generate JWT TOKEN
      const token = jwt.sign(
        { userID: saved_user._id },
        process.env.JWT_SECTET_KEY,
        { expiresIn: "5d" }
      );

      res.status(201).send({
        message: "Registration success!",
        token: token,
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
router.route("/login").post(loginUser);

// Get a user
router.route("/:id").get(getUserDetail);

module.exports = router;
