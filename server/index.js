const express = require('express')
const uploadRoute = require('./routes/uploadRoutes')
const app  = express()
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/GLB-DB')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 3004


app.use('/',uploadRoute)


app.listen(PORT,()=>{
    console.log('server is listening in',PORT)
})

