import "./App.css";
import { GLBProvider } from "./components/GLBContext";
import NewGLBUpload from "./components/NewGLBUpload/NewGLBUpload";
import Presentation from "./components/Presentation/Presentation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <GLBProvider>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="GLBUpload" element={<NewGLBUpload />} />
        </Routes>
      </div>
    </GLBProvider>
  );
}

export default App;
