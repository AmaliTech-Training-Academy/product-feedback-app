import React from 'react';
import './App.css';
import Feedback from './Pages/Feedback/Feedback';
import ProductApp from './Routes/routes';


function App() {
  return (
    <div className="App">
      <ProductApp/>
      <Feedback />
    </div>
  );
}

export default App;
