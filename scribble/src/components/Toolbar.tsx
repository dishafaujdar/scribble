import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-item">
        <button>Press / to open insert menu</button>
      </div>
      <div className="toolbar-item">
        <button>Draw, Diagram, or make an AI Diagram</button>
      </div>
    </div>
  );
};

export default Toolbar;