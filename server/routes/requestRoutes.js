const router = require("express").Router();
const {
  createRequest,
  getAllRequest,
  getARequest,
} = require("../controllers/requestController");

// Create Request
router.route("/createrequest").post(createRequest);

// Get all Request
router.route("/all").get(getAllRequest);

// Get a Request
router.route("/:id").get(getARequest);

module.exports = router;
