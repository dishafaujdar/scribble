import React from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';

const App: React.FC = () => {
  return (
    <div className="app">
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default App;