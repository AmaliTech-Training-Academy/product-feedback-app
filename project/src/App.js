import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import ProductApp from './Routes/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ProductApp/>

      </BrowserRouter>

    </div>
  );
}

export default App;
