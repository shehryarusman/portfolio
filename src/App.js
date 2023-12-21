import React, { useState } from 'react';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Skills } from './Components/Skills';
import HomePage from './Components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
