const multer = require('multer')
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalName)
    }
})

const upload = multer({
     storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype === 'model/gltf-binary'|| file.mimetype === 'application/octet-stream'){
            cb(null,true)
        }
        else{
            // res.json({message:'invalid file type'})
            cb(new Error('invalid file type' + file.mimetype))
           
        }
    },
    limits:{
        fileSize: 12 * 1024 * 1024
    }
})

module.exports = upload