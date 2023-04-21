const { Router } = require("express");
const multer = require('multer')
const UploadFile = require("../controllers/uploadFile.controller");
const upload = multer({ dest: 'upload/' })

const uploadFileRouter = Router()

uploadFileRouter.post("/", upload.single('myfile'), UploadFile)

module.exports = uploadFileRouter 