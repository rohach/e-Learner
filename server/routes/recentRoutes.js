const router = require("express").Router();
const { getRecent } = require("../controllers/recentController");
const Recent = require("../models/Recent");
const upload = require("../utils/Upload");

// Create new
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const recent = new Recent({
      image: req.file.filename,
      title: req.body.title,
    });
    recent.save();
    res.status(201).json({
      success: true,
      recent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add recent arrivals!",
    });
  }
});

// Get all arrivals
router.route("/all").get(getRecent);

module.exports = router;
