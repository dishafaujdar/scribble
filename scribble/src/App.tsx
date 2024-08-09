import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import Login from './Header/Login';
import Signin from './Header/Signin';

const App: React.FC = () => {
  return (
  <div className="app">
    <Router>
      <Routes>
          <Route path="" element={<Toolbar />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="" element={<Canvas />} />
          <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  </div>
  );
};

export default App;