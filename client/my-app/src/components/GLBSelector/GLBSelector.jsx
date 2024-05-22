import React, { useEffect, useState } from "react";
import "./GLBSelector.css";
import axios from "axios";
import { useGLBContext } from "../GLBContext";
function GLBSelector() {
  const [glb,setGLB] = useState([])
  const {setGLBData} = useGLBContext() 

 

    const fetchAllGLB = async()=>{
      const config = {
        headers:{
          'Content-type':'application/json'
        }
      }
      try{
       const response = await axios.get('http://localhost:4004/getAllGLB',config)
       setGLB(response.data)
       console.log('allGlb',response.data)
      }
      catch(error){
        console.log(error.message)
      }
    } 

    useEffect(()=>{
      fetchAllGLB() 
     },[])

  return (
    <div className="GLB-selector-container">
      <div className="GLB-selector-box">
     
      {
        glb.map((glbItem)=>(
          <div className="GLB-select" key={glbItem._id} onClick={()=>setGLBData(glbItem)}>{glbItem.modelName}</div>
        ))
      }
          
       
     
     
     
      </div>
    </div>
  );
}

export default GLBSelector;
