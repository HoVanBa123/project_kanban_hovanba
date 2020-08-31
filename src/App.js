import React from 'react';
import './App.css';
import LoginSignup from './Component/LoginSignup'
import RouterURL from './RouterURL/RouterURL'
import {BrowserRouter as Router  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>   
        <LoginSignup />
        <RouterURL />
      </div>
    </Router>
  );
}

export default App;
