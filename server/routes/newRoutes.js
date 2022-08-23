const router = require("express").Router();
const {
  getNewArrival,
  getAllNewArrivals,
} = require("../controllers/newController");
const New = require("../models/New");
const upload = require("../utils/Upload");

// Insert New Arrivals
router.post("/newarrival", upload.single("New"), async (req, res) => {
  try {
    const newArrival = new New({
      image: req.file.filename,
    });
    newArrival.save();
    res.status(201).json({
      success: true,
      message: "Product added!",
    });
  } catch (error) {
    res.send(400).json({
      success: false,
      message: "Failed to add the product!",
    });
  }
});

// Get all New Arrivals
router.route("/all").get(getAllNewArrivals);

// Get New Arrivals
router.route("/:id").get(getNewArrival);

module.exports = router;
