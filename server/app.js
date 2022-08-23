const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const connectDB = require("./config/conntectDb");
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const cors = require("cors");
const path = require("path");

// Routes
const userRoutes = require("./routes/usersRoute");
const newArrivalRoutes = require("./routes/newRoutes");
const requestRoutes = require("./routes/requestRoutes");
const supportRoutes = require("./routes/supportRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const courseRoutes = require("./routes/courseRoutes");
const recentRoutes = require("./routes/recentRoutes");
const blogRoutes = require("./routes/blogRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
connectDB(MONGO_URI);

app.use(express.json());
app.use(cors());

// Static folder visible
app.use(express.static(path.join(__dirname, "public/images")));

// Initializing Routes
app.use("/api/v1", userRoutes);
app.use("/api/v1/newarrival", newArrivalRoutes);
app.use("/api/v1/request", requestRoutes);
app.use("/api/v1/support", supportRoutes);
app.use("/api/v1/notice", noticeRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/recent", recentRoutes);
app.use("/api/v1/blog", blogRoutes);
// admin
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  try {
    console.log(`Server running at http:/localhost:${PORT}!`);
  } catch (error) {
    console.log(`Server encountered some problem!`);
  }
});
