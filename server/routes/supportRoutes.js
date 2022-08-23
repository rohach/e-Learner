const router = require("express").Router();
const {
  createSupport,
  getAllSupports,
  getASupports,
} = require("../controllers/supportController");

// Post
router.route("/create").post(createSupport);

// Get all
router.route("/all").get(getAllSupports);

// Get a
router.route("/:id").get(getASupports);

module.exports = router;
