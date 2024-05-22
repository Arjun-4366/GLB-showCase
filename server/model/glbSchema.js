const mongoose = require('mongoose')
const glbModel = mongoose.Schema({
    
    modelName:{
        type:String,
        required:true
    },
    data:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('glb',glbModel)