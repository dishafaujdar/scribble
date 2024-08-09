import React from 'react';
import { useNavigate } from "react-router-dom";

const Toolbar: React.FC = () => {

  const Navigate = useNavigate();

  const handleSignup = () => 
    {
      Navigate('/login');
    }
  return (
    <div className="toolbar">
      <div className="toolbar-item">
        <button>Press / to open insert menu</button>
      </div>
      <div className="toolbar-item">
        <button>Draw, Diagram, or make an AI Diagram</button>
      </div>
      <div className="toolbar-item">
        <button onClick={handleSignup}>log in</button>
      </div>
    </div>
  );
};

export default Toolbar;

