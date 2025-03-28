const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const uploadPhotoRoute = require("./routes/photoUploadRoute")

mongoose.connect(DB).then(()=>{
    console.log("Database connected Successfull!!!");
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/upload",uploadPhotoRoute);

app.listen(PORT,()=>{
    console.log(`App listen on Port ${PORT}`);
})