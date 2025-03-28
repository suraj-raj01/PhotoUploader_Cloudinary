const mongoose = require("mongoose");
const photoUploadSchema = new mongoose.Schema({
    images:{
        type:String,
        require:true
    },
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("upload",photoUploadSchema);