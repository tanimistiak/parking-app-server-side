const bodyParser = require("body-parser");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    //relative path
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    // Define the filename for the uploaded file
    // console.log(req.body);
    cb(null, req?.body?.email + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;
