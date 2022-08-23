const multer = require("multer");
let path = require("path");
const fs = require("fs");

function getDatePath(date) {
  return date.getFullYear() + "/" + (date.getMonth() + 1);
}
function getDirPath(dirPath) {
  try {
    if (!fs.existsSync(dirPath))
      fs.promises.mkdir(dirPath, { recursive: true });
    return dirPath;
  } catch (error) {
    console.log(error.message);
  }
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '../media/images');
    cb(null, getDirPath("./public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let upload = multer({ storage, fileFilter });
module.exports = upload;
