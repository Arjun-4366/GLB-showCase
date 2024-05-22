import { createContext,useContext,useState } from "react";



const GLBContext = createContext()

export function useGLBContext(){
    return useContext(GLBContext)
}   

export function GLBProvider({children}){
    const[glbData,setGLBData] = useState(null)
    return(
        <GLBContext.Provider value={{glbData,setGLBData}}>
            {children}
        </GLBContext.Provider>
    )
}