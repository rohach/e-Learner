const router = require("express").Router();
const {
  getAllNotices,
  getANotice,
} = require("../controllers/noticeController");
const {} = require("../models/Notice");
const upload = require("../utils/Upload");
const Notice = require("../models/Notice");

//New Notice
router.post("/newnotice", upload.single("New"), async (req, res) => {
  try {
    const newArrival = new Notice({
      name: req.body.name,
      title: req.body.title,
      message: req.body.message,
      image: req.file.filename,
    });
    newArrival.save();
    res.status(201).json({
      success: true,
      message: "Notice added!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add Notice!",
    });
  }
});

// Get all notices
router.route("/all").get(getAllNotices);

// Get a notice
router.route("/:id").get(getANotice);

module.exports = router;
