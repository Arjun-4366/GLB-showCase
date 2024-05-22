const glbModel = require('../model/glbSchema')
const fs = require('fs')


const uploadGLB = async(req,res)=>{
    try{
      const modelName = req.body.modelName
      console.log('modelNmae',modelName)
      const glb = req.file
      console.log('glb',glb)
     if(!glb){
        return res.json({success:false,message:'no file uploaded'})
     }
      const glbFile = await fs.promises.readFile(glb.path)
     const newGLB = await new glbModel({
        modelName:modelName,
        data:glbFile
     })
     const savedGLB = await newGLB.save()
    //  console.log(savedGLB)
     res.json({success:true,message:'glb file uploaded',data:savedGLB})
    }
    catch(error){
        console.log(error.message)
    }
}
const getAllGLB = async(req,res)=>{
    try{
     const allGLB = await glbModel.find()
    //  console.log('allGLB',allGLB)
     res.json(allGLB)
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports ={ uploadGLB,getAllGLB}