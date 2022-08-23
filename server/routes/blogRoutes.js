const router = require("express").Router();
const { getAllBlog } = require("../controllers/blogController");
const Blog = require("../models/Blog");
const upload = require("../utils/Upload");

// Create blog
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const blog = new Blog({
      image: req.file.filename,
      name: req.body.name,
      heading: req.body.name,
      blog: req.body.blog,
    });
    blog.save();
    res.status(201).json({
      success: true,
      message: "Blog Added!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add blog!",
    });
  }
});

// Get all blogs
router.route("/all").get(getAllBlog);

module.exports = router;
