import React, { useEffect, useState } from "react";
import { useGLTF} from "@react-three/drei";
import { useGLBContext } from "../GLBContext";
function GLBModel({props}) {
  const {glbData} = useGLBContext()
  const [glbUrl,setGlbUrl] = useState(null)
  console.log('modelGlb',glbData)
  useEffect(() => {
    if (glbData && glbData.data && glbData.data.data) {

      const blob = new Blob([new Uint8Array(glbData.data.data)], { type: 'application/octet-stream' });
      const objectUrl = URL.createObjectURL(blob);
      setGlbUrl(objectUrl);

  
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [glbData]);

  const { scene } = useGLTF( "/c4.glb");
  return scene ? <primitive object={scene} {...props} /> : null;
}

export default GLBModel;
