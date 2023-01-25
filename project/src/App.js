import React, { useState } from 'react';
import { Routes, Route } from 'react-router'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import ProductApp from './Routes/routes';

function App() {
  const [item, setItem] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
      <ProductApp/>
      </BrowserRouter>

    </div>
  );
}

export default App;
