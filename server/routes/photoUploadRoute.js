const express = require("express");
const { uploadPhoto, displyPhoto, showImage } = require("../controller/uploadPhotoController");
const route = express.Router();

route.post("/uploadphoto",uploadPhoto);
route.get("/display",displyPhoto);
route.post("/showimage",showImage);

module.exports = route;