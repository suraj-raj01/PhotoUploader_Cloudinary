const photoUploadModel = require("../models/photoUploadModel");

async function uploadPhoto(req,res){
    const {image} = req.body;
    try {
        const Data = new photoUploadModel({
            images:image
        })
        Data.save();
        return res.status(200).json({msg:"Photo Uploaded Successfull!!!"});
    } catch (error) {
        return res.status(400).json(error)
    }
}

async function displyPhoto(req,res){
    try {
        const Data = await photoUploadModel.find();
        return res.status(200).json(Data);
    } catch (error) {
        return res.status(400).json(error);
    }
}

async function showImage(req,res){
    const{id} = req.body;
    try {
        const Data = await photoUploadModel.findById(id);
        return res.status(200).json(Data);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports={
    uploadPhoto,
    displyPhoto,
    showImage
}