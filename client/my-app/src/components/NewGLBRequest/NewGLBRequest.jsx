import React from "react";
import "./NewGLBRequest.css";
import { useNavigate } from "react-router-dom";
function NewGLBRequest() {
  const navigate = useNavigate();
  return (
    <div className="newGLB">
      <p>Want to upload a new GLB ? click Below</p>
      <button
        onClick={() => {
          navigate("GLBUpload");
        }}>
        New GLB
      </button>
    </div>
  );
}

export default NewGLBRequest;
