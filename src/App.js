import React from 'react';
import './App.css';
import RouterURL from './RouterURL/RouterURL'
import {BrowserRouter as Router  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>   
        <RouterURL />
      </div>
    </Router>
  );
}

export default App;
