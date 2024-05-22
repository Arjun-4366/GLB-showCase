import React, { useState } from 'react'
import './NewGLBUpload.css'
import { useNavigate } from 'react-router-dom'
import {IconButton} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { useGLBContext } from '../GLBContext';

function NewGLBUpload() {
  const [modelName,SetModelName] = useState('') 
  const [GLB,setGLB] = useState(null)
  const navigate = useNavigate()
  const {setGLBData} = useGLBContext() 

  const handleFileChange = (e) =>{
     setGLB(e.target.files[0])
  }
  const handleUpload = ()=>{
    if(!modelName || !GLB){
      alert('Please provide a model name and select a GLB file')
      return
    }
    const formData = new FormData()
    formData.append('modelName',modelName)
    formData.append('GLB',GLB)

    const uploadHandler = async()=>{
      const config = {
        headers:{
          'Content-type':'multipart/form-data'
        }
      }
      try{
       const response = await axios.post("http://localhost:4004/uploadGlb",formData,config)
       console.log('response',response.data)
       if(response.data.success === true){
        setGLBData(response.data.data)
        navigate('/')
       }
       else{
        alert('failed to upload')
       }
      }
      catch(error){
        console.log(error.message)
      }
    }
   uploadHandler()
  }
  return (
    <div className='container'>
      <IconButton style={{color:'red',width:'60px',background:'cadetblue',height:'60px',marginRight:'5px'}} onClick={()=>{navigate('/')}}>
      <ArrowBackIcon/>
      </IconButton>
      <div className='GLB-form-box'>

        <h4>Upload Your GLB File Here</h4>
        <div className='inputBox'>
        <input type="text" className=' input-text' onChange={(e)=>SetModelName(e.target.value)}/>
         <input type="file" className='input-file' accept='.glb' onChange={handleFileChange}/>
        </div>
        <button onClick={handleUpload}>Upload</button>
      
      </div>
    </div>
  )
}

export default NewGLBUpload
