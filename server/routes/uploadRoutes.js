const express = require('express')
const uploadRoute = express()


const upload = require('../middleware/upload')
const uploadGLB = require('../controllers/uploadGLB')



uploadRoute.post('/uploadGlb',upload.single('GLB'),uploadGLB.uploadGLB)
uploadRoute.get('/getAllGLB',uploadGLB.getAllGLB)

module.exports = uploadRoute